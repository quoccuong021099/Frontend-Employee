import { combineReducers } from "redux";
import authReducer from "./authReducer";
import employeeReducer from "./employee";
const rootReducer = combineReducers({
  authReducer,
  employeeReducer,
});

export default rootReducer;
