import {
  GET_ALL_EMPLOYEES,
  GET_ALL_EMPLOYEES_FAILED,
  GET_ALL_EMPLOYEES_SUCCESS,
} from "../constants/employee";

export const getAllEmployees = () => {
  return {
    type: GET_ALL_EMPLOYEES,
  };
};
export const getAllEmployeesSuccess = (payload) => {
  return {
    type: GET_ALL_EMPLOYEES_SUCCESS,
    payload,
  };
};
export const getAllEmployeesFailed = (message) => {
  return {
    type: GET_ALL_EMPLOYEES_FAILED,
    message,
  };
};
