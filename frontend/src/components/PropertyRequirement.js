import React from "react";
import "bulma/css/bulma.css";
import { InputField } from "./InputField";

export const PropertyRequirement = () => {
  return (
    <div className="container column is-one-third">
      <InputField inputName="Monthly Rent" inputType="number" inputPh="0" />
      <InputField inputName="Application Fee" inputType="number" inputPh="0" />
      <InputField inputName="Deposit Amount" inputType="number" inputPh="0" />
      <h2 className="subtitle">Vouchers Accepted</h2>
    </div>
  );
};
