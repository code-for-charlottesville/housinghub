import React from "react";
import "bulma/css/bulma.css";
import {connect } from "react-redux";
import { setLoginField } from "../actions/login"

const Login = (props) => {
  return (
    <div className="hero-body">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-5-tablet is-4-desktop is-3-widescreen">
            <form action="" className="box">
              <div className="field">
                <label htmlFor="" className="label">
                  Email
                </label>
                <div className="control has-icons-left">
                  <input
                    type="email"
                    placeholder="e.g. bobsmith@gmail.com"
                    className="input"
                    onChange={e => props.dispatch(setLoginField("email", e.target.value))}
                    value={props.fields.email}
                    required
                  />
                  <span className="icon is-small is-left"></span>
                </div>
              </div>
              <div className="field">
                <label htmlFor="" className="label">
                  Password
                </label>
                <div className="control has-icons-left">
                  <input
                    type="password"
                    placeholder="*******"
                    className="input"
                    onChange={e => props.dispatch(setLoginField("password", e.target.value))}
                    value={props.fields.password}
                    required
                  />
                  <span className="icon is-small is-left"></span>
                </div>
              </div>
              <div className="field">
                <label htmlFor="" className="checkbox">
                  <input
                    type="checkbox"
                    onChange={e => props.dispatch(setLoginField("rememberMe", e.target.value === "true"))}
                    value={props.fields.rememberMe}
                  />
                  Remember me
                </label>
              </div>
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-success">Login</button>
                </div>
                <div className="control">
                  <button className="button is-light">Register</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    fields : state.login.fields
  }
}


export default connect(mapStateToProps)(Login)