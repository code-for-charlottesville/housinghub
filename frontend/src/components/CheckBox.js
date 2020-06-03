import React from "react";
import "bulma/css/bulma.css";

import ZipCode from "./ZipCode.js";
import "../style/CheckBox.css";

const CheckBox = (props) => {
  return (
    <div className="columns is-hoverable">
      <ZipCode />
      <div className="column">
        <tr>
        <label className="checkbox">
        <input type="checkbox"/>
        Single Family Home
        <span className="checkbox-custom rectangular"></span>
        </label>
        </tr>
        <tr>
        <label className="checkbox">
        <input type="checkbox"/>
        Apartment
        <span className="checkbox-custom rectangular"></span>
        </label>
        </tr>
        <tr>
        <label className="checkbox">
        <input type="checkbox"/>
        Shared Apartment
        <span className="checkbox-custom rectangular"></span>
        </label>
        </tr>
      </div>
    </div>
  );
};
export default CheckBox;
