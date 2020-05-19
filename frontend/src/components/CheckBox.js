import React from "react";
import "bulma/css/bulma.css";

import ZipCode from "./ZipCode.js";
import "../style/CheckBox.css";

const CheckBox = (props) => {
  return (
    <div class="columns is-hoverable">
      <ZipCode />
      <div class="column">
        <tr>
        <label className="checkbox">
        <input type="checkbox"/>
        Single Family Home
        <span class="checkbox-custom rectangular"></span>
        </label>
        </tr>
        <tr>
        <label className="checkbox">
        <input type="checkbox"/>
        Apartment
        <span class="checkbox-custom rectangular"></span>
        </label>
        </tr>
        <tr>
        <label className="checkbox">
        <input type="checkbox"/>
        Shared Apartment
        <span class="checkbox-custom rectangular"></span>
        </label>
        </tr>
      </div>
    </div>
  );
};
export default CheckBox;
