import React from "react";
import { connect } from "react-redux";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";

const SearchProperty = (props) => {
  let columns = [
    {
      field: "address",
      title: "Address",
    },
    {
      field: "property_name",
      title: "Name",
    },
  ];

  let r = ["253 East Main Street", "David's new property"];
  let rows = [];
  for (let i = 0; i < 100; i++) rows.push(r);

  return (
    <div>
      <SearchBar placeHolder={"253 East Main Street"} onChange={() => {}} />
      <Table columns={columns} rows={rows} />
    </div>
  );
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(SearchProperty);
