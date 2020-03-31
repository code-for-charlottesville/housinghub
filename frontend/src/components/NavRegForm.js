import React from "react";
import "bulma/css/bulma.css";

export const NavRegForm = () => {
  return (
    <div className="container column is-one-third">
      <h1 className="title">Navigator Registeration</h1>
      <form>
        <div className="field">
          <label className="label">First Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" />
          </div>
        </div>
        <div className="field">
          <label className="label">Last Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" />
          </div>
        </div>
        <div className="field">
          <label className="label">User Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input className="input" type="password" placeholder="Password" />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="email" placeholder="Text input" />
          </div>
        </div>
        <div className="field">
          <label className="label">Agency</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" />
          </div>
        </div>
        <div className="field">
          <label className="label">Phone Number</label>
          <div className="control">
            <input className="input" type="number" placeholder="Number input" />
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
