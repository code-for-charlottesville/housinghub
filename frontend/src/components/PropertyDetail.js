import React from "react";
import "bulma/css/bulma.css";
import { InputField } from "./InputField";

export const PropertyDetail = () => {
  return (
    <div className="container column is-one-third">
      <form>
        <InputField
          inputName="Property ID"
          inputType="text"
          inputPh="Property ID"
        />
        <InputField
          inputName="LandLord ID"
          inputType="text"
          inputPh="Landlord ID"
        />
        <InputField
          inputName="Navigator ID"
          inputType="text"
          inputPh="Navigator ID"
        />
        <InputField inputName="Address" inputType="text" inputPh="Address" />
        <InputField
          inputName="Zip Code"
          inputType="number"
          inputPh="Zip Code"
        />
        <InputField
          inputName="Unit/Apt No."
          inputType="text"
          inputPh="Unit/Apt No."
        />
        <InputField
          inputName="Name of Property"
          inputType="text"
          inputPh="Name of Property"
        />
        <InputField
          inputName="School District"
          inputType="text"
          inputPh="School District"
        />
        <InputField
          inputName="Bedrooms"
          inputType="number"
          inputPh="Bedrooms"
        />
        <InputField
          inputName="Bathrooms"
          inputType="number"
          inputPh="Bathrooms"
        />
        <fieldset>
          <legend>Accessibility</legend>
          <div>
            <input type="checkbox" name="accessibility" />
            Bus line near property
          </div>
          <div>
            <input type="checkbox" name="accessibility" />
            Wheelchair accessible
          </div>
          <div>
            <input type="checkbox" name="accessibility" />
            Elevator on property
          </div>
        </fieldset>
      </form>
    </div>
  );
};
