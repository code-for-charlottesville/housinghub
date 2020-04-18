import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = props => {

  let toggleNav = () => {
    let classList = document.getElementById("burgerFilling").classList;
    classList.contains("is-active")
      ? classList.remove("is-active")
      : classList.add("is-active");
  }

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
          onClick={() => toggleNav()}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="burgerFilling" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Properties</a>
            <div className="navbar-dropdown">
              <Link className="navbar-item" to="/property/new" onClick={() => toggleNav()}>
                Add Property
              </Link>
              <Link className="navbar-item" to="/property/search" onClick={() => toggleNav()}>
                Search Property
              </Link>
            </div>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">User</a>
            <div className="navbar-dropdown">
              <Link className="navbar-item" to="/logout" onClick={() => toggleNav()}>
                Log Out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default connect()(Navbar);
