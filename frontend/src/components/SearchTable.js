import React, { useState } from "react";
import "../style/App.css";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import PropertyModal from "./PropertyModal";
import { Row, Col, Modal, Button } from "react-bootstrap";

export default function SearchTable(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal ? (
        <PropertyModal showModal={showModal} setShowModal={setShowModal} />
      ) : (
        ""
      )}
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
            setShowModal(true);
          }}
        />
      </div>
      <Row className="text-center">
        <Col>
          <Pagination
            numberOfPages={
              props.pagination.totalNumberOfResults /
              props.pagination.results_per_page
            }
            currentPageIndex={props.pagination.page}
            pageIndexStart={
              props.pagination.page * props.pagination.results_per_page
            }
            pageIndexEnd={
              props.pagination.page * (props.pagination.results_per_page + 1) -
              1
            }
            onSetPage={(i) => console.log("new page: %d", i)}
          />
        </Col>
      </Row>
    </>
  );
}
