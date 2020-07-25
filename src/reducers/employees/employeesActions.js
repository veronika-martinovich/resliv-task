export const SET_EMPLOYEES = "SET_EMPLOYEES";
export const actionSetEmployeeData = (data) => ({
  type: SET_EMPLOYEES,
  payload: data,
});

export const GET_EMPLOYEES = "GET_EMPLOYEES";
export const actionGetEmployeeData = () => ({
  type: GET_EMPLOYEES,
});

export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const actionAddEmployee = (newEmployee) => ({
  type: ADD_EMPLOYEE,
  payload: newEmployee,
});

export const UPDATE_NEXT_EMPLOYEE_INDEX = "UPDATE_NEXT_EMPLOYEE_INDEX";
export const actionUpdateNextEmployeeIndex = (index) => ({
  type: UPDATE_NEXT_EMPLOYEE_INDEX,
  payload: index,
});
