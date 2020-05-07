import React, { useState, useEffect } from "react";
import "bulma/css/bulma.css";
import "../style/App.css";

const Dropdown = (props) => {
  let [name, getName] = useState("--");
  let changeName = (i) => {
    getName(i);
  };
  return (
    <div class="dropdown is-hoverable">
      <div class="dropdown-trigger">
        <p>{props.getName}</p>
        <button
          class="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu3"
        >
          <span>{name}</span>
          <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu3" role="menu">
        <div class="dropdown-content">
          <a href="#" class="dropdown-item" onClick={() => changeName(1)}>
            1
          </a>
          <a href="#" class="dropdown-item" onClick={() => changeName(2)}>
            2
          </a>
          <a href="#" class="dropdown-item" onClick={() => changeName(3)}>
            3
          </a>
          <a href="#" class="dropdown-item" onClick={() => changeName(4)}>
            4
          </a>
          <a href="#" class="dropdown-item" onClick={() => changeName(5)}>
            5
          </a>
          <a href="#" class="dropdown-item" onClick={() => changeName(6)}>
            6
          </a>
          <a href="#" class="dropdown-item" onClick={() => changeName(7)}>
            7
          </a>
          <a href="#" class="dropdown-item" onClick={() => changeName(8)}>
            8
          </a>
          <a href="#" class="dropdown-item" onClick={() => changeName("--")} D>
            "--"
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
