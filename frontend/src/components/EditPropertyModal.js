import React from "react";
import { Modal, Button } from "react-bootstrap";
import PropertyForm from "./PropertyForm";
import { postProperty } from "../api/property"; //fix with update
import "../style/App.css";

const updateProperty = (formValues, setFormValues, setShowEditModal) => {
  postProperty(formValues);
  setFormValues({});
  setShowEditModal(false);
};

const EditPropertyModal = ({
  showModal,
  setShowEditModal,
  formValues,
  setFormValues,
}) => {
  return (
    <>
      <Modal size="lg" show={showModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header className="bg-info" closeButton>
          <Modal.Title className="text-light">EDITING PROPERTY</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PropertyForm formValues={formValues} setFormValues={setFormValues} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button
            variant="success"
            onClick={() => updateProperty(formValues, setFormValues, setShowEditModal)}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditPropertyModal;
