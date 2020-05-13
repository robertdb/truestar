import { createSelector } from "reselect";

const getReducer = (state) => state.post;

export const getPost = createSelector([getReducer], ({ posts }) => posts);

export const isLoading = createSelector([getReducer], ({ loading }) => loading);
