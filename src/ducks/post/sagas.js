import { all, delay, call, put, takeLatest } from "redux-saga/effects";
import * as api from "../../api";
import * as actions from "./actionCreators";
import * as actionTypes from "./actionTypes";
import * as utils from "./utils";

/** WATCHERS * */
function* getPost() {
  yield put(actions.setLoader({ loading: true }));

  try {
    const serviceProjects = {
      method: "get",
      service: `${api.NASA_TECHPORT_URL}?api_key=${api.AUTH_KEY}`,
    };

    const {
      projects: { projects },
    } = yield call(api.request, serviceProjects);
    const projectsId = utils.parseProjectById(projects);

    const projectCalls = projectsId.map((id) => {
      const service = {
        method: "get",
        service: `${api.NASA_TECHPORT_URL}/${id}?api_key=${api.AUTH_KEY}`,
      };
      return call(api.request, service);
    });

    // I have to create chunks since the service sent me a 429 error "too many request".
    const [chunk1, chuck2, chunk3, chunk4, chunk5] = utils.splitToChunks(
      projectCalls,
      5
    );
    let response = [];
    response = [...(yield all(chunk1))];
    response = [...response, ...(yield all(chuck2))];
    response = [...response, ...(yield all(chunk3))];
    response = [...response, ...(yield all(chunk4))];
    response = [...response, ...(yield all(chunk5))];

    const posts = utils.parseProjects(response);
    console.log("projects", posts);

    yield put(actions.setPosts({ posts }));
    yield put(actions.setLoader({ loading: false }));
  } catch (error) {
    // TODO: handle errors
    yield put(actions.setPosts({ posts: utils.postsMock }));
    console.log(error);
    yield put(actions.setLoader({ loading: false }));
  }
}

export default function* () {
  yield takeLatest(actionTypes.GET_POSTS, getPost);
}
