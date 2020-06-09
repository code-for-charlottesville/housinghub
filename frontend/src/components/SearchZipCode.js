import React from "react";

import { setSearchfieldsQuery } from "../actions/search";
import { connect } from "react-redux";

const SearchZipCode = (props) => {
  return (
    <div>
      <div>
        <label>Zip Codes</label>
        <label>
          <input
            type="checkbox"
            value="22903"
            onChange={(e) => {
              props.dispatch(setSearchfieldsQuery("zip_code", e.target.value));
            }}
          />
          22903
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="22904"
            onChange={(e) => {
              props.dispatch(setSearchfieldsQuery("zip_code", e.target.value));
            }}
          />
          22904
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="22935"
            onChange={(e) => {
              props.dispatch(setSearchfieldsQuery("zip_code", e.target.value));
            }}
          />
          22935
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="22987"
            onChange={(e) => {
              props.dispatch(setSearchfieldsQuery("zip_code", e.target.value));
            }}
          />
          22987
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
