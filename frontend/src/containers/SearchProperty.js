import React from "react";
import { connect } from "react-redux";
import "../style/App.css";
import { Modal, Row, Col } from "react-bootstrap";
import SearchFiltersSidebar from "../components/SearchFiltersSidebar";
import SearchTable from "../components/SearchTable";
import { SEARCH_COLUMNS } from "../constants/global";

const SearchProperty = (props) => {
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

  return (
    <div>
      <Row className="search-page">
        <Col xs={12} lg={3} xl={2} className="pr-0 border">
          <SearchFiltersSidebar />
        </Col>
        <Col xs={12} lg={9} xl={10} className="pl-0 search-table">
          <SearchTable rows={rows} columns={SEARCH_COLUMNS} />
        </Col>
      </Row>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    searchResults: state.search.searchResults,
  };
}

export default connect(mapStateToProps)(SearchProperty);
