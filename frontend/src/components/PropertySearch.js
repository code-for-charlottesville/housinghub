import React from "react";
import "bulma/css/bulma.css";
import "../style/App.css";
import Dropdown from "./Dropdown.js";
import { connect } from "react-redux";
import { InputField } from "./InputField";
import { InputFieldNum } from "./InputFieldNum";
import { setSearchfieldsQuery } from "../actions/search";
import SearchZipCode from "./SearchZipCode";
import SearchHousingType from "./SearchHousingType";

const PropertySearch = (props) => {
  let results_per_page = 10;
  return (
    <div className="columns">
      <SearchZipCode />
      <SearchHousingType />
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
      {/* <div class="column">
        <div class="rows">
          <div class="row">
            <Dropdown getName="Bedrooms" />
          </div>
          <div class="row">
            <Dropdown getName="Bathroom" />
          </div>
        </div>
      </div> */}
      <div className="column">
        <button className="button is-primary is-rounded">Submit</button>
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
  };
}
export default connect(mapStateToProps)(PropertySearch);
