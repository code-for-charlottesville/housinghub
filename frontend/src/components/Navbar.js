import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setSidebarOpen } from "../actions/appState";
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
          onClick={() => props.dispatch(setSidebarOpen(!props.sidebarOpen))}
        >
          <span aria-hidden="true" className="burger-line" />
          <span aria-hidden="true" className="burger-line" />
          <span aria-hidden="true" className="burger-line" />
        </a>
      </div>
    </nav>
  );
};

function mapStateToProps(state) {
  return {
    sidebarOpen: state.appState.sidebarOpen,
  };
}

export default connect(mapStateToProps)(Navbar);
