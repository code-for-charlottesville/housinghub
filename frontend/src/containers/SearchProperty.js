import React from "react";
import { connect } from "react-redux";
import "../style/App.css";
import { Container, Row, Col } from "react-bootstrap";
import SearchFiltersSidebar from "../components/SearchFiltersSidebar";
import SearchTable from "../components/SearchTable";
import { TEST_ROW_DATA } from "../constants/globalConstants"

const SearchProperty = (props) => {
  let columns = [
    {
      field: "address",
      title: "Address",
    },
    {
      field: "property_owner",
      title: "Property Owner",
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
      props.searchResults.results[i].bedrooms,
      props.searchResults.results[i].bathrooms,
      <a href="">See More</a>,
    ];
    rows.push(r);
  }

  rows = TEST_ROW_DATA;

  return (
    <Row className="search-page">
      <Col xs={12} lg={3} xl={2} className="pr-0 border">
        <SearchFiltersSidebar />
      </Col>
      <Col xs={12} lg={9} xl={10} className="pl-0 search-table">
        <SearchTable rows={rows} columns={columns}/>
      </Col>
    </Row>
  );
};

function mapStateToProps(state) {
  return {
    searchResults: state.search.searchResults,
  };
}

export default connect(mapStateToProps)(SearchProperty);
