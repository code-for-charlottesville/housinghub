import React from "react";
import { Modal, Button } from "react-bootstrap";
import PropertyForm from "./PropertyForm";

const PropertyModal = ({ showModal, setShowModal }) => {
  return (
    <>
      <Modal size="lg" show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header className="bg-info" closeButton>
          <Modal.Title className="text-light">Property Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PropertyForm />
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

export default PropertyModal;
