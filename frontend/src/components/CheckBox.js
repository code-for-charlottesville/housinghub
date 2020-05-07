import React from "react";
import "bulma/css/bulma.css";
import "../style/PropertySearch.css";
import ZipCode from "./ZipCode.js";

const CheckBox = (props) => {
  return (
    <div class="columns is-hoverable">
      <ZipCode />
      <div class="column">
        <tr>
          <label className="checkbox">
            <input type="checkbox" />
            Single Family Home
          </label>
        </tr>
        <tr>
          <label className="checkbox">
            <input type="checkbox" />
            Apartement
          </label>
        </tr>
        <tr>
          <label className="checkbox">
            <input type="checkbox" />
            Shared Apartement
          </label>
        </tr>
      </div>
    </div>
  );
};
export default CheckBox;
