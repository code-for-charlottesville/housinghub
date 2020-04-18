import React from "react";
import { connect } from "react-redux";
import SearchBar from "../components/SearchBar"


const SearchProperty = (props) => {
  return (
  	<div>
      <SearchBar placeHolder={"253 East Main Street"} onChange={() => {}}/>
  	</div>
  );
};

function mapStateToProps(state) {
  return {
    
  };
}

export default connect(mapStateToProps)(SearchProperty);
