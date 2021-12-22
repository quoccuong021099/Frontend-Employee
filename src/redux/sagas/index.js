import { all } from "redux-saga/effects";
import authSaga from "./auth";
import employee from "./employee";

export default function* rootSaga() {
  yield all([authSaga(), employee()]);
}
