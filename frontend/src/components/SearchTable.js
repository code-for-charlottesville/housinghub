import React from "react";
import "../style/App.css";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import { Row, Col } from "react-bootstrap";

export default function SearchTable(props) {
  return (
    <>
      <div className="border mb-4">
        <Table
          columns={props.columns}
          rows={props.rows}
          selectedRowIndex={3}
          onColumnSort={(cName, cIndex) => {
            console.log(cName, cIndex);
          }}
          onRowSelect={(rName, rIndex) => {
            console.log(rName, rIndex);
          }}
        />
      </div>
      <Row className="text-center">
        <Col>
          <Pagination
            numberOfPages={16}
            currentPageIndex={11}
            pageIndexStart={0}
            pageIndexEnd={10}
            onSetPage={(i) => console.log("new page: %d", i)}
          />
        </Col>
      </Row>
    </>
  );
}
