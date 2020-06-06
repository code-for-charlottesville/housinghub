import React from "react";
import "bulma/css/bulma.css";
import "../style/PropertySearch.css";
import { setSearchfieldsQuery } from "../actions/search";
import { connect } from "react-redux";
// import "../style/CheckBox.css"
const SearchHousingType = (props) => {
  return (
    <div className="column">
      <div className="field">
        <label className="label">Housing Type</label>
        <label className="checkbox">
          <input
            className="checkbox-custom"
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
        <label className="checkbox">
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
        <label className="checkbox">
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
