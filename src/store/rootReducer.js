import { combineReducers } from "redux";
import { employeesState } from "../reducers/employees/employeesReducer";

export const rootReducer = combineReducers({
  employeesState,
});
