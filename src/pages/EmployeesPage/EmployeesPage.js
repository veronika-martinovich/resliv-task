import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { EmployeesPageView } from "../../components/EmployeesPageView/EmployeesPageView";
import { actionGetEmployeeData } from "../../reducers/employees/employeesActions";
import { employeesSelector } from "../../reducers/employees/employeesReducer";

export const EmployeesPage = () => {
  const { employees } = useSelector(employeesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetEmployeeData());
  }, [dispatch]);

  if (!employees) return null;
  return <EmployeesPageView employees={employees} />;
};
