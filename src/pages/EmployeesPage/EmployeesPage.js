import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { EmployeesTable } from "../../components/EmployeesTable/EmployeesTable";
import { EmployeeForm } from "../../components/EmployeeForm/EmployeeForm";
import { actionGetEmployeeData } from "../../reducers/employees/employeesActions";
import { employeesSelector } from "../../reducers/employees/employeesReducer";

export const EmployeesPage = () => {
  const { employees } = useSelector(employeesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetEmployeeData());
  }, [dispatch]);

  if (!employees) return null;
  return (
    <div className="employee-page">
      <EmployeeForm />
      <EmployeesTable employees={employees} />
    </div>
  );
};
