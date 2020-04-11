import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import "bulma/css/bulma.css";
import { connect } from "react-redux";
import MainContent from "./containers/MainContent";
import { checkForTokenFromStorage } from "./actions/login";


class App extends React.Component {

  componentDidMount() {
    checkForTokenFromStorage()
  }

  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={MainContent} />
        <Route>Page not found :(</Route>
      </Switch>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.login.isLoggedIn
  };
}

export default connect(mapStateToProps)(App);
