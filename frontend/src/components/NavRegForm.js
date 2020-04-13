import React from "react";
import { InputField } from "./InputField";
import { connect } from "react-redux";
import { setUser, addUser } from "../actions/user";
import "bulma/css/bulma.css";

export const NavRegForm = () => {
  return (
    <div className="container column is-one-third">
      <h1 className="title">Navigator Registration</h1>
      <form className="box" onSubmit={(e) => e.preventDefault()}>
        <InputField
          inputName="First Name"
          inputType="text"
          inputPh="Text input"
          onChangeFn={setUser}
          onChangeFld="firstName"
          inputValue={props.fields.firstName}
        />
        <InputField
          inputName="Last Name"
          inputType="text"
          inputPh="Text input"
          onChangeFn={setUser}
          onChangeFld="lastName"
          inputValue={props.fields.lastName}
        />
        <InputField
          inputName="Email"
          inputType="email"
          inputPh="Email"
          onchangeFn={setUser}
          onChangeFld="email"
          inputValue={props.fields.email}
        />
        <InputField
          inputName="Password"
          inputType="password"
          inputPh="Password"
          onchangeFn={setUser}
          onChangeFld="password"
          inputValue={props.fields.password}
        />
        <InputField
          inputName="Confirm password"
          inputType="password"
          inputPh="Password"
          onchangeFn={setUser}
          onChangeFld="confirmPassword"
          inputValue={props.fields.confimPassword}
        />
        <InputField
          inputName="Organization"
          inputType="text"
          inputPh="Text input"
          onchangeFn={setUser}
          onChangeFld="organization"
          inputValue={props.fields.email}
        />
        <div className="field">
          <label className="label">Role</label>
          <div className="control">
            <label className="radio">
              <input type="radio" name="answer" value="navigator" />
              Navigator
            </label>
            <label className="radio">
              <input type="radio" name="answer" value="landlord" />
              Landlord
            </label>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" onClick={() => addUser()}>
              Submit
            </button>
          </div>
          <div className="control">
            <button className="button is-light">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    fields: state.propertyState.fields,
  };
}

export default connect(mapStateToProps)(NewRegForm);
