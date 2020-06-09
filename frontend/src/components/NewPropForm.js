import React from "react";

import { connect } from "react-redux";
import { setAddPropertyField, addProperty } from "../actions/property";
import PropDetailsForm from "./PropDetailsForm";
import PaymentDetailsForm from "./PaymentDetailsForm";

const NewPropForm = (props) => {
  function handleSetIsAvailable() {
    let available;
    let dateAvailable = Date.parse(
      props.addProperty.fields.date_first_available
    );
    dateAvailable - Date.now() > 0 ? (available = false) : (available = true);
    props.dispatch(setAddPropertyField("is_available", available));
  }

  function handleSetYearAvailable() {
    let year = props.addProperty.fields.date_first_available.match(/[0-9]{4}/);
    props.dispatch(setAddPropertyField("year_available", parseInt(year, 10)));
  }

  return (
    <div className="container">
      <h1>Add New Property</h1>
      <hr />
      <h2>Property Details</h2>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <PropDetailsForm />

        <h2>Payment Details</h2>
        <PaymentDetailsForm />

        <label>
          If all fields above are filled out correctly press 'Submit' to add
          this listing.
        </label>
        <div>
          <div>
            <button
              title="Add property"
              onClick={() => {
                handleSetYearAvailable();
                handleSetIsAvailable();
                addProperty();
              }}
            >
              Submit
            </button>
          </div>
          <div>
            <button title="Return home">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    addProperty: {
      fields: state.propertyState.addProperty.fields,
    },
  };
}

export default connect(mapStateToProps)(NewPropForm);
