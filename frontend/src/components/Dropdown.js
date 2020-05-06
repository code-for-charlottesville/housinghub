import React from "react";
import "bulma/css/bulma.css";
import "../style/App.css";

const Dropdown = (props) => {
    return (
        <div class="dropdown is-hoverable">
          <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
              <span>{props.getName}</span>
              <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu3" role="menu">
            <div class="dropdown-content">
              <a href="#" class="dropdown-item">
                1
              </a>
              <a href="#" class="dropdown-item">
                2
              </a>
              <a href="#" class="dropdown-item">
                3
              </a>
              <a href="#" class="dropdown-item">
                4
              </a>
              <a href="#" class="dropdown-item">
                5
              </a>
              <a href="#" class="dropdown-item">
                6
              </a>
              <a href="#" class="dropdown-item">
                7
              </a>
              <a href="#" class="dropdown-item">
                8
              </a>
            </div>
          </div>
        </div>
    )
}

export default Dropdown;
