import React from "react";
import "bulma/css/bulma.css";
import { InputField } from "./InputField";
import { InputFieldNum } from "./InputFieldNum";
import VoucherInputs from "./VoucherInputs";
import { connect } from "react-redux";
import { setAddPropertyField } from "../actions/property";

const PaymentDetailsForm = (props) => {
  return (
    <div className="box">
      <InputFieldNum
        inputName="What is the Monthly Rent of the Property?"
        inputType="number"
        inputPh="Ex. 1200"
        onChangeFn={setAddPropertyField}
        onChangeFld="monthly_rent"
        inputValue={props.addProperty.fields.monthly_rent}
      />
      <InputFieldNum
        inputName="Please specify the application fee, if any, for the property."
        inputType="number"
        inputPh="Ex. 250"
        onChangeFn={setAddPropertyField}
        onChangeFld="application_fee"
        inputValue={props.addProperty.fields.application_fee}
      />
      <InputFieldNum
        inputName="Please specify the deposit amount for the property"
        inputType="number"
        inputPh="Ex. 800"
        onChangeFn={setAddPropertyField}
        onChangeFld="deposit"
        inputValue={props.addProperty.fields.deposit}
      />
      <div className="field">
        <label className="label" htmlFor="lastMonthBool">
          Is the last month's rent required for the property?
        </label>
        <div className="select">
          <select
            id="lastMonthBool"
            onChange={(e) =>
              props.dispatch(
                setAddPropertyField("last_month_rent_required", e.target.value)
              )
            }
            value={props.addProperty.fields.last_month_rent_required}
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
      </div>
      <VoucherInputs />
      <InputField
        inputName="If the property requires a credit screening, please specify the
                               credit screening company used."
        inputType="text"
        inputPh="Ex. Creditrating.com"
        onChangeFn={setAddPropertyField}
        onChangeFld="credit_screening_company"
        inputValue={props.addProperty.fields.credit_screening_company}
      />
      <InputField
        inputName="Please specify the company typically used to conduct background
                               checks for the property."
        inputType="text"
        inputPh="Ex. background-screening.com"
        onChangeFn={setAddPropertyField}
        onChangeFld="background_screening_company"
        inputValue={props.addProperty.fields.background_screening_company}
      />
      <div className="field">
        <label className="label" htmlFor="backgroundBool">
          Does the property require applicants to have a clean criminal record?
        </label>
        <div className="select">
          <select
            id="backgroundBool"
            onChange={(e) =>
              props.dispatch(
                setAddPropertyField("allow_criminal_records", e.target.value)
              )
            }
            value={props.addProperty.fields.allow_criminal_records}
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
      </div>
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

export default connect(mapStateToProps)(PaymentDetailsForm);
