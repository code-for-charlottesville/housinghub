import React from "react";
import "bulma/css/bulma.css";
import "../style/PropertySearch.css";
import { setSearchfieldsQuery } from "../actions/search";
import { connect } from "react-redux";

const SearchZipCode = (props) => {
  return (
    <div className="column">
      <div className="field">
        <label className="label">Zip Codes</label>
        <label className="checkbox">
          <input
            type="checkbox"
            value="22903"
            onChange={(e) => {
              props.dispatch(setSearchfieldsQuery("zip_code", e.target.value));
            }}
          />
          Charlottesville, VA 22903
        </label>
        <br />
        <label className="checkbox">
          <input
            type="checkbox"
            value="22904"
            onChange={(e) => {
              props.dispatch(setSearchfieldsQuery("zip_code", e.target.value));
            }}
          />
          Charlottesville, VA 22904
        </label>
        <br />
        <label className="checkbox">
          <input
            type="checkbox"
            value="22935"
            onChange={(e) => {
              props.dispatch(setSearchfieldsQuery("zip_code", e.target.value));
            }}
          />
          Greene, VA 22935
        </label>
        <br />
        <label className="checkbox">
          <input
            type="checkbox"
            value="22987"
            onChange={(e) => {
              props.dispatch(setSearchfieldsQuery("zip_code", e.target.value));
            }}
          />
          Albemarle, VA 22987
        </label>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    query: {
      searchFields: state.search.query.searchFields,
    },
  };
}

export default connect(mapStateToProps)(SearchZipCode);
