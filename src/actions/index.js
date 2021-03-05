import * as actionTypes from "./types";
export const switchTab = (type) => {
  return {
    type: type,
  };
};
export const setUser = (userId) => {
  return {
    type: actionTypes.SET_USER,
    payload: {
      currentUser: userId,
    },
  };
};
export const clearUser = () => {
  return {
    type: actionTypes.CLEAR_USER,
  };
};
