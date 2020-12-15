import React from "react";
import "./inputText.css";

export const InputText = ({ placeholder, type, name, value, onChange }) => {
  return (
    <div className="input--text--main--container">
      <input
        className="input--text--main--container--input"
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
