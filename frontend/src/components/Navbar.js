import React from "react";

export const Navbar = ({ showLoginBox, showRegisterBox, showNewPropBox }) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <span className="navbar-item">HHub</span>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="burgerFilling"
          onClick={() => {
            let classList = document.getElementById("burgerFilling").classList;
            classList.contains("is-active")
              ? classList.remove("is-active")
              : classList.add("is-active");
          }}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="burgerFilling" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" onClick={showLoginBox}>
            Login
          </a>
          <a className="navbar-item" onClick={showRegisterBox}>
            Register
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Properties</a>
            <div className="navbar-dropdown">
              <a className="navbar-item">Search Properties</a>
              <a className="navbar-item" onClick={showNewPropBox}>
                Add Property
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
