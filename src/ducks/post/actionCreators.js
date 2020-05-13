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

export const deletePost = ({ id }) => ({
  type: actionTypes.DELETE_POST,
  payload: { id },
});

export const setSelectedPost = ({ id }) => ({
  type: actionTypes.SET_SELECTED_POST,
  payload: { id },
});

export const setFavoritePost = ({ id }) => ({
  type: actionTypes.SET_FAVORITE_POST,
  payload: { id },
});
