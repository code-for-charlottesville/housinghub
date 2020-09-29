import React from "react";
import { Modal, Button } from 'react-bootstrap'
import PropertyForm from './PropertyForm'
import "../style/App.css";

const PropertyModal = ({ showModal, setShowModal, formValues, setFormValues }) => {
  return (
    <>
      <Modal size="lg" scrollable show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header className="bg-info" closeButton>
          <Modal.Title className="text-light">Property Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PropertyForm formValues={formValues} setFormValues={setFormValues}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={() => setShowModal(false)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PropertyModal