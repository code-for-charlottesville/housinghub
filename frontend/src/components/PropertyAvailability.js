import React from "react";
import "bulma/css/bulma.css";
import { InputField } from "./InputField";

export const PropertyAvailability = () => {
  return (
    <div className="container column is-one-third">
      <form>
        <div className="field">
          <input
            className="is-checkbox"
            id="availabilityBox"
            type="checkbox"
            name="availabilityBox"
          />

          <label htmlForr="availabilityBox">
            Property is currently available
          </label>
        </div>
        <br />

        <InputField
          inputName="Contact Method"
          inputType="text"
          inputPh="e.g. Phone, Email, etc."
        />
        <InputField
          inputName="Date First Available"
          inputType="date"
          inputPh="Date"
        />
        <InputField
          inputName="Months available (estimate)"
          inputType="text"
          inputPh="0"
        />
        <InputField
          inputName="Date Property was Listed"
          inputType="date"
          inputPh="Date"
        />
        <InputField
          inputName="Source where property was listed"
          inputType="text"
          inputPh="e.g. Zillow, Apartments.com, Etc."
        />
        <InputField
          inputName="Naviagator ID who made last contact"
          inputType="text"
          inputPh="Navigator ID"
        />
      </form>
    </div>
  );
};
