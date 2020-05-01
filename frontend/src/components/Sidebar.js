import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "../style/Sidebar.css";
import { setSidebarOpen } from "../actions/appState";

const Sidebar = (props) => {
  let items = [
    {
      text: "Home",
      path: "/home",
    },
    {
      text: "Property Search",
      path: "/property/search",
    },
    {
      text: "Manage My Properties",
      path: "/property/manage",
    },
    {
      text: "Create New Property",
      path: "/property/new",
    },
    {
      text: "Logout",
      path: "/logout",
    },
  ];

  return (
    <Menu
      customBurgerIcon={false}
      customCrossIcon={false}
      isOpen={props.sidebarOpen}
      disableOverlayClick={() => props.dispatch(setSidebarOpen(false))}
    >
      {items.map((i, k) => (
        <div
          className={`menu-item ${
            props.location.pathname === i.path ? "menu-item-selected" : ""
          }`}
        >
          <span className="circle" />
          <Link
            onClick={() => props.dispatch(setSidebarOpen(false))}
            to={i.path}
            key={`sidebar-item-${k}`}
          >
            {i.text}
          </Link>
        </div>
      ))}
    </Menu>
  );
};

function mapStateToProps(state) {
  return {
    sidebarOpen: state.appState.sidebarOpen,
  };
}

export default connect(mapStateToProps)(withRouter(Sidebar));
