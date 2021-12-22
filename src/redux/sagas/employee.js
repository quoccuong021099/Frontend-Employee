import { call, takeLatest } from "redux-saga/effects";
import axiosClient from "../../api/axiosClient";
import { GET_ALL_EMPLOYEES } from "../constants/employee";
// import { loginAction } from "../../actions/login";

// Register
function* fecthAllEmployees() {
  const token = localStorage.token;
  if (token) {
    return axiosClient({
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      url: `employee`,
    }).then((data) => console.log("aaa", data));
  } else {
    window.location = "http://localhost:3000/login";
  }
}

// Login
function* getAllEmployeeSagaFunc() {
  const response = yield call(fecthAllEmployees);
  console.log("response", response);
  //   try {
  //     if (_get(response, "code") === 200) {
  //       localStorage.setItem("token", response.token);
  //       yield put(loginSuccess(_get(response, "data")));
  //     } else {
  //       yield put(loginFaiure(response.message));
  //     }
  //   } catch (error) {
  //     yield put(loginFaiure({ err: error.message }));
  //   }
}
export default function* authSaga() {
  yield takeLatest(GET_ALL_EMPLOYEES, getAllEmployeeSagaFunc);
}
