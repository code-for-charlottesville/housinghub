import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const LocalNavbar = (props) => {
  return (
    <Navbar expand="true" bg="dark" variant="dark">
      <Navbar.Toggle/>
    </Navbar>
  );
};

function mapStateToProps(state) {
  return {
    sidebarOpen: state.appState.sidebarOpen,
  };
}

export default connect(mapStateToProps)(LocalNavbar);
