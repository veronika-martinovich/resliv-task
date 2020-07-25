import {
  SET_EMPLOYEES,
  ADD_EMPLOYEE,
  UPDATE_NEXT_EMPLOYEE_INDEX,
  DELETE_EMPLOYEE,
} from "./employeesActions";

const defaultData = {
  employees: [],
  nextEmployeeIndex: 12,
};

export const employeesSelector = (state) => state.employeesState;

export const employeesState = (state = defaultData, action) => {
  switch (action.type) {
    case SET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
      };
    case ADD_EMPLOYEE:
      return {
        ...state,
        employees: [
          ...state.employees.slice(0, state.employees.length),
          action.payload,
        ],
      };
    case DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter((item) => item.id !== action.payload),
      };
    case UPDATE_NEXT_EMPLOYEE_INDEX:
      return {
        ...state,
        nextEmployeeIndex: action.payload,
      };
    default:
      return state;
  }
};
