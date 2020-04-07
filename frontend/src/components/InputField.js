import React from "react";

export const InputField = ({ inputName, inputType, inputPh }) => {
  return (
    <div className="field">
      <label className="label">{inputName}</label>
      <div className="control">
        <input className="input" type={inputType} placeholder={inputPh} />
      </div>
    </div>
  );
};
