import { SET_EMPLOYEES } from "./employeesActions";

const defaultData = {
  employees: [],
};

export const employeesSelector = (state) => state.employeesState;

export const employeesState = (state = defaultData, action) => {
  switch (action.type) {
    case SET_EMPLOYEES:
      return {
        ...state,
      };
    default:
      return state;
  }
};
