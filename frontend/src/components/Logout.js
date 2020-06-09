import React from "react";
import "../style/App.css";
import { connect } from "react-redux";
import { logout } from "../actions/login";
import { LoadingSpinner } from "./LoadingSpinner";

class Logout extends React.Component {
  componentDidMount() {
    if (this.props.isLoggedIn) {
      this.props.dispatch(logout());
    }
    setTimeout(() => {
      this.props.history.push("/");
    }, 2500);
  }

  render() {
    if (this.props.isLoggedIn) return <LoadingSpinner />;

    return (
      <div>You have been successfuly logged out. Returning to main page..</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.login.isLoggedIn,
  };
}
export default connect(mapStateToProps)(Logout);
