import React from "react";
import "bulma/css/bulma.css";
import { InputField } from "./InputField";
import { InputFieldNum } from "./InputFieldNum";
import { connect } from "react-redux";
import { setAddPropertyField } from "../actions/property";

const PropDetailsForm = (props) => {
  return (
    <div className="box">
      <InputField
        inputName="Property Name (if multi-unit complex): "
        inputType="text"
        inputPh="Ex. Flats"
        onChangeFn={setAddPropertyField}
        onChangeFld="property_name"
        inputValue={props.addProperty.fields.property_name}
      />
      <InputField
        inputName="Address: "
        inputType="text"
        inputPh="Ex. 1111 Main Street"
        onChangeFn={setAddPropertyField}
        onChangeFld="address"
        inputValue={props.addProperty.fields.address}
      />
      <InputField
        inputName="Unit / Apt no. (if applicable): "
        inputType="text"
        inputPh="Ex. Apt B"
        onChangeFn={setAddPropertyField}
        onChangeFld="unit_apt_no"
        inputValue={props.addProperty.fields.unit_apt_no}
      />
      <InputFieldNum
        inputName="Floor no. (if applicable): "
        inputType="number"
        inputPh="Ex. 2"
        onChangeFn={setAddPropertyField}
        onChangeFld="floor"
        inputValue={props.addProperty.fields.floor}
      />
      <InputField
        inputName="Zip Code: "
        inputType="text"
        inputPh="Ex. 22902"
        onChangeFn={setAddPropertyField}
        onChangeFld="zip_code"
        inputValue={props.addProperty.fields.zip_code}
      />
      <InputField
        inputName="Type of Housing: "
        inputType="text"
        inputPh="Ex. Apartment"
        onChangeFn={setAddPropertyField}
        onChangeFld="housing_type"
        inputValue={props.addProperty.fields.housing_type}
      />
      <div className="field">
        <label className="label" htmlFor="numBeds">
          Number of Bedrooms:
        </label>
        <div className="select">
          <select
            id="numBeds"
            onChange={(e) =>
              props.dispatch(
                setAddPropertyField("bedrooms", parseInt(e.target.value))
              )
            }
            value={props.addProperty.fields.bedrooms}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="numBath">
          Number of Bathrooms:
        </label>
        <div className="select">
          <select
            id="numBath"
            onChange={(e) =>
              props.dispatch(
                setAddPropertyField("bathrooms", parseFloat(e.target.value))
              )
            }
            value={props.addProperty.fields.bathrooms}
          >
            <option value="1">1</option>
            <option value="1.5">1.5</option>
            <option value="2">2</option>
            <option value="2.5">2.5</option>
            <option value="3">3</option>
            <option value="3.5">3.5</option>
            <option value="4">4</option>
            <option value="4.5">4.5</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="numBathsShared">
          Number of Shared Bathrooms (with another property):
        </label>
        <div className="select">
          <select
            id="numBathsShared"
            onChange={(e) =>
              props.dispatch(
                setAddPropertyField(
                  "shared_bathrooms",
                  parseInt(e.target.value)
                )
              )
            }
            value={props.addProperty.fields.shared_bathrooms}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="basementBool">
          Does the Property Have a Basement?
        </label>
        <div className="select">
          <select
            id="basementBool"
            onChange={(e) =>
              props.dispatch(
                setAddPropertyField("has_basement", e.target.value)
              )
            }
            value={props.addProperty.fields.has_basement}
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
      </div>
      <InputField
        inputName="Property's School District: "
        inputType="text"
        inputPh="Ex. Albermale"
        onChangeFn={setAddPropertyField}
        onChangeFld="school_district"
        inputValue={props.addProperty.fields.school_district}
      />
      <div className="field">
        <label className="label" htmlFor="busLineBool">
          Is the Property Near a Bus Stop?
        </label>
        <div className="select">
          <select
            id="busLineBool"
            onChange={(e) =>
              props.dispatch(setAddPropertyField("bus_line", e.target.value))
            }
            value={props.addProperty.fields.bus_line}
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="wheelchairBool">
          Is the Property Wheelchair Accessible?
        </label>
        <div className="select">
          <select
            id="wheelchairBool"
            onChange={(e) =>
              props.dispatch(
                setAddPropertyField("wheelchair_accessibility", e.target.value)
              )
            }
            value={props.addProperty.fields.wheelchair_accessibility}
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="elevatorBool">
          Does the Property Have an Elevator?
        </label>
        <div className="select">
          <select
            id="elevatorBool"
            onChange={(e) =>
              props.dispatch(setAddPropertyField("elevator", e.target.value))
            }
            value={props.addProperty.fields.elevator}
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
      </div>
      <InputField
        inputName="If not yet available, please specify below when the property will be available using the
          format MM-dd-YYYY. The default will be the current date if left as is."
        inputType="date"
        inputPh="MM-dd-YYYY"
        onChangeFn={setAddPropertyField}
        onChangeFld="date_first_available"
      />
      <InputFieldNum
        inputName="Please specify the potential months available for the property."
        inputType="number"
        inputPh="Ex. 12"
        onChangeFn={setAddPropertyField}
        onChangeFld="potential_month_available"
        inputValue={props.addProperty.fields.potential_month_available}
      />
      <InputField
        inputName="Please specify below when the property was first listed using the format MM-dd-YYYY.
        The default will be the current date if left as is."
        inputType="date"
        inputPh="Ex. 01-15-2020"
        onChangeFn={setAddPropertyField}
        onChangeFld="listing_date"
      ></InputField>
      <div className="field">
        <label className="label" htmlFor="whereListed">
          Please check the locations where this property was listed.
        </label>
        <label className="checkbox">
          <input
            type="checkbox"
            onChange={(e) =>
              props.dispatch(
                setAddPropertyField("where_listed", e.target.value)
              )
            }
            value="Trulia"
          />
          Trulia
        </label>
        <br />
        <label className="checkbox">
          <input
            type="checkbox"
            onChange={(e) =>
              props.dispatch(
                setAddPropertyField("where_listed", e.target.value)
              )
            }
            value="Zillow"
          />
          Zillow
        </label>
        <br />
        <label className="checkbox">
          <input
            type="checkbox"
            onChange={(e) =>
              props.dispatch(
                setAddPropertyField("where_listed", e.target.value)
              )
            }
            value="Other"
          />
          Other
        </label>
      </div>
      <div className="field">
        <label className="label" htmlFor="contactMethod">
          Please check the preferred contact methods for the property's
          landlord.
        </label>
        <label className="checkbox">
          <input
            type="checkbox"
            onChange={(e) =>
              props.dispatch(
                setAddPropertyField("contact_method", e.target.value)
              )
            }
            value="Phone"
          />
          Phone
        </label>
        <br />
        <label className="checkbox">
          <input
            type="checkbox"
            onChange={(e) =>
              props.dispatch(
                setAddPropertyField("contact_method", e.target.value)
              )
            }
            value="Email"
          />
          Email
        </label>
        <br />
        <label className="checkbox">
          <input
            type="checkbox"
            onChange={(e) =>
              props.dispatch(
                setAddPropertyField("contact_method", e.target.value)
              )
            }
            value="Registered sites"
          />
          Registered Site
        </label>
      </div>
      <InputField
        inputName="Please specify below when the property's landlord was last contacted. 
      The default will be the current date if left as is."
        inputType="date"
        inputPh="MM-dd-YYY"
        onChangeFn={setAddPropertyField}
        onChangeFld="last_contact_date"
      />
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

export default connect(mapStateToProps)(PropDetailsForm);
