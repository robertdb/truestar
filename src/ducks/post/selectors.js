import { createSelector } from "reselect";

const getReducer = (state) => state.post;

export const getPost = createSelector([getReducer], ({ posts }) => posts);

export const isLoading = createSelector([getReducer], ({ loading }) => loading);

export const getPostFavorites = createSelector([getReducer], ({ posts }) =>
  posts.filter((i) => i.favorite)
);

export const getPostSelected = createSelector([getReducer], ({ posts }) =>
  posts.filter((i) => i.selected)
);
