import React from "react";

import { setSearchfieldsQuery } from "../actions/search";
import { connect } from "react-redux";
// import "../style/CheckBox.css"
const SearchHousingType = (props) => {
  return (
    <div>
      <div>
        <label>Housing Type</label>
        <label>
          <input
            type="checkbox"
            value="Single Family Home"
            onChange={(e) => {
              props.dispatch(
                setSearchfieldsQuery("housing_type", e.target.value)
              );
            }}
          />
          Single Family Home
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="Apartment"
            onChange={(e) => {
              props.dispatch(
                setSearchfieldsQuery("housing_type", e.target.value)
              );
            }}
          />
          Apartment
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="Shared Apartment"
            onChange={(e) => {
              props.dispatch(
                setSearchfieldsQuery("housing_type", e.target.value)
              );
            }}
          />
          Shared Apartment
        </label>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    query: {
      searchField: state.search.query.searchField,
    },
  };
}

export default connect(mapStateToProps)(SearchHousingType);
