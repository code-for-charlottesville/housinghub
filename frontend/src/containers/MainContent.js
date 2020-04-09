import React from "react";
import { NavRegForm } from "../components/NavRegForm";
import { NewPropForm } from "../components/NewPropForm";
import {connect } from "react-redux";
import { Redirect, Switch, Route } from 'react-router-dom';
import Navbar from "../components/Navbar";

const MainContent = props => {
  if (!props.isLoggedIn) return (<Redirect to="/login"/>)
  return (
  	<div className="container column is-centered">
  		<Navbar/>
  		<Switch>
  		  <Route path={"/property/new"} component={NewPropForm}/>
        <Route path={"/property/search"}>
          search property
         </Route>
  		  <Route>
  		  	home
  		  </Route>
  		</Switch>
  	</div>
  );
};

function mapStateToProps(state) {
  return {
    isLoggedIn : state.login.isLoggedIn,
  }
}



export default connect(mapStateToProps)(MainContent)
