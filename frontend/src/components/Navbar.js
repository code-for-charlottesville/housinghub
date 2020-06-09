import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setSidebarOpen } from "../actions/appState";
import "../style/Sidebar.css";
import { Navbar, Nav } from "react-bootstrap";

const LocalNavbar = (props) => {
  return (
    <Navbar expand="true" bg="dark" variant="dark">
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => props.dispatch(setSidebarOpen(!props.sidebarOpen))}
      />
    </Navbar>
  );
};

function mapStateToProps(state) {
  return {
    sidebarOpen: state.appState.sidebarOpen,
  };
}

export default connect(mapStateToProps)(LocalNavbar);
