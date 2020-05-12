import React from "react";
import "bulma/css/bulma.css";
import "../style/App.css";
import { connect } from "react-redux";
import { InputField } from "./InputField";
import { InputFieldNum } from "./InputFieldNum";
import { setSearchfieldsQuery, searchProperties } from "../actions/search";
import SearchZipCode from "./SearchZipCode";
import SearchHousingType from "./SearchHousingType";

const PropertySearch = (props) => {
  return (
    <div className="columns">
      <SearchZipCode />
      <SearchHousingType />
      <div className="column">
        <div className="field">
          <label className="label" htmlFor="numBeds">
            Bedrooms
          </label>
          <div className="select">
            <select
              id="numBeds"
              onChange={(e) =>
                props.dispatch(setSearchfieldsQuery("bedrooms", parseInt(e.target.value)))
              }
              value={props.query.searchFields.bedrooms}
            >
              <option hidden value>Select</option>
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
            Bathrooms
          </label>
          <div className="select">
            <select
              id="numBath"
              onChange={(e) =>
                props.dispatch(setSearchfieldsQuery("bathrooms", parseFloat(e.target.value)))
              }
              value={props.query.searchFields.bathrooms}
            >
              <option hidden value>Select</option> 
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
      </div>
      <div className="column">
        <InputField
          inputName="Date Available"
          inputType="date"
          inputPh="MM-dd-YYYY"
          onChangeFld="date_available"
          onChangeFn={setSearchfieldsQuery}
        />
        <InputFieldNum
          inputName="Max Rent"
          inputType="number"
          inputPh="1200"
          onChangeFn={setSearchfieldsQuery}
          onChangeFld="max_rent"
          inputValue={props.query.searchFields.max_rent}
        />
      </div>
      <div className="column">
        <button 
          className="button is-primary is-rounded"
          onClick={() => searchProperties()}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    query: {
      pagination: state.search.query.pagination,
      searchFields: state.search.query.searchFields
    },
    searchResults: {
      ...state.search.searchResults,
      pagination: state.search.searchResults.pagination,
    }
  };
}
export default connect(mapStateToProps)(PropertySearch);
