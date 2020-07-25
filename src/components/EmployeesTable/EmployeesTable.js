import React from "react";
import "./EmployeesTable.scss";

export const EmployeesTable = ({ employees, onDeleteIconClick }) => {
  return (
    <table className="employee-table">
      <thead>
        <tr>
          <th className="employee-table__heading">Имя</th>
          <th className="employee-table__heading">Фамилия</th>
          <th className="employee-table__heading"></th>
        </tr>
      </thead>
      <tbody>
        {employees.map((item, index) => (
          <tr key={index}>
            <td className="employee-table__content">{item.first_name}</td>
            <td className="employee-table__content">{item.last_name}</td>
            <td className="employee-table__content">
              <span
                className="icon icon_delete"
                onClick={() => onDeleteIconClick(item.id)}
              ></span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
