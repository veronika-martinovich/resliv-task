import { takeEvery } from "redux-saga/effects";
import { GET_EMPLOYEES } from "../reducers/employees/employeesActions";
import { getEmployeesData } from "../sagas/getEmployeesData";

//const actionsForEmployees = [SET_EMPLOYEES, GET_EMPLOYEES];

export function* sagaWatcher() {
  
  yield takeEvery(GET_EMPLOYEES, getEmployeesData);
}
