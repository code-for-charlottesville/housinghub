import React from "react";
import "../style/App.css";
import { connect } from "react-redux";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { Media } from "react-bootstrap";

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
            <Media>
              <img
                width={64}
                height={64}
                className="mr-3"
                src="https://cdngeneral.rentcafe.com/dmslivecafe/3/317695/Exterior%20View%20of%20Oxmoor%20Apartments.jpg?crop=(0,20,300,200)&cropxunits=300&cropyunits=200&quality=85&scale=both&"
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5>525 West Main Street</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </p>
              </Media.Body>
            </Media>{" "}
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h1 className="title">Recent Properties</h1>
            <Media>
              <img
                width={64}
                height={64}
                className="mr-3"
                src="https://www.brac.com/photos/30/xlarge/30_111128_031732_9694.jpg"
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5>5254 Ridge Street</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </p>
              </Media.Body>
            </Media>
            <Media>
              <img
                width={64}
                height={64}
                className="mr-3"
                src="https://lh3.googleusercontent.com/proxy/OeVKE4Q0tMvsVsbshykH5CGiTicQ-0vqNobrsNhPZwGAOwL5G158dZuzAZaf2oE6O-D6-b4dzFF242rhmXbQa8yXXSVeGDxXS-DBkaOiNBygn_E3FfVAltO4"
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5>99 Avon Street</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </p>
              </Media.Body>
            </Media>
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
