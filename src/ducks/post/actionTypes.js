export const feature = "[post]";

//* ACTION TYPES *//
// Command actions
export const GET_POSTS = `${feature} GET_POSTS`;

// Document actions(this actions always report to our reducer)
export const SET_POSTS = `${feature} SET_POSTS`;
export const SET_LOADER = `${feature} SET_LOADER`;
export const SET_SELECTED_POST = `${feature} SET_SELECTED_POST`;
export const SET_FAVORITE_POST = `${feature} SET_FAVORITE_POST`;
export const DELETE_POST = `${feature} DELETE_POST`;
