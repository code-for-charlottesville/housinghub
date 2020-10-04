import React from "react";
import { Modal, Button } from "react-bootstrap";
import PropertyForm from "./PropertyForm";
import { postProperty } from "../api/property";
import "../style/App.css";

const addProperty = (formValues, setFormValues, setShowModal) => {
  postProperty(formValues);
  setFormValues({});
  setShowModal(false);
};

const PropertyModal = ({
  showModal,
  setShowModal,
  formValues,
  setFormValues,
}) => {
  return (
    <>
      <Modal size="lg" show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header className="bg-info" closeButton>
          <Modal.Title className="text-light">Property Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PropertyForm formValues={formValues} setFormValues={setFormValues} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button
            variant="success"
            onClick={() => addProperty(formValues, setFormValues, setShowModal)}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PropertyModal;
