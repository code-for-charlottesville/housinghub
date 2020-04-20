import React from "react";
import "bulma/css/bulma.css";
import { InputField } from "./InputField";
import { InputFieldNum } from "./InputFieldNum";
import { connect } from "react-redux";
import { setPropertyField, setArrayValues } from "../actions/property";

const PaymentDetailsForm = (props) => {
  return (
    <div className="box">
      <InputFieldNum
        inputName="What is the Monthly Rent of the Property?"
        inputType="number"
        inputPh="Ex. 1200"
        onChangeFn={setPropertyField}
        onChangeFld="rentPerMonth"
        inputValue={props.fields.rentPerMonth}
      />
      <InputFieldNum
        inputName="Please specify the application fee, if any, for the property."
        inputType="number"
        inputPh="Ex. 250"
        onChangeFn={setPropertyField}
        onChangeFld="appFee"
        inputValue={props.fields.appFee}
      />
      <InputFieldNum
        inputName="Please specify the deposit amount for the property"
        inputType="number"
        inputPh="Ex. 800"
        onChangeFn={setPropertyField}
        onChangeFld="deposit"
        inputValue={props.fields.deposit}
      />
      <div className="field">
        <label className="label" htmlFor="lastMonthBool">
          Is the last month's rent required for the property?
        </label>
        <div className="select">
          <select
            id="lastMonthBool"
            onChange={(e) =>
              props.dispatch(setPropertyField("lastMonthRent", e.target.value))
            }
            value={props.fields.lastMonthRent}
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="vouchersAccepted">
          Please check all vouchers accepted as payment for the property.
        </label>
        <label className="checkbox">
          <input
            type="checkbox"
            onChange={(e) => {
              setArrayValues("acceptedVouchers", e.target.value);
              setArrayValues("refusedVouchers", e.target.value);
            }}
            value="CSRAP"
          />
          CSRAP
        </label>
        <br />
        <label className="checkbox">
          <input
            type="checkbox"
            onChange={(e) => {
              setArrayValues("acceptedVouchers", e.target.value);
              setArrayValues("refusedVouchers", e.target.value);
            }}
            value="HCV"
          />
          HCV
        </label>
        <br />
        <label className="checkbox">
          <input
            type="checkbox"
            onChange={(e) => {
              setArrayValues("acceptedVouchers", e.target.value);
              setArrayValues("refusedVouchers", e.target.value);
            }}
            value="MSV"
          />
          MSV
        </label>
        <br />
        <label className="checkbox">
          <input
            type="checkbox"
            onChange={(e) => {
              setArrayValues("acceptedVouchers", e.target.value);
              setArrayValues("refusedVouchers", e.target.value);
            }}
            value="Voucher 4"
          />
          Voucher 4
        </label>
        <br />
        <label className="checkbox">
          <input
            type="checkbox"
            onChange={(e) => {
              setArrayValues("acceptedVouchers", e.target.value);
              setArrayValues("refusedVouchers", e.target.value);
            }}
            value="Voucher 5"
          />
          Voucher 5
        </label>
      </div>
      <InputField
        inputName="If the property requires a credit screening, please specify the
                               credit screening company used."
        inputType="text"
        inputPh="Ex. Creditrating.com"
        onChangeFn={setPropertyField}
        onChangeFld="creditCompany"
        inputValue={props.fields.creditCompany}
      />
      <InputField
        inputName="Please specify the company typically used to conduct background
                               checks for the property."
        inputType="text"
        inputPh="Ex. background-screening.com"
        onChangeFn={setPropertyField}
        onChangeFld="backgroundCompany"
        inputValue={props.fields.backgroundCompany}
      />
      <div className="field">
        <label className="label" htmlFor="backgroundBool">
          Does the property require applicants to have a clean criminal record?
        </label>
        <div className="select">
          <select
            id="backgroundBool"
            onChange={(e) =>
              props.dispatch(setPropertyField("cleanRecord", e.target.value))
            }
            value={props.fields.cleanRecord}
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
    fields: state.propertyState.fields,
  };
}

export default connect(mapStateToProps)(PaymentDetailsForm);
