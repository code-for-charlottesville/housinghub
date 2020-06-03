import React from "react";
import "bulma/css/bulma.css";
import "../style/PropertySearch.css";
import "../style/CheckBox.css";
export default function ZipCode(props) {
  return (
    <div className="column">
      <tr>
        <label className="checkbox">
          <input type="checkbox" />
          Charlottesville, VA 22903
          <span className="checkbox-custom rectangular"></span>
        </label>
      </tr>
      <tr>
        <label className="checkbox">
          <input type="checkbox" />
          Charlottesville, VA 22904
          <span className="checkbox-custom rectangular"></span>
        </label>
      </tr>
      <tr>
        <label className="checkbox">
          <input type="checkbox" />
          Greene, VA 22935
          <span className="checkbox-custom rectangular"></span>
        </label>
      </tr>
      <tr>
        <label className="checkbox">
          <input type="checkbox" />
          Albemarle, VA 22987
          <span className="checkbox-custom rectangular"></span>
        </label>
      </tr>
    </div>
  );
}
