import React from "react";
import { Modal, Button } from "react-bootstrap";
import EditPropertyForm from "./EditPropertyForm";
import { editProperty } from "../api/property"; //fix with update
import "../style/App.css";

const updateProperty = (formValues, setFormValues, setShowEditModal) => {
  let formValues_withoutID = { ...formValues };
  delete formValues_withoutID.id;
  editProperty(formValues_withoutID, formValues.id); 
  setFormValues({});
  setShowEditModal(false);
};

const EditPropertyModal = ({
  showEditModal,
  setShowEditModal,
  formValues,
  setFormValues,
}) => {
const originalFormValues = { ...formValues }; {/**/}
  console.log(originalFormValues); {/**/}

  return (
    <>
      <Modal size="lg" show={showEditModal} onHide={() => {
        setShowEditModal(false)
      }}>
        <Modal.Header className="bg-info" closeButton>
          <Modal.Title className="text-light">Edit Property</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditPropertyForm formValues={formValues} setFormValues={setFormValues} /> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={(e) => {
            setFormValues(originalFormValues); {/**/}
            setShowEditModal(false); 
            console.log(originalFormValues); {/**/}
            console.log(formValues); {/**/}
          }}>
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
