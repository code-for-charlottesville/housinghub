import React from "react";
import NewPropForm from "../components/NewPropForm";
import { connect } from "react-redux";
import { Redirect, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import SearchProperty from "./SearchProperty";

const MainContent = (props) => {
  if (!props.isLoggedIn) return <Redirect to="/login" />;
  return (
    <div className="main-content">
      <Navbar />
      <Switch>
        <Route path={"/property/new"} component={NewPropForm} />
        <Route component={SearchProperty} />
      </Switch>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isLoggedIn: state.login.isLoggedIn,
  };
}

export default connect(mapStateToProps)(MainContent);
