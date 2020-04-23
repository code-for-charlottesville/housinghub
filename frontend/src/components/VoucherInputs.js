import React from "react";
import "bulma/css/bulma.css";
import { connect } from "react-redux";
import { setAddPropertyField } from "../actions/property";

const VoucherInputs = (props) => {

    return (
        <div className="field">
        <label className="label" htmlFor="vouchersAccepted">
          Please specify 'Yes' or 'No' for the vouchers accepted as payment for
          the property.
        </label>
        <div className="radioBox">
          <label className="label radioLabel">CSRAP</label>
          <div className="control">
            <label className="radio">
              <input
                type="radio"
                name="CSRAP"
                onChange={(e) => {
                  if (
                    !props.addProperty.fields.voucherTypeAccepted.includes(
                      e.target.value
                    )
                  ) {
                    props.dispatch(
                      setAddPropertyField("voucherTypeAccepted", e.target.value)
                    );
                  }
                  if (
                    props.addProperty.fields.voucherTypeNotAccepted.includes(
                      e.target.value
                    )
                  ) {
                    props.dispatch(
                      setAddPropertyField(
                        "voucherTypeNotAccepted",
                        e.target.value
                      )
                    );
                  }
                }}
                value="CSRAP"
              />
              Yes
            </label>
            <label className="radio">
              <input
                type="radio"
                name="CSRAP"
                onChange={(e) => {
                  if (
                    props.addProperty.fields.voucherTypeAccepted.includes(
                      e.target.value
                    )
                  ) {
                    props.dispatch(
                      setAddPropertyField("voucherTypeAccepted", e.target.value)
                    );
                  }
                  if (
                    !props.addProperty.fields.voucherTypeNotAccepted.includes(
                      e.target.value
                    )
                  ) {
                    props.dispatch(
                      setAddPropertyField(
                        "voucherTypeNotAccepted",
                        e.target.value
                      )
                    );
                  }
                }}
                value="CSRAP"
              />
              No
            </label>
          </div>
        </div>
        <div className="radioBox">
          <label className="label radioLabel">HCV</label>
          <div className="control">
            <label className="radio">
              <input
                type="radio"
                name="HCV"
                onChange={(e) => {
                  if (
                    !props.addProperty.fields.voucherTypeAccepted.includes(
                      e.target.value
                    )
                  ) {
                    props.dispatch(
                      setAddPropertyField("voucherTypeAccepted", e.target.value)
                    );
                  }
                  if (
                    props.addProperty.fields.voucherTypeNotAccepted.includes(
                      e.target.value
                    )
                  ) {
                    props.dispatch(
                      setAddPropertyField(
                        "voucherTypeNotAccepted",
                        e.target.value
                      )
                    );
                  }
                }}
                value="HCV"
              />
              Yes
            </label>
            <label className="radio">
              <input
                type="radio"
                name="HCV"
                onChange={(e) => {
                  if (
                    props.addProperty.fields.voucherTypeAccepted.includes(
                      e.target.value
                    )
                  ) {
                    props.dispatch(
                      setAddPropertyField("voucherTypeAccepted", e.target.value)
                    );
                  }
                  if (
                    !props.addProperty.fields.voucherTypeNotAccepted.includes(
                      e.target.value
                    )
                  ) {
                    props.dispatch(
                      setAddPropertyField(
                        "voucherTypeNotAccepted",
                        e.target.value
                      )
                    );
                  }
                }}
                value="HCV"
              />
              No
            </label>
          </div>
        </div>
        <div className="radioBox">
          <label className="label radioLabel">MSV</label>
          <div className="control">
            <label className="radio">
              <input
                type="radio"
                name="MSV"
                onChange={(e) => {
                  if (
                    !props.addProperty.fields.voucherTypeAccepted.includes(
                      e.target.value
                    )
                  ) {
                    props.dispatch(
                      setAddPropertyField("voucherTypeAccepted", e.target.value)
                    );
                  }
                  if (
                    props.addProperty.fields.voucherTypeNotAccepted.includes(
                      e.target.value
                    )
                  ) {
                    props.dispatch(
                      setAddPropertyField(
                        "voucherTypeNotAccepted",
                        e.target.value
                      )
                    );
                  }
                }}
                value="MSV"
              />
              Yes
            </label>
            <label className="radio">
              <input
                type="radio"
                name="MSV"
                onChange={(e) => {
                  if (
                    props.addProperty.fields.voucherTypeAccepted.includes(
                      e.target.value
                    )
                  ) {
                    props.dispatch(
                      setAddPropertyField("voucherTypeAccepted", e.target.value)
                    );
                  }
                  if (
                    !props.addProperty.fields.voucherTypeNotAccepted.includes(
                      e.target.value
                    )
                  ) {
                    props.dispatch(
                      setAddPropertyField(
                        "voucherTypeNotAccepted",
                        e.target.value
                      )
                    );
                  }
                }}
                value="MSV"
              />
              No
            </label>
          </div>
        </div>
        <div className="radioBox">
          <label className="label radioLabel">Voucher 4</label>
          <div className="control">
            <label className="radio">
              <input
                type="radio"
                name="Voucher 4"
                onChange={(e) => {
                  if (
                    !props.addProperty.fields.voucherTypeAccepted.includes(
                      e.target.value
                    )
                  ) {
                    props.dispatch(
                      setAddPropertyField("voucherTypeAccepted", e.target.value)
                    );
                  }
                  if (
                    props.addProperty.fields.voucherTypeNotAccepted.includes(
                      e.target.value
                    )
                  ) {
                    props.dispatch(
                      setAddPropertyField(
                        "voucherTypeNotAccepted",
                        e.target.value
                      )
                    );
                  }
                }}
                value="Voucher 4"
              />
              Yes
            </label>
            <label className="radio">
              <input
                type="radio"
                name="Voucher 4"
                onChange={(e) => {
                  if (
                    props.addProperty.fields.voucherTypeAccepted.includes(
                      e.target.value
                    )
                  ) {
                    props.dispatch(
                      setAddPropertyField("voucherTypeAccepted", e.target.value)
                    );
                  }
                  if (
                    !props.addProperty.fields.voucherTypeNotAccepted.includes(
                      e.target.value
                    )
                  ) {
                    props.dispatch(
                      setAddPropertyField(
                        "voucherTypeNotAccepted",
                        e.target.value
                      )
                    );
                  }
                }}
                value="Voucher 4"
              />
              No
            </label>
          </div>
        </div>
        <div className="radioBox">
          <label className="label radioLabel">Voucher 5</label>
          <div className="control">
            <label className="radio">
              <input
                type="radio"
                name="Voucher 5"
                onChange={(e) => {
                  if (
                    !props.addProperty.fields.voucherTypeAccepted.includes(
                      e.target.value
                    )
                  ) {
                    props.dispatch(
                      setAddPropertyField("voucherTypeAccepted", e.target.value)
                    );
                  }
                  if (
                    props.addProperty.fields.voucherTypeNotAccepted.includes(
                      e.target.value
                    )
                  ) {
                    props.dispatch(
                      setAddPropertyField(
                        "voucherTypeNotAccepted",
                        e.target.value
                      )
                    );
                  }
                }}
                value="Voucher 5"
              />
              Yes
            </label>
            <label className="radio">
              <input
                type="radio"
                name="Voucher 5"
                onChange={(e) => {
                  if (
                    props.addProperty.fields.voucherTypeAccepted.includes(
                      e.target.value
                    )
                  ) {
                    props.dispatch(
                      setAddPropertyField("voucherTypeAccepted", e.target.value)
                    );
                  }
                  if (
                    !props.addProperty.fields.voucherTypeNotAccepted.includes(
                      e.target.value
                    )
                  ) {
                    props.dispatch(
                      setAddPropertyField(
                        "voucherTypeNotAccepted",
                        e.target.value
                      )
                    );
                  }
                }}
                value="Voucher 5"
              />
              No
            </label>
          </div>
        </div>
      </div>
    );
}

function mapStateToProps(state) {
    return {
      addProperty: {
        fields: state.propertyState.addProperty.fields,
      },
    };
  }
  
  export default connect(mapStateToProps)(VoucherInputs);
  
