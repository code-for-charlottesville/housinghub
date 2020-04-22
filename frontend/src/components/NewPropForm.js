import React from "react";
import "bulma/css/bulma.css";
import { connect } from "react-redux";
import {
  setPropertyField,
  addProperty,
} from "../actions/property";
import PropDetailsForm from "./PropDetailsForm";
import PaymentDetailsForm from "./PaymentDetailsForm";

const NewPropForm = (props) => {
  return (
    <div className="container column is-half">
      <h1 className="title">Add New Property</h1>
      <hr />
      <h2 className="subtitle">Property Details</h2>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <PropDetailsForm />

        <h2 className="subtitle">Payment Details</h2>
        <PaymentDetailsForm />

        <h2 className="subtitle">Additional Notes</h2>
        <div className="box">
          <div className="field">
            <label className="label">
              Please add any additional notes below for the property:
            </label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Ex. Property's rent includes utilities..."
                onChange={(e) =>
                  props.dispatch(setPropertyField("notes", e.target.value))
                }
                value={props.fields.notes}
              />
            </div>
          </div>

          <label className="label">
            If all fields above are filled out correctly press 'Submit' to add
            this listing.
          </label>
          <div className="field is-grouped">
            <div className="control">
              <button
                className="button is-link"
                title="Add property"
                onClick={() => {
                  let year = props.fields.dateFirstAvailable.match(/[0-9]{4}/);
                  props.dispatch(setPropertyField("yearAvailable", parseInt(year, 10)));
                  addProperty();
                }}
              >
                Submit
              </button>
            </div>
            <div className="control">
              <button className="button is-light" title="Return home">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    fields: state.propertyState.fields,
  };
}

export default connect(mapStateToProps)(NewPropForm);
