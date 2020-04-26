import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../style/Sidebar.css";

const Navbar = (props) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a
          role="button"
          className="navbar-item navbar-burger burger sidebar-burger-toggle"
          aria-label="menu"
          aria-expanded="false"
          data-target="burgerFilling"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
    </nav>
  );
};

export default connect()(Navbar);
