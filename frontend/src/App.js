import React from "react";
import LandlordRegisteration from "./components/LandlordRegistration";
import { NavRegForm } from "./components/NavRegForm";
import { Login } from "./components/Login";
import "bulma/css/bulma.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoginOpen: true, isRegisterOpen: false };
  }

  showLoginBox() {
    this.setState({ isLoginOpen: true, isRegisterOpen: false });
  }

  showRegisterBox() {
    this.setState({ isLoginOpen: false, isRegisterOpen: true });
  }

  render() {
    return (
      <>
        <div className="container column is-centered">
          <div>
            <div onClick={this.showLoginBox.bind(this)}>Login</div>
            <div onClick={this.showRegisterBox.bind(this)}>Register</div>
          </div>
          <div>
            {this.state.isLoginOpen && <Login />}
            {this.state.isRegisterOpen && <NavRegForm />}
          </div>
        </div>
      </>
    );
  }
}

export default App;
