import React from "react";
import { connect } from "react-redux";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import "../style/App.css";
import PropertySearch from "../components/PropertySearch.js";

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

  //Populate rows
  let rows = [];
  for (let i = 0; i < props.searchResults.results.length; i++) {
    let r = [
      props.searchResults.results[i].address,
      props.searchResults.results[i].property_name,
      props.searchResults.results[i].monthly_rent,
      props.searchResults.results[i].voucher_type_accepted.join(", "),
    ];
    rows.push(r);
  }
  return (
    <>
      <PropertySearch />
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
      <Pagination
        numberOfPages={16}
        currentPageIndex={11}
        pageIndexStart={0}
        pageIndexEnd={10}
        onSetPage={(i) => console.log("new page: %d", i)}
      />
    </>
  );
};

function mapStateToProps(state) {
  return {
    searchResults: {
    ...state.search.searchResults,
    pagination: state.search.searchResults.pagination,
    }
  };
}

export default connect(mapStateToProps)(SearchProperty);
