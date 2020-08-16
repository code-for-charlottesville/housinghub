import React from "react";
import { Button, Form } from "react-bootstrap";

const PropertyForm = ({ showModal, setShowModal }) => {
  return (
    <>
      <Form>
        <Form.Group controlId="propertyForm.propertyName">
          <Form.Label>Property Name</Form.Label>
          <Form.Control type="text" placeholder="Example Property Name" />
        </Form.Group>
        <Form.Group controlId="propertyForm.address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Example Address" />
        </Form.Group>
        <Form.Group controlId="exampleForm.housingType">
          <Form.Label>Housing Type</Form.Label>
          <Form.Control as="select">
            <option>Apartment</option>
            <option>Shared House</option>
            <option>Basement Apartment</option>
            <option>Full House</option>
            <option>Duplex</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="propertyForm.rent">
          <Form.Label>Rent</Form.Label>
          <Form.Control type="text" placeholder="placeholder" />
        </Form.Group>
        <Form.Group controlId="propertyForm.bedrooms">
          <Form.Label>Bedrooms</Form.Label>
          <Form.Control type="number" placeholder="1" />
        </Form.Group>
        <Form.Group controlId="propertyForm.bathrooms">
          <Form.Label>Bathrooms</Form.Label>
          <Form.Control type="number" placeholder="1" />
        </Form.Group>
        <Form.Group controlId="propertyForm.sharedBathrooms">
          <Form.Label>Shared Bathrooms</Form.Label>
          <Form.Control type="number" placeholder="0" />
        </Form.Group>
        <Form.Group controlId="propertyForm.location">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Charlottesville" />
        </Form.Group>
        <Form.Group controlId="exampleForm.vouchers">
          <Form.Label>Vouchers Accepted</Form.Label>
          <Form.Control as="select">
            <option>None</option>
            <option>Type 1</option>
            <option>Type 2</option>
            <option>All</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="propertyForm.propertyContact">
          <Form.Label>Property Contact</Form.Label>
          <Form.Control type="text" placeholder="Example Property Contact" />
        </Form.Group>
        <Form.Group controlId="propertyForm.contactPhoneNumber">
          <Form.Label>Contact Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Example Phone Number" />
        </Form.Group>
        <Form.Group controlId="propertyForm.landlord">
          <Form.Label>Landlord</Form.Label>
          <Form.Control type="text" placeholder="Example Landlord" />
        </Form.Group>
        <Form.Check type="switch" id="bus-switch" label="Near Bus Stop" />
        <Form.Check type="switch" id="basement-switch" label="Basement" />
        <Form.Check
          type="switch"
          id="wheelchair-switch"
          label="Wheelchair Accessible"
        />
        <Form.Check
          type="switch"
          id="background-check-switch"
          label="No Background Check"
        />
        <Form.Check type="switch" id="pets-switch" label="Pets Allowed" />
        <Form.Check type="switch" id="elevator-switch" label="Elevator" />
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Additional Notes</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
      </Form>
    </>
  );
};

export default PropertyForm;
