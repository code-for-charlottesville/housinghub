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
        onChangeFld="monthlyRent"
        inputValue={props.addProperty.fields.monthlyRent}
      />
      <InputFieldNum
        inputName="Please specify the application fee, if any, for the property."
        inputType="number"
        inputPh="Ex. 250"
        onChangeFn={setAddPropertyField}
        onChangeFld="applicationFee"
        inputValue={props.addProperty.fields.applicationFee}
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
                setAddPropertyField("lastMonthRentRequired", e.target.value)
              )
            }
            value={props.addProperty.fields.lastMonthRentRequired}
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
        onChangeFld="creditScreeningCompany"
        inputValue={props.addProperty.fields.creditScreeningCompany}
      />
      <InputField
        inputName="Please specify the company typically used to conduct background
                               checks for the property."
        inputType="text"
        inputPh="Ex. background-screening.com"
        onChangeFn={setAddPropertyField}
        onChangeFld="backgroundScreeningCompany"
        inputValue={props.addProperty.fields.backgroundScreeningCompany}
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
                setAddPropertyField("allowCriminalRecords", e.target.value)
              )
            }
            value={props.addProperty.fields.allowCriminalRecords}
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
