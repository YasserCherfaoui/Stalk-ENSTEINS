/* eslint-disable default-case */
import { combineReducers } from "redux";
import * as actionTypes from "../actions/types";

const defaultState = {
  position: "HOME",
};
const appPosition = (state = defaultState, action) => {
  switch (action.type) {
    case "PROFILE" :
      return {
        position: action.type,
      };
    case "SEARCH" :
      return {
        position: action.type,
      };
    case "HEART":
      return {
        position: action.type,
      };
    case "ADD":
      return {
        position: action.type,
      };
    default:
      return defaultState;
  }
};
const initialUserState = {
  currentUser: null,
  isLoading: true,
  userPosts: null,
};

const user_reducer = (state = initialUserState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        currentUser: action.payload.currentUser,
        isLoading: false,
      };
    case actionTypes.CLEAR_USER:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
const rootReducers = combineReducers({
  app: appPosition,
  user: user_reducer,
});
export default rootReducers;
