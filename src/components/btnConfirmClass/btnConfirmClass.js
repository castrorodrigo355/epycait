import React from "react";
import "./btnConfirmClass.css";

export const BtnConfirmClass = ({ onClick, children }) => {
  return (
    <button className="btn--confirm--class--main--container" onClick={onClick}>
      {children}
    </button>
  );
};
