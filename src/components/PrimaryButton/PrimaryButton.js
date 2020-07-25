import React from "react";
import "./PrimaryButton.scss";

export const PrimaryButton = ({ buttonName, onButtonClick }) => {
  return (
    <button
      type="submit"
      className="primary-button"
      onClick={onButtonClick ? (e) => onButtonClick(e) : null}
    >
      {buttonName}
    </button>
  );
};
