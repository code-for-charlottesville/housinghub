import React from "react";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setLoginField, loginUser } from "../actions/login";
import { LoadingSpinner } from "./LoadingSpinner";

const Login = (props) => {
  if (props.isLoggedIn) return <Redirect to="/home" />;
  return (
    <div className="hero-body">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-5-tablet is-4-desktop is-3-widescreen">
            {props.loading && <LoadingSpinner />}
            {!props.loading && (
              <form
                action=""
                className="box"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="field">
                  <label htmlFor="" className="label">
                    Email
                  </label>
                  <div className="control has-icons-left">
                    <input
                      type="email"
                      placeholder="e.g. bobsmith@gmail.com"
                      className="input"
                      onChange={(e) =>
                        props.dispatch(setLoginField("email", e.target.value))
                      }
                      value={props.fields.email}
                      required
                    />
                    <span className="icon is-small is-left" />
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
                      onChange={(e) =>
                        props.dispatch(
                          setLoginField("password", e.target.value)
                        )
                      }
                      value={props.fields.password}
                      required
                    />
                    <span className="icon is-small is-left" />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="" className="checkbox">
                    <input
                      type="checkbox"
                      checked={props.fields.rememberMe}
                      onChange={(e) =>
                        props.dispatch(
                          setLoginField("rememberMe", !props.fields.rememberMe)
                        )
                      }
                    />
                    Remember me
                  </label>
                </div>
                {props.error && (
                  <div className="field">
                    <span className="tag is-danger is-light">
                      {"Could Not Log In: " + props.error}
                    </span>
                  </div>
                )}
                <div className="field is-grouped">
                  <button
                    className="button is-success"
                    onClick={() => loginUser()}
                  >
                    Login
                  </button>
                  <div className="control" />
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    fields: state.login.fields,
    isLoggedIn: state.login.isLoggedIn,
    loading: state.appState.loading,
    error: state.login.error,
  };
}

export default connect(mapStateToProps)(Login);
