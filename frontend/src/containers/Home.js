import React from "react";
import "../style/App.css";
import { connect } from "react-redux";
import { LoadingSpinner } from "../components/LoadingSpinner";

class Home extends React.Component {
  componentDidMount() {
    // TODO: fetch things
  }

  render() {
    if (this.props.loading) return <LoadingSpinner />;

    return (
      <div>
        <section className="section">
          <div className="container">
            <h1 className="title">{`Welcome, ${this.props.username}`}</h1>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h1 className="title">My Properties</h1>
            <h2 className="subtitle">
              Banner List of properties you have created
            </h2>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h1 className="title">Recent Properties</h1>
            <h2 className="subtitle">
              Banner List of properties you have interacted with
            </h2>
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.appState.loading,
    username: state.user.uid,
  };
}
export default connect(mapStateToProps)(Home);
