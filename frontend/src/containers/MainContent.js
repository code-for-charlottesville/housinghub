import React from "react";
import { NavRegForm } from "../components/NavRegForm";
import { NewPropForm } from "../components/NewPropForm";
import {connect } from "react-redux";
import { Redirect } from 'react-router-dom';

const MainContent = props => {
  if (!props.isLoggedIn) return (<Redirect to="/login"/>)
  return (
  	<div/>
  );
};

function mapStateToProps(state) {
	return {
		isLoggedIn : state.login.isLoggedIn
	}
}

export default connect(mapStateToProps)(MainContent)
