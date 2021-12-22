import produce from "immer";
import {
  GET_ALL_EMPLOYEES,
  GET_ALL_EMPLOYEES_SUCCESS,
  GET_ALL_EMPLOYEES_FAILED,
  //   RESET,
} from "../constants/employee";

export const initialState = {
  allEmployee: [],
  statusFlags: {
    isLoading: false,
    isGetEmployeeFailure: false,
    isGetEmployeeSuccess: false,
  },
  logs: {
    err: null,
  },
};

/* eslint-disable default-case, no-param-reassign */
const employee = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      // REGISTER
      case GET_ALL_EMPLOYEES: {
        draft.statusFlags.isLoading = true;
        break;
      }
      case GET_ALL_EMPLOYEES_SUCCESS: {
        draft.statusFlags.isLoading = false;
        draft.statusFlags.isGetEmployeeSuccess = true;
        draft.statusFlags.isGetEmployeeFailure = false;
        draft.allEmployee = action.payload;
        break;
      }
      case GET_ALL_EMPLOYEES_FAILED: {
        draft.logs.err = action.message;
        draft.statusFlags.isLoading = false;
        draft.statusFlags.isGetEmployeeSuccess = false;
        draft.statusFlags.isGetEmployeeFailure = true;
        break;
      }
    }
  });

export default employee;
