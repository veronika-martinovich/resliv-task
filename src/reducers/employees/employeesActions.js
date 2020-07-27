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

export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";
export const actionDeleteEmployee = (index) => ({
  type: DELETE_EMPLOYEE,
  payload: index,
});

export const UPDATE_NEXT_EMPLOYEE_ID = "UPDATE_NEXT_EMPLOYEE_ID";
export const actionUpdateNextEmployeeId = (id) => ({
  type: UPDATE_NEXT_EMPLOYEE_ID,
  payload: id,
});
