import React, { useState, useEffect } from "react";
import "bulma/css/bulma.css";
import "../style/App.css";
import "../style/PropertySearch.css";
const Dropdown = (props) => {
  let [name, getName] = useState("--");
  let changeName = (i) => {
    getName(i);
  };
  return (
    <div className="dropdown is-hoverable">
      <div className="dropdown-trigger">
        <input type="text" placeholder={name} className="input" required />
        <button
          className="button-2"
          aria-haspopup="true"
          aria-controls="dropdown-menu3"
        >
          <span>
            <i className="arrow down"></i>
          </span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu3" role="menu">
        <div className="dropdown-content">
          {[1, 2, 3, 4, 5, 6, 7, 8, "--"].map((item) => {
            return (
              <a
                href="#"
                className="dropdown-item"
                onClick={() => changeName(item)}
              >
                {item}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
