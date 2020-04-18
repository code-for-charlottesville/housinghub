import React from "react";
import { connect } from "react-redux";
import SearchBar from "../components/SearchBar"
import Table from "../components/Table"


const SearchProperty = (props) => {

  let columns = [
    {
    	"field" : "property_name",
    	"title" : "Name"
    },
    {
    	"field" : "address",
    	"title" : "Address"
    }
  ]

  return (
  	<div>
      <SearchBar placeHolder={"253 East Main Street"} onChange={() => {}}/>
      <Table columns={columns}/>
  	</div>
  );
};

function mapStateToProps(state) {
  return {
    
  };
}

export default connect(mapStateToProps)(SearchProperty);
