import React from "react";
import "../style/App.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setSidebarOpen } from "../actions/appState";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const LocalNavbar = (props) => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="container-fluid">
      <Navbar.Brand href="/home">HousingHub</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="./home" className="h-hub-nav-link">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/property/search" className="h-hub-nav-link">Search</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/property/manage" className="h-hub-nav-link">My Houses</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/logout" className="h-hub-nav-link">Logout</Link>
          </Nav.Link>
          </Nav>
          {/* <Link to="#about">About</Link> */}
        <Form inline>
          <FormControl type="text" placeholder="Search" className="lg-4 rounded-left" />
          <Button variant="light">
          <svg className="bi bi-search rounded-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
          </svg>
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

function mapStateToProps(state) {
  return {
    sidebarOpen: state.appState.sidebarOpen,
  };
}

export default connect(mapStateToProps)(LocalNavbar);
