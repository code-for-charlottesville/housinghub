import React from "react";
import { NavRegForm } from "./components/NavRegForm";
import { Login } from "./components/Login";
import { NewPropForm } from "./components/NewPropForm";
import { Navbar } from "./components/Navbar";
import "bulma/css/bulma.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false,
      isNewPropOpen: false,
    };
  }

  showLoginBox() {
    this.setState({
      isLoginOpen: true,
      isRegisterOpen: false,
      isNewPropOpen: false,
    });
  }

  showRegisterBox() {
    this.setState({
      isLoginOpen: false,
      isRegisterOpen: true,
      isNewPropOpen: false,
    });
  }

  showNewPropBox() {
    this.setState({
      isLoginOpen: false,
      isRegisterOpen: false,
      isNewPropOpen: true,
    });
  }

  render() {
    return (
      <>
        <div className="container column is-centered">
          <Navbar
            showLoginBox={this.showLoginBox.bind(this)}
            showRegisterBox={this.showRegisterBox.bind(this)}
            showNewPropBox={this.showNewPropBox.bind(this)}
          />
          <div>
            {this.state.isLoginOpen && <Login />}
            {this.state.isRegisterOpen && <NavRegForm />}
            {this.state.isNewPropOpen && <NewPropForm />}
          </div>
        </div>
      </>
    );
  }
}

export default App;
