import React from "react";
import "./EmployeesTable.scss";

export const EmployeesTable = ({ employees }) => {
  return (
    <table className="employee-table">
      <thead>
        <tr>
          <th className="employee-table__heading">Имя</th>
          <th className="employee-table__heading">Фамилия</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((item, index) => (
          <tr key={index}>
            <td className="employee-table__content">{item.first_name}</td>
            <td className="employee-table__content">{item.last_name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
