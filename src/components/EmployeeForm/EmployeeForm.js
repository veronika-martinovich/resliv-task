import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../Input/Input";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import {
  actionAddEmployee,
  actionUpdateNextEmployeeId,
} from "../../reducers/employees/employeesActions";
import { employeesSelector } from "../../reducers/employees/employeesReducer";
import "./EmployeeForm.scss";

export const EmployeeForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { nextEmployeeId } = useSelector(employeesSelector);
  const dispatch = useDispatch();

  const placeholders = {
    firstName: "Введите имя",
    lastName: "Введите фамилию",
  };

  const addEmployeeHandler = (e) => {
    e.preventDefault();
    const newEmployee = {
      id: nextEmployeeId,
      email: "janet.weaver@reqres.in",
      first_name: firstName,
      last_name: lastName,
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
    };
    dispatch(actionAddEmployee(newEmployee));
    dispatch(actionUpdateNextEmployeeId(nextEmployeeId + 1));
  };

  return (
    <form className="employee-form" onSubmit={addEmployeeHandler}>
      <Input
        inputPlaceholder={placeholders.firstName}
        inputValue={firstName}
        onInputChange={setFirstName}
      />
      <Input
        inputPlaceholder={placeholders.lastName}
        inputValue={lastName}
        onInputChange={setLastName}
      />
      <PrimaryButton
        buttonName="Добавить сотрудника"
      />
    </form>
  );
};
