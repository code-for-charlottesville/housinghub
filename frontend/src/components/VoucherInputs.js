import React from "react";

import { connect } from "react-redux";
import { setAddPropertyField } from "../actions/property";

const VoucherInputs = (props) => {
  let accepted = props.addProperty.fields.voucher_type_accepted;
  let notAccepted = props.addProperty.fields.voucher_type_not_accepted;

  function handleYes(value) {
    if (!accepted.includes(value)) {
      props.dispatch(setAddPropertyField("voucher_type_accepted", value));
    }
    if (notAccepted.includes(value)) {
      props.dispatch(setAddPropertyField("voucher_type_not_accepted", value));
    }
  }

  function handleNo(value) {
    if (accepted.includes(value)) {
      props.dispatch(setAddPropertyField("voucher_type_accepted", value));
    }
    if (!notAccepted.includes(value)) {
      props.dispatch(setAddPropertyField("voucher_type_not_accepted", value));
    }
  }
  return (
    <div>
      <label htmlFor="vouchersAccepted">
        Please specify 'Yes' or 'No' for the vouchers accepted as payment for
        the property.
      </label>
      <div>
        <label>CSRAP</label>
        <div>
          <label>
            <input
              type="radio"
              name="CSRAP"
              onChange={(e) => {
                handleYes(e.target.value);
              }}
              value="CSRAP"
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="CSRAP"
              onChange={(e) => {
                handleNo(e.target.value);
              }}
              value="CSRAP"
            />
            No
          </label>
        </div>
      </div>
      <div>
        <label>HCV</label>
        <div>
          <label>
            <input
              type="radio"
              name="HCV"
              onChange={(e) => {
                handleYes(e.target.value);
              }}
              value="HCV"
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="HCV"
              onChange={(e) => {
                handleNo(e.target.value);
              }}
              value="HCV"
            />
            No
          </label>
        </div>
      </div>
      <div>
        <label>MSV</label>
        <div>
          <label>
            <input
              type="radio"
              name="MSV"
              onChange={(e) => {
                handleYes(e.target.value);
              }}
              value="MSV"
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="MSV"
              onChange={(e) => {
                handleNo(e.target.value);
              }}
              value="MSV"
            />
            No
          </label>
        </div>
      </div>
      <div>
        <label>Voucher 4</label>
        <div>
          <label>
            <input
              type="radio"
              name="Voucher 4"
              onChange={(e) => {
                handleYes(e.target.value);
              }}
              value="Voucher 4"
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="Voucher 4"
              onChange={(e) => {
                handleNo(e.target.value);
              }}
              value="Voucher 4"
            />
            No
          </label>
        </div>
      </div>
      <div>
        <label>Voucher 5</label>
        <div>
          <label>
            <input
              type="radio"
              name="Voucher 5"
              onChange={(e) => {
                handleYes(e.target.value);
              }}
              value="Voucher 5"
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="Voucher 5"
              onChange={(e) => {
                handleNo(e.target.value);
              }}
              value="Voucher 5"
            />
            No
          </label>
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

export default connect(mapStateToProps)(VoucherInputs);
