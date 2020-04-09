import React from "react";
import { Switch, Route } from 'react-router-dom';
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import "bulma/css/bulma.css";
import { connect } from 'react-redux';
import MainContent from "./containers/MainContent"

class App extends React.Component {
  render() {    
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/home" component={MainContent}/>
        <Route path="/" component={MainContent}/>
      </Switch>
    );
  }
}

function mapStateToProps(state) {
  return {
     isLoggedIn : state.login.isLoggedIn
  }
}


export default connect(mapStateToProps)(App);