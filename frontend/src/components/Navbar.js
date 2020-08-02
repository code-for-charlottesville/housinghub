import React from "react";
import { connect } from "react-redux";
import "../style/App.css";
import BootstrapSearch from "../images/bootstrap-search";
import { Link } from "react-router-dom";
import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from "react-bootstrap";

const LocalNavbar = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="container-fluid">
      <Navbar.Brand href="/home" title="Home">Housing Hub</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="flex-lg-fill">
          <Nav.Link>
            <Link to="/about" className="text-white text-decoration-none h-hub-nav-link" title="Learn more about Code-For-Charlottesville!">About</Link>
          </Nav.Link>  
          <Form className="flex-fill nav-toggle" inline>
            <FormControl id="nav-search" searchtype="text" placeholder="Search" className="search-input" />
            <Button className="search-button" variant="light">
              <BootstrapSearch />
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
