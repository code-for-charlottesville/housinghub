import React from "react";
import { connect } from "react-redux";
import "../style/App.css";
import { Link } from "react-router-dom";
import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from "react-bootstrap";

const LocalNavbar = (props) => {

  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="container-fluid">
      <Navbar.Brand href="/home" title="Home">Housing Hub</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="flex-lg-fill">
          <Nav.Link>
            <Link to="/about" className="text-white text-decoration-none h-hub-nav-link" title="Learn more about Code-For-Charlottesville!">About</Link>
          </Nav.Link>  
          <Form className="flex-fill justify-content-center" inline>
            <FormControl id="nav-search" searchtype="text" placeholder="Search" className="col-6 search-input" />
            <Button className="search-button" variant="light">
            <svg className="bi bi-search" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
              <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
            </svg>
            </Button>
          </Form>
          <NavDropdown title={props.username} id="Navbar-user-dropdown">
              <NavDropdown.Item>
                <Link to="/logout" className="text-info text-decoration-none">Logout</Link>
              </NavDropdown.Item>
          </NavDropdown> 
        </Nav> 
      </Navbar.Collapse>
    </Navbar>
  );
};

function mapStateToProps(state) {
  return {
    username: state.user.uid,
  };
}

export default connect(mapStateToProps)(LocalNavbar);
