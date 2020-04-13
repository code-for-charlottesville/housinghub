import React from "react";
import store from "../reducers";

export const InputField = ({
  inputName,
  inputType,
  inputPh,
  inputValue,
  onChangeFn,
  onChangeFld,
}) => {
  return (
    <div className="field">
      <label className="label">{inputName}</label>
      <div className="control">
        <input
          className="input"
          type={inputType}
          placeholder={inputPh}
          onChange={(e) => {
            store.dispatch(onChangeFn(onChangeFld, e.target.value));
          }}
          value={inputValue}
        />
      </div>
    </div>
  );
};
