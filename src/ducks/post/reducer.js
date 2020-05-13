import * as actionTypes from "./actionTypes";

const initialState = {
  posts: [],
  loading: false,
  errors: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_POSTS:
      return {
        ...state,
        ...payload,
      };
    case actionTypes.SET_SELECTED_POST:
      return {
        ...state,
        posts: state.posts.map((i) =>
          i.id === payload.id ? { ...i, selected: !i.selected } : i
        ),
      };
    case actionTypes.SET_FAVORITE_POST:
      return {
        ...state,
        posts: state.posts.map((i) =>
          i.id === payload.id ? { ...i, favorite: !i.favorite } : i
        ),
      };
    case actionTypes.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((i) => i.id !== payload.id),
      };
    case actionTypes.SET_LOADER:
      return { ...state, loading: payload.loading };
    default:
      return state;
  }
};
