import React from "react";
import { InputField } from "./InputField";
import "bulma/css/bulma.css";

export const NavRegForm = () => {
  return (
    <div className="container column is-one-third">
      <h1 className="title">Navigator Registeration</h1>
      <form>
        <InputField
          inputName="First Name"
          inputType="text"
          inputPh="Text input"
        />
        <InputField
          inputName="First Name"
          inputType="text"
          inputPh="Text input"
        />
        <InputField
          inputName="Last Name"
          inputType="text"
          inputPh="Text input"
        />
        <InputField
          inputName="User Name"
          inputType="text"
          inputPh="Text input"
        />
        <InputField
          inputName="Password"
          inputType="password"
          inputPh="Password"
        />
        <InputField inputName="Email" inputType="email" inputPh="Email" />
        <InputField
          inputName="Phone number"
          inputType="tel"
          inputPh="Phone number"
        />
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button className="button is-light">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
};
