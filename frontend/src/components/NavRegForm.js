import React from "react";
import { InputField } from "./InputField";


export const NavRegForm = () => {
  return (
    <div className="container column is-one-third">
      <h1 className="title">Navigator Registration</h1>
      <form className="box">
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
        <InputField inputName="Email" inputType="email" inputPh="Email" />
        <InputField
          inputName="Password"
          inputType="password"
          inputPh="Password"
        />
        <InputField
          inputName="Confirm password"
          inputType="password"
          inputPh="Password"
        />
        <InputField
          inputName="Organization"
          inputType="text"
          inputPh="Text input"
        />
        <div className="field">
          <label className="label">Role</label>
          <div className="control">
            <label className="radio">
              <input type="radio" name="answer" />
              Navigator
            </label>
            <label className="radio">
              <input type="radio" name="answer" />
              Landlord
            </label>
          </div>
        </div>

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
