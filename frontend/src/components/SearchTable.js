import React, { useState } from "react";
import "../style/App.css";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import PropertyModal from "./PropertyModal";
import EditPropertyModal from "./EditPropertyModal";
import { Row, Col, Button } from "react-bootstrap";

export default function SearchTable(props) {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [formValues, setFormValues] = useState({});
  return (
    <>
      {showModal ? (
        <PropertyModal
          showModal={showModal}
          setShowModal={setShowModal}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      ) : (
        ""
      )}
      {showEditModal ? (
        <EditPropertyModal
          showModal={showModal}
          setShowEditModal={setShowEditModal}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      ) : (
        ""
      )}
      <div className="border mb-4">
        <Table
          columns={props.columns}
          rows={props.rows}
          selectedRowIndex={3}
          onColumnSort={(cName, cIndex) => {
            console.log("cname is ", cName);
            console.log("cIndex is ", cIndex);
          }}
          onEditClick={(r) => {
            setFormValues(r);
            setShowEditModal(true);
          }}
          onRowSelect={(rName, rIndex) => {
            console.log(rName, rIndex);
            // setShowModal(true);
          }}
          onEditClick={(r) => {
            setFormValues(r);
            setShowEditModal(true);
          }}
        />
      </div>

      <Row className="text-center pagination ml-3">
        <Col sm={1} />
        <Col sm={9}>
          <Pagination
            numberOfPages={
              Math.ceil(props.pagination.totalNumberOfResults /
              props.pagination.results_per_page)
            }
            currentPageIndex={props.pagination.page}
            resultsIndexStart={
              props.pagination.page * props.pagination.results_per_page
            }
            resultsIndexEnd={
              (props.pagination.page + 1) * (props.pagination.results_per_page) - 1
            }
            onSetPage={(index) => props.pagination.page = index}
          />
        </Col>
        <Col sm={2}>
          <Button className="justify-end" onClick={() => setShowModal(true)}>
            Add Property
          </Button>
        </Col>
      </Row>
    </>
  );
}
