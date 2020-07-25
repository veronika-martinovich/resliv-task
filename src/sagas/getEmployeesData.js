import { put, call } from "redux-saga/effects";
import { fetchEmployees } from "../utilities/network/fetchEmployees";
import { actionSetEmployeeData } from "../reducers/employees/employeesActions";

export function* getEmployeesData() {
  const employeesData = yield call(fetchEmployees);
  yield put(actionSetEmployeeData(employeesData));
}
