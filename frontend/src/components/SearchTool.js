import React from "react";
import "../style/SearchTool.css";
import { Container, Row, Col, Form } from "react-bootstrap";

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
              <Form.Control placeholder="Min" />
            </Col>
            <Col>
              <Form.Control placeholder="Max" />
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
            <Form.Label>Date Available</Form.Label>
            <Form.Control type="date"></Form.Control>
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
            <Form.Control as="select" custom>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
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
            <Form.Control as="select" custom>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Row style={{ marginTop: "20px" }}>
            <Col xs="10" style={{ paddingLeft: "15px" }}>
              Deposit Needed
            </Col>
            <Col xs="1">
              <Form.Check aria-label="deposit" />
            </Col>
          </Form.Row>
          <Form.Row style={{ marginTop: "4px" }}>
            <Col xs="10" style={{ paddingLeft: "15px" }}>
              Credit Report Needed
            </Col>
            <Col xs="1">
              <Form.Check aria-label="creditReport" />
            </Col>
          </Form.Row>
          <Form.Row style={{ marginTop: "4px" }}>
            <Col xs="10" style={{ paddingLeft: "15px" }}>
              Near Bus Stop
            </Col>
            <Col xs="1">
              <Form.Check aria-label="bus" />
            </Col>
          </Form.Row>
          <Form.Row style={{ marginTop: "4px", marginBottom: "30px" }}>
            <Col xs="10" style={{ paddingLeft: "15px" }}>
              Pets allowed
            </Col>
            <Col xs="1">
              <Form.Check aria-label="pets" />
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
            <Form.Control as="select" custom>
              <option>Venable</option>
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
            <Form.Control as="select" custom>
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

export default SearchTool;
