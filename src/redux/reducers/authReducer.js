import produce from "immer";
import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  RESET_AUTH,
  //   RESET,
} from "../constants/auth";

export const initialState = {
  currentUser: null,
  userLogin: null,
  statusFlags: {
    isLoading: false,
    isRegisterFailure: false,
    isRegisterSuccess: false,
    isLoginFailure: false,
    isLoginSuccess: false,
  },
  logs: {
    err: null,
  },
};

/* eslint-disable default-case, no-param-reassign */
const authReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      // RESET FLAG AUTH
      case RESET_AUTH: {
        draft.statusFlags.isLoading = false;
        draft.statusFlags.isRegisterSuccess = false;
        draft.statusFlags.isRegisterFailure = false;
        draft.statusFlags.isLoginSuccess = false;
        draft.statusFlags.isLoginFailure = false;
        break;
      }
      // REGISTER
      case REGISTER: {
        draft.statusFlags.isLoading = true;
        break;
      }
      case REGISTER_SUCCESS: {
        draft.statusFlags.isLoading = false;
        draft.statusFlags.isRegisterSuccess = true;
        draft.statusFlags.isRegisterFailure = false;
        draft.currentUser = action.payload.user;
        break;
      }
      case REGISTER_FAILED: {
        draft.logs.err = action.message;
        draft.statusFlags.isLoading = false;
        draft.statusFlags.isRegisterSuccess = false;
        draft.statusFlags.isRegisterFailure = true;
        break;
      }
      // LOGIN
      case LOGIN: {
        draft.statusFlags.isLoading = true;
        break;
      }
      case LOGIN_SUCCESS: {
        draft.statusFlags.isLoading = false;
        draft.userLogin = action.payload;
        draft.statusFlags.isLoginSuccess = true;
        draft.statusFlags.isLoginFailure = false;
        break;
      }
      case LOGIN_FAILED: {
        draft.logs.err = action.message;
        draft.statusFlags.isLoading = false;
        draft.statusFlags.isLoginSuccess = false;
        draft.statusFlags.isLoginFailure = true;
        break;
      }
    }
  });

export default authReducer;
