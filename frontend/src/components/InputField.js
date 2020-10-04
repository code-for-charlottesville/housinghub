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
    <div>
      <label>{inputName}</label>
      <div>
        <input
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
