import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./containers/Login";

import { connect } from "react-redux";
import MainContent from "./containers/MainContent";
import { setJwtStatus } from "./actions/login";
import { Footer } from "./components/Footer";
import Logout from "./components/Logout";
import SearchTool from "./components/SearchTool";
import "./style/App.css";

class App extends React.Component {
  componentDidMount() {
    setJwtStatus();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" component={SearchTool} />
          <Route>Page not found :(</Route>
        </Switch>
        {/*<Footer /> */}
      </div>
    );
  }
}

export default App;
