import React from "react";
import "./Input.scss"

export const Input = ({ inputPlaceholder, inputValue, onInputChange }) => {
  return (
    <input
      type="text"
      className="input"
      placeholder={inputPlaceholder}
      value={inputValue}
      onChange={(e) => onInputChange(e.target.value)}
    />
  );
};
