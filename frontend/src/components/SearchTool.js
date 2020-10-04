import React from "react";
import "../style/SearchTool.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import { setSearchfieldsQuery, searchProperties } from "../actions/search";
import { connect } from "react-redux";

const SearchTool = (props) => {
  return (
    <div className="size border">
      <div style={{ height: "50px", display: "flex", alignItems: "center" }}>
        <h5
          style={{
            paddingTop: "50px",
            paddingLeft: "12px",
            fontFamily: "Roboto",
            color: "grey",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          Search Fields
        </h5>
      </div>
      <hr style={{ borderWidth: "3px" }} />
      <div>
        <p
          style={{
            paddingLeft: "15px",
            fontFamily: "Roboto",
            fontSize: "14px",
            marginBottom: "5px",
          }}
        >
          Rent per unit
        </p>

        <Form>
          <Form.Row
            style={{
              paddingLeft: "15px",
              paddingRight: "15px",
              marginBottom: "5px",
            }}
          >
            <Col>
              <Form.Control
                placeholder="Min"
                placeholder="Max"
                onChange={(e) =>
                  props.dispatch(
                    setSearchfieldsQuery("min_rent", parseInt(e.target.value))
                  )
                }
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Max"
                onChange={(e) =>
                  props.dispatch(
                    setSearchfieldsQuery("max_rent", parseInt(e.target.value))
                  )
                }
              />
            </Col>
          </Form.Row>
          <Row>
            <Col>
              <p
                style={{
                  paddingLeft: "20px",
                  fontFamily: "Roboto",
                  fontSize: "13px",
                }}
              >
                Min
              </p>
            </Col>
            <Col>
              <p
                style={{
                  paddingLeft: "0px",
                  fontFamily: "Roboto",
                  fontSize: "13px",
                }}
              >
                Max
              </p>
            </Col>
          </Row>
          <Form.Row
            style={{
              paddingLeft: "15px",
              paddingRight: "15px",
              marginTop: "17px",
            }}
          >
            <div className="col-12">
              <Form.Label>Date Available</Form.Label>
              <Form.Control
                type="date"
                placeholder="MM-dd-YYYY"
                onChange={(e) =>
                  props.dispatch(
                    setSearchfieldsQuery("date_available", e.target.value)
                  )
                }
              ></Form.Control>
            </div>
          </Form.Row>

          <Form.Group
            controlId="bedrooms"
            style={{
              marginTop: "24px",
              paddingLeft: "9px",
              paddingRight: "9px",
            }}
          >
            <Form.Label>Bedrooms</Form.Label>
            <Form.Control
              as="select"
              // id="numBeds"
              onChange={(e) =>
                props.dispatch(
                  setSearchfieldsQuery("bedrooms", parseInt(e.target.value))
                )
              }
              value={props.query.searchFields.bedrooms}
              custom
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
            </Form.Control>
          </Form.Group>
          <Form.Group
            controlId="bathrooms"
            style={{
              marginTop: "15px",
              paddingLeft: "9px",
              paddingRight: "9px",
            }}
          >
            <Form.Label>Bathrooms</Form.Label>
            <Form.Control
              as="select"
              custom
              // id="numBath"
              onChange={(e) =>
                props.dispatch(
                  setSearchfieldsQuery("bathrooms", parseFloat(e.target.value))
                )
              }
              value={props.query.searchFields.bathrooms}
            >
              <option>1</option>
              <option>1.5</option>
              <option>2</option>
              <option>2.5</option>
              <option>3</option>
              <option>3.5</option>
              <option>4</option>
              <option>4.5</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Row style={{ marginTop: "20px" }}>
            <Col xs="10" style={{ paddingLeft: "15px" }}>
              Deposit Needed
            </Col>
            <Col xs="1">
              <Form.Check
                onChange={(e) =>
                  props.dispatch(
                    setSearchfieldsQuery("deposit_needed", e.target.value)
                  )
                }
                aria-label="deposit"
              />
            </Col>
          </Form.Row>
          <Form.Row style={{ marginTop: "4px" }}>
            <Col xs="10" style={{ paddingLeft: "15px" }}>
              Credit Report Needed
            </Col>
            <Col xs="1">
              <Form.Check
                onChange={(e) =>
                  props.dispatch(
                    setSearchfieldsQuery("credit_report_needed", e.target.value)
                  )
                }
                aria-label="creditReport"
              />
            </Col>
          </Form.Row>
          <Form.Row style={{ marginTop: "4px" }}>
            <Col xs="10" style={{ paddingLeft: "15px" }}>
              Near Bus Stop
            </Col>
            <Col xs="1">
              <Form.Check
                onChange={(e) =>
                  props.dispatch(
                    setSearchfieldsQuery("near_bus_stop", e.target.value)
                  )
                }
                aria-label="bus"
              />
            </Col>
          </Form.Row>
          <Form.Row style={{ marginTop: "4px", marginBottom: "30px" }}>
            <Col xs="10" style={{ paddingLeft: "15px" }}>
              Pets allowed
            </Col>
            <Col xs="1">
              <Form.Check
                onChange={(e) =>
                  props.dispatch(
                    setSearchfieldsQuery("pets_allowed", e.target.value)
                  )
                }
                aria-label="pets"
              />
            </Col>
          </Form.Row>

          <hr
            style={{
              borderWidth: "2px",
              margin: "15px",
            }}
          />
          <Form.Group
            controlId="schoolDistrict"
            style={{
              marginTop: "15px",
              paddingLeft: "9px",
              paddingRight: "9px",
            }}
          >
            <Form.Label>School District</Form.Label>
            <Form.Control
              onChange={(e) =>
                props.dispatch(
                  setSearchfieldsQuery("school_district", e.target.value)
                )
              }
              as="select"
              custom
            >
              <option>Alemarle</option>
              <option>City of Charlottesville</option>
              <option>University of Virginia</option>
            </Form.Control>
          </Form.Group>
          <hr
            style={{
              borderWidth: "2px",
              margin: "15px",
            }}
          />
          <Form.Group
            controlId="leaseType"
            style={{
              marginTop: "15px",
              paddingLeft: "9px",
              paddingRight: "9px",
            }}
          >
            <Form.Label>Lease Type</Form.Label>
            <Form.Control as="select" custom>
              <option>Month to Month</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <hr
            style={{
              borderWidth: "2px",
              margin: "15px",
            }}
          />
          <Form.Group
            controlId="vouchers"
            style={{
              marginTop: "15px",
              paddingLeft: "9px",
              paddingRight: "9px",
            }}
          >
            <Form.Label>Vouchers Accepted</Form.Label>
            <Form.Control
              onChange={(e) =>
                props.dispatch(
                  setSearchfieldsQuery("school_district", e.target.value)
                )
              }
              as="select"
              custom
            >
              <option>Any</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    query: {
      pagination: state.search.query.pagination,
      searchFields: state.search.query.searchFields,
    },
    searchResults: {
      ...state.search.searchResults,
      pagination: state.search.searchResults.pagination,
    },
  };
}
export default connect(mapStateToProps)(SearchTool);
