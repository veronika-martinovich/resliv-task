import { put, call } from "redux-saga/effects";
import { fetchEmployees } from "../utilities/network/fetchEmployees";
import { actionSetEmployeeData } from "../reducers/employees/employeesActions";

export function* getEmployeesData() {
  console.log('hfj');
  const employeesData = yield call(fetchEmployees);
  yield put(actionSetEmployeeData(employeesData));
}
