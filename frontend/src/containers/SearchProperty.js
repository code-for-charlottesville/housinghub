import React from "react";
import { connect } from "react-redux";
import "../style/App.css";
import { Row, Col } from "react-bootstrap";
import SearchFiltersSidebar from "../components/SearchFiltersSidebar";
import SearchTable from "../components/SearchTable";
import { SEARCH_COLUMNS } from "../constants/global";
import { searchProperties } from "../actions/search";

class SearchProperty extends React.Component {
  componentDidMount() {
    searchProperties();
  }

  render() {
    return (
      <Row className="mr-0">
        <Col
          xs={12}
          sm={6}
          md={4}
          lg={3}
          xl={2}
          className="pr-0 border"
        >
          <SearchFiltersSidebar />
        </Col>
        <Col xs={12} sm={6} md={8} lg={9} xl={10} className="pl-0 pr-0 border">
          <SearchTable
            rows={this.props.searchResults.results}
            columns={SEARCH_COLUMNS}
            pagination={this.props.searchResults.pagination}
          />
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchResults: state.search.searchResults,
  };
}

export default connect(mapStateToProps)(SearchProperty);
