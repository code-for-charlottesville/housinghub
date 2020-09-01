import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./containers/Login";
import MainContent from "./containers/MainContent";
import { setJwtStatus } from "./actions/login";
import { Footer } from "./components/Footer";
import Logout from "./components/Logout";
import "./style/App.css";

class App extends React.Component {
  componentDidMount() {
    setJwtStatus();
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" component={MainContent} />
          <Route>Page not found :(</Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
