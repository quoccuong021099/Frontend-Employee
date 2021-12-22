import _get from "lodash/get";
import { call, put, takeLatest } from "redux-saga/effects";
import axiosClient from "../../api/axiosClient";
import { loginFaiure, loginSuccess, registerFaiure } from "../actions/auth";
import { LOGIN, REGISTER } from "../constants/auth";

// Register
function fecthRegister(data) {
  return axiosClient({
    method: "post",
    url: `register`,
    data,
  });
}

// Login
function fecthLogin(data) {
  return axiosClient({
    method: "post",
    url: `login`,
    data,
  });
}

// Register
function* registerSagaFunc({ payload }) {
  const response = yield call(fecthRegister, payload);
  console.log("response", response);
  try {
    if (_get(response, "code") === 200) {
      localStorage.setItem("token", response.token);
      console.log(" response.token", response.token);
      yield put(loginSuccess(_get(response, "data")));
    } else {
      yield put(registerFaiure(response.message));
    }
  } catch (error) {
    yield put(registerFaiure({ err: error.message }));
  }
}

// Login
function* loginSagaFunc({ payload }) {
  console.log("payload", payload);
  const response = yield call(fecthLogin, payload);
  console.log("response", response);
  try {
    if (_get(response, "code") === 200) {
      localStorage.setItem("token", response.token);
      yield put(loginSuccess(_get(response, "data")));
    } else {
      yield put(loginFaiure(response.message));
    }
  } catch (error) {
    yield put(loginFaiure({ err: error.message }));
  }
}
export default function* authSaga() {
  yield takeLatest(REGISTER, registerSagaFunc);
  yield takeLatest(LOGIN, loginSagaFunc);
}
