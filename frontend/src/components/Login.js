import React from "react";
import "bulma/css/bulma.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setLoginField, loginUser } from "../actions/login";

const Login = props => {
  if (props.isLoggedIn) return <Redirect to="/" />;

  return (
    <div className="hero-body">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-5-tablet is-4-desktop is-3-widescreen">
            <form action="" className="box" onSubmit={e => e.preventDefault()}>
              <div className="field">
                <label htmlFor="" className="label">
                  Email
                </label>
                <div className="control has-icons-left">
                  <input
                    type="email"
                    placeholder="e.g. bobsmith@gmail.com"
                    className="input"
                    onChange={e =>
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
                    onChange={e =>
                      props.dispatch(setLoginField("password", e.target.value))
                    }
                    value={props.fields.password}
                    required
                  />
                  <span className="icon is-small is-left" />
                </div>
              </div>
              {props.fields.error !== "" && <a>{props.fields.error}</a>}
              <div className="field">
                <label htmlFor="" className="checkbox">
                  <input
                    type="checkbox"
                    onChange={e =>
                      props.dispatch(
                        setLoginField("rememberMe", e.target.value === "true")
                      )
                    }
                    value={props.fields.rememberMe}
                  />
                  Remember me
                </label>
              </div>
              <div className="field is-grouped">
                <button
                  className="button is-success"
                  onClick={() => loginUser()}
                >
                  Login
                </button>
                <div className="control" />
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
    fields: state.login.fields,
    isLoggedIn: state.login.isLoggedIn
  };
}

export default connect(mapStateToProps)(Login);
