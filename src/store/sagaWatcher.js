import { takeEvery } from "redux-saga/effects";
import { SET_EMPLOYEES, GET_EMPLOYEES } from "../reducers/employees/employeesActions";

//const actionsForEmployees = [SET_EMPLOYEES, GET_EMPLOYEES];

export function* sagaWatcher() {
  yield takeEvery(SET_EMPLOYEES, /* func */);
}
