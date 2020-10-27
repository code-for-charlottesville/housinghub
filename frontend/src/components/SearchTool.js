import React from "react";
import "../style/SearchTool.css";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import { setSearchfieldsQuery, searchProperties } from "../actions/search";
import { connect } from "react-redux";

const SearchTool = (props) => {
  return (
    <>
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
      <div className="px-3">
        <p
          style={{
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
              <Form.Text id="minHelp" muted style={{ paddingLeft: "0.5em" }}>
                Min
              </Form.Text>
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
              <Form.Text id="maxHelp" muted style={{ paddingLeft: "0.5em" }}>
                Max
              </Form.Text>
            </Col>
          </Form.Row>
          <Form.Row
            style={{
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
              />
            </div>
          </Form.Row>

          <Form.Group
            controlId="bedrooms"
            style={{
              marginTop: "24px",
            }}
          >
            <Form.Label>Bedrooms</Form.Label>
            <Form.Control
              as="select"
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
            }}
          >
            <Form.Label>Bathrooms</Form.Label>
            <Form.Control
              as="select"
              custom
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
            <Col xs="10">Deposit Needed</Col>
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
            <Col xs="10">Credit Report Needed</Col>
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
            <Col xs="10">Near Bus Stop</Col>
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
            <Col xs="10">Pets allowed</Col>
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
            }}
          />
          <Form.Group
            controlId="schoolDistrict"
            style={{
              marginTop: "15px",
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
            }}
          />
          <Form.Group
            controlId="leaseType"
            style={{
              marginTop: "15px",
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
            }}
          />
          <Form.Group
            controlId="vouchers"
            style={{
              marginTop: "15px",
            }}
          >
            <Form.Label>Vouchers Accepted</Form.Label>
            <Form.Row>
              <Form.Check
                onChange={(e) =>
                  props.dispatch(
                    setSearchfieldsQuery("school_district", e.target.value)
                  )
                }
                inline
                defaultChecked={true}
                label="2"
                id="voucher-2"
              />
              <Form.Check inline defaultChecked={true} label="3" id="voucher-3" />
              <Form.Check inline defaultChecked={true} label="4" id="voucher-4" />
              <Form.Check inline defaultChecked={true} label="5" id="voucher-5" />
            </Form.Row>
          </Form.Group>
        </Form>
      </div>
    </>
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
