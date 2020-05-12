import * as actionTypes from "./actionTypes";

const initialState = {
  posts: [],
  loading: false,
  errors: null,
  selected: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_POSTS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
