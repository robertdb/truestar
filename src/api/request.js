import axios from "axios";
import { call, delay, race } from "redux-saga/effects";

const getRequest = ({ service, config }) => [service, config];
const postRequest = ({ service, body, config }) => [service, body, config];

const type = {
  get: getRequest,
  post: postRequest,
};

function* request(data, timeout = 5000) {
  const { method, service, headers, body = {} } = data;

  try {
    const config = {
      headers,
      crossdomain: true,
    };

    const { response, timeoutReached } = yield race({
      response: call(axios[method], ...type[method]({ service, body, config })),
      timeoutReached: delay(timeout),
    });

    if (timeoutReached) {
      return axios.Cancel(`Error: timeout of ${timeout}ms exceeded`);
    }

    return { ...response.data, success: response.status === 200 };
  } catch (error) {
    // TODO: Handler errors
  }
}

export { request };
