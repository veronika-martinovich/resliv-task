import React from "react";

export const EmployeesPageView = ({ employees }) => {
  return (
    <div>
      {employees.map((item, index) => (
        <div key={index}>{item.email}</div>
      ))}
    </div>
  );
};
