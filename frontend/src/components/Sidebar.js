import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "../style/Sidebar.css";

const Sidebar = (props) => {
  return (
    <Menu>
      <Link className="menu-item" to="/home">
        Home
      </Link>
      <Link className="menu-item" to="/property/search">
        Property Search
      </Link>
      <Link className="menu-item" to="/property/myproperties">
        My Properties
      </Link>
      <Link className="menu-item" to="/property/new">
        New Property
      </Link>
      <Link className="menu-item" to="/logout">
        Logout
      </Link>
    </Menu>
  );
};

export default connect()(Sidebar);
