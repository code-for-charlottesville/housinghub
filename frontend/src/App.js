import React from "react";
import { NavRegForm } from "./components/NavRegForm";
import Login from "./components/Login";
import { NewPropForm } from "./components/NewPropForm";
import Navbar from "./components/Navbar";
import "bulma/css/bulma.css";
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="container column is-centered">
          <Navbar/>
          <div>
            {this.props.view === "login" && <Login />}
            {this.props.view === "register" && <NavRegForm />}
            {this.props.view === "new-prop" && <NewPropForm />}
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
     view : state.appState.view
  }
}


export default connect(mapStateToProps)(App);
