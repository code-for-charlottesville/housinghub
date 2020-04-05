import React from "react";
import "bulma/css/bulma.css";

export const Login = () => {
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
                    required
                  />
                  <span className="icon is-small is-left"></span>
                </div>
              </div>
              <div className="field">
                <label htmlFor="" className="checkbox">
                  <input type="checkbox" />
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
