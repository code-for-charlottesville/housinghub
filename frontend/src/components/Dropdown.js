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
    <div class="dropdown is-hoverable">
      <div class="dropdown-trigger">
          <input
            type="text"
            placeholder={name}
            className="input"
            required
          />
        <button
          class="button-2"
          aria-haspopup="true"
          aria-controls="dropdown-menu3"
        >
          <span><i class="arrow down"></i></span>
          <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu3" role="menu">
        <div class="dropdown-content">
          {[1,2,3,4,5,6,7,8,'--'].map(item => {
              return(
                  <a href="#" class="dropdown-item" onClick={() => changeName(item)}>
                    {item}
                  </a>
              )
          })}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
