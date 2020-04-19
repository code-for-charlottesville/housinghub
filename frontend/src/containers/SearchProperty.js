import React from "react";
import { connect } from "react-redux";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import "../style/App.css";

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
    {
      field: "monthly_rent",
      title: "Rent",
    },
    {
      field: "voucher_type_accepted",
      title: "Vouchers Accepted",
    },
  ];

  let r = [
    "253 East Main Street",
    "David's new property",
    "$1350",
    "Voucher 1, Voucher 2",
  ];
  let rows = [];
  for (let i = 0; i < 25; i++) rows.push(r);

  return (
    <>
      <SearchBar placeHolder={"253 East Main Street"} onChange={() => {}} />
      <div className="ListContainer">
        <Table
          columns={columns}
          rows={rows}
          selectedRowIndex={3}
          onColumnSort={(cName, cIndex) => {
            console.log(cName, cIndex);
          }}
          onRowSelect={(rName, rIndex) => {
            console.log(rName, rIndex);
          }}
        />
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(SearchProperty);
