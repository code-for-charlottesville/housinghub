import React from "react";
import { InputField } from "./InputField";
import "bulma/css/bulma.css";

export const NewPropForm = () => {
  return (
    <div className="container column is-half">
      <h1 className="title">Add New Property</h1>
      <hr />
      <h2 className="subtitle">Property Details</h2>
      <form>
        <div className="box">
          <InputField
            inputName="Property Name (if multi-unit complex): "
            inputType="text"
            inputPh="Ex. Flats"
          />
          <InputField
            inputName="Address: "
            inputType="text"
            inputPh="Ex. 1111 Main Street"
          />
          <InputField
            inputName="Unit / Apt no. (if applicable): "
            inputType="text"
            inputPh="Ex. Apt B"
          />
          <InputField
            inputName="Floor no. (if applicable): "
            inputType="text"
            inputPh="Ex. 2"
          />
          <InputField
            inputName="Zip Code: "
            inputType="text"
            inputPh="Ex. 22902"
          />
          <InputField
            inputName="Type of Housing: "
            inputType="text"
            inputPh="Ex. Apartment"
          />
          <div className="field">
            <label className="label" htmlFor="numBedrooms">
              Number of Bedrooms:
            </label>
            <div className="select">
              <select id="numBedrooms">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label
              className="label"
              style={{ color: "gray", fontWeight: "normal" }}
            >
              If other, please specify below:
            </label>
            <input className="input" type="text" placeholder="Ex. 5" />
          </div>
          <div className="field">
            <label className="label" htmlFor="numBathrooms">
              Number of Bathrooms:
            </label>
            <div className="select">
              <select id="numBathrooms">
                <option value="1">1</option>
                <option value="1.5">1.5</option>
                <option value="2">2</option>
                <option value="2.5">2.5</option>
                <option value="3">3</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label
              className="label"
              style={{ color: "gray", fontWeight: "normal" }}
            >
              If other, please specify below:
            </label>
            <input className="input" type="text" placeholder="Ex. 3.5" />
          </div>
          <div className="field">
            <label className="label" htmlFor="numSharedBathrooms">
              Number of Shared Bathrooms (with another property):
            </label>
            <div className="select">
              <select id="numSharedBathrooms">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label
              className="label"
              style={{ color: "gray", fontWeight: "normal" }}
            >
              If other, please specify below:
            </label>
            <input className="input" type="text" placeholder="Ex. 4" />
          </div>
          <div className="field">
            <label className="label" htmlFor="basementBool">
              Does the Property Have a Basement?
            </label>
            <div className="select">
              <select id="basementBool">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          <InputField
            inputName="Property's School District: "
            inputType="text"
            inputPh="Ex. Albermale"
          />
          <div className="field">
            <label className="label" htmlFor="busStopBool">
              Is the Property Near a Bus Stop?
            </label>
            <div className="select">
              <select id="busStopBool">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="wheelchairBool">
              Is the Property Wheelchair Accessible?
            </label>
            <div className="select">
              <select id="wheelchairBool">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="elevatorBool">
              Does the Property Have an Elevator?
            </label>
            <div className="select">
              <select id="elevatorBool">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label className="label">
              Please specify below when the property will be available using the
              format MM-dd-YYYY.
            </label>
            <span
              className="label"
              style={{ color: "gray", fontWeight: "normal" }}
            >
              If currently available, please specify the earliest date at which
              it was listed.
            </span>
            <input type="text" className="input" placeholder="Ex. 01/23/2020" />
          </div>
          <InputField
            inputName="Please specify the potential months available for the property."
            inputType="text"
            inputPh="Ex. 12"
          />
        </div>

        <h2 className="subtitle">Payment Details</h2>
        <div className="box">
          <InputField
            inputName="What is the Monthly Rent of the Property?"
            inputType="text"
            inputPh="Ex. 1200"
          />
          <InputField
            inputName="Please specify the application fee, if any, for the property."
            inputType="text"
            inputPh="Ex. 250"
          />
          <InputField
            inputName="Please specify the deposit amount for the property"
            inputType="text"
            inputPh="Ex. 800"
          />
          <div className="field">
            <label className="label" htmlFor="lastMonthBool">
              Is the last month's rent required for the property?
            </label>
            <div className="select">
              <select id="lastMonthBool">
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="vouchersAccepted">
              Please check all vouchers accepted as payment for the property.
            </label>
            <label className="checkbox">
              <input type="checkbox" />
              CSRAP
            </label>
            <br />
            <label className="checkbox">
              <input type="checkbox" />
              HCV
            </label>
            <br />
            <label className="checkbox">
              <input type="checkbox" />
              MSV
            </label>
            <br />
            <label className="checkbox">
              <input type="checkbox" />
              Voucher 4
            </label>
            <br />
            <label className="checkbox">
              <input type="checkbox" />
              Voucher 5
            </label>
          </div>
          <InputField
            inputName="If the property requires a credit screening, please specify the
                               credit screening company used."
            inputType="text"
            inputPh="Ex. Creditrating.com"
          />
          <InputField
            inputName="Please specify the company typically used to conduct background
                               checks for the property."
            inputType="text"
            inputPh="Ex. background-screening.com"
          />
          <div className="field">
            <label className="label" htmlFor="backgroundBool">
              Does the property require applicants to have a clean criminal
              record?
            </label>
            <div className="select">
              <select id="backgroundBool">
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
          </div>
        </div>

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
              />
            </div>
          </div>

          <label className="label">
            If all fields above are filled out correctly press 'Submit' to add
            this listing.
          </label>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" title="Add property">
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
