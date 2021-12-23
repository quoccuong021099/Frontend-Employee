import {
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  RESET_AUTH,
} from "../constants/auth";

// REGISTER
export const registerAction = (payload) => {
  return {
    type: REGISTER,
    payload,
  };
};
export const registerSuccess = (payload) => {
  return {
    type: REGISTER_SUCCESS,
    payload,
  };
};
export const registerFaiure = (message) => {
  return {
    type: REGISTER_FAILED,
    message,
  };
};

// LOGIN
export const loginAction = (payload) => {
  return {
    type: LOGIN,
    payload,
  };
};
export const loginSuccess = (payload) => {
  console.log("payload", payload);
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};
export const loginFaiure = (message) => {
  return {
    type: LOGIN_FAILED,
    message,
  };
};

// RESET AUTH
export const resetAuth = () => {
  return {
    type: RESET_AUTH,
  };
};
