import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "./actionCreators";
import * as actionTypes from "./actionTypes";
import * as utils from "./utils";

/** WATCHERS * */
function* getPost() {
  yield put(actions.setLoader({ loading: true }));

  yield put(actions.setPosts({ post: [] }));
}

export default function* () {
  yield takeLatest(actionTypes.GET_POSTS, getPost);
}
