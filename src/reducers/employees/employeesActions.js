export const SET_EMPLOYEES = "SET_EMPLOYEES";
export const actionSetEmployeeData = (data) => ({
  type: SET_EMPLOYEES,
  payload: data,
});

export const GET_EMPLOYEES = "GET_EMPLOYEES";
export const actionGetEmployeeData = () => ({
  type: GET_EMPLOYEES,
});
