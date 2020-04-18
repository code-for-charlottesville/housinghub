import React from "react";
import "bulma/css/bulma.css";
import { InputField } from "./InputField";
import { InputFieldNum } from "./InputFieldNum";
import { connect } from "react-redux";
import { setPropertyField, setArrayValues, parseYear } from "../actions/property";

const PropDetailsForm = (props) => {
  return (
    <div className="box">
      <InputField
        inputName="Property Name (if multi-unit complex): "
        inputType="text"
        inputPh="Ex. Flats"
        onChangeFn={setPropertyField}
        onChangeFld="name"
        inputValue={props.fields.name}
      />
      <InputField
        inputName="Address: "
        inputType="text"
        inputPh="Ex. 1111 Main Street"
        onChangeFn={setPropertyField}
        onChangeFld="address"
        inputValue={props.fields.address}
      />
      <InputField
        inputName="Unit / Apt no. (if applicable): "
        inputType="text"
        inputPh="Ex. Apt B"
        onChangeFn={setPropertyField}
        onChangeFld="unitNum"
        inputValue={props.fields.unitNum}
      />
      <InputField
        inputName="Floor no. (if applicable): "
        inputType="text"
        inputPh="Ex. 2"
        onChangeFn={setPropertyField}
        onChangeFld="floorNum"
        inputValue={props.fields.floor}
      />
      <InputField
        inputName="Zip Code: "
        inputType="text"
        inputPh="Ex. 22902"
        onChangeFn={setPropertyField}
        onChangeFld="zipCode"
        inputValue={props.fields.zipCode}
      />
      <InputField
        inputName="Type of Housing: "
        inputType="text"
        inputPh="Ex. Apartment"
        onChangeFn={setPropertyField}
        onChangeFld="type"
        inputValue={props.fields.type}
      />
      <div className="field">
        <label className="label" htmlFor="numBeds">
          Number of Bedrooms:
        </label>
        <div className="select">
          <select
            id="numBeds"
            onChange={(e) =>
              props.dispatch(setPropertyField("numBeds", e.target.value))
            }
            value={props.fields.numBeds}
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
              props.dispatch(setPropertyField("numBaths", e.target.value))
            }
            value={props.fields.numBaths}
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
              props.dispatch(setPropertyField("numBathsShared", e.target.value))
            }
            value={props.fields.numBathsShared}
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
              props.dispatch(setPropertyField("basement", e.target.value))
            }
            value={props.fields.basement}
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
        onChangeFn={setPropertyField}
        onChangeFld="schoolDist"
        inputValue={props.fields.schoolDist}
      />
      <div className="field">
        <label className="label" htmlFor="busStopBool">
          Is the Property Near a Bus Stop?
        </label>
        <div className="select">
          <select
            id="busStopBool"
            onChange={(e) =>
              props.dispatch(setPropertyField("busStop", e.target.value))
            }
            value={props.fields.busStop}
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
              props.dispatch(setPropertyField("wheelchairAcc", e.target.value))
            }
            value={props.fields.wheelchairAcc}
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
              props.dispatch(setPropertyField("elevator", e.target.value))
            }
            value={props.fields.elevator}
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
          onChangeFn={setPropertyField}
          onChangeFld="dateAvail"
          inputValue={props.fields.dateAvail}
          />
      <InputFieldNum
        inputName="Please specify the potential months available for the property."
        inputType="number"
        inputPh="Ex. 12"
        onChangeFn={setPropertyField}
        onChangeFld="monthsAvail"
        inputValue={props.fields.monthsAvail}
      />
      <InputField
        inputName="Please specify below when the property was first listed using the format MM-dd-YYYY.
        The default will be the current date if left as is."
        inputType="date"
        inputPh="Ex. 01-15-2020"
        onChangeFn={setPropertyField}
        onChangeFld="whenListed"
      />
      <InputField
        inputName="Please specify below where this property was seen listed."
        inputType="text"
        inputPh="Ex. Trulia"
        onChangeFn={setPropertyField}
        onChangeFld="whereListed"
        inputValue={props.fields.whereListed}
      />
      <div className="field">
      <label className="label" htmlFor="contactMethods">
        Please check the preferred contact methods for the property's landlord.
      </label>
      <label className="checkbox">
        <input
          type="checkbox"
          onChange={(e) =>
            setArrayValues("contactMethods", e.target.value)
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
            setArrayValues("contactMethods", e.target.value)
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
            setArrayValues("contactMethods", e.target.value)
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
      onChangeFn={setPropertyField}
      onChangeFld="lastContacted"
      />
  </div>
  );
};

function mapStateToProps(state) {
  return {
    fields: state.propertyState.fields,
  };
}

export default connect(mapStateToProps)(PropDetailsForm);
