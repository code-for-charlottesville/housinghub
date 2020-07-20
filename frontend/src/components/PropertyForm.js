import React from "react";
import { Button, Form } from 'react-bootstrap'

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
        <Form.Group controlId="propertyForm.primaryContact">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Primary Contact" />
        </Form.Group>
        <Form.Group controlId="propertyForm.contactPhoneNumber">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Contact Phone Number" />
        </Form.Group>
        <Form.Group controlId="propertyForm.landlord">
          <Form.Label>Lan</Form.Label>
          <Form.Control type="text" placeholder="Contact Phone Number" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
      </Form>
    </>
  );
};

export default PropertyForm
