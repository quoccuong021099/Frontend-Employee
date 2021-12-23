import { combineReducers } from "redux";
import authReducer from "./authReducer";
import employeeReducer from "./employee";
import { connectRouter } from "connected-react-router";
const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    authReducer,
    employeeReducer,
  });

export default rootReducer;
