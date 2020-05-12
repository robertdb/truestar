import * as actionTypes from "./actionTypes";

// Command action
export const getPosts = () => ({
  type: actionTypes.GET_POSTS,
});

// document actions
export const setPosts = ({ posts }) => ({
  type: actionTypes.SET_POSTS,
  payload: { posts },
});

export const setLoader = ({ loading }) => ({
  type: actionTypes.SET_LOADER,
  payload: { loading },
});
