import React from "react";
import { Button, Form, Image } from 'react-bootstrap'

import AddressImage from "../images/address.svg"
import DateImage from "../images/date.svg"
import DollarsignImage from "../images/dollarsign.svg"
import HouseImage from "../images/house.svg"
import BedImage from "../images/bed.svg"
import BathImage from "../images/bath.svg"
import SchoolImage from "../images/school.svg"
import TicketImage from "../images/ticket.svg"
import PersonImage from "../images/person.svg"
import PhoneImage from "../images/phone.svg"
import LocationImage from "../images/location.png"
import BusImage from "../images/bus.svg"
import BasementImage from "../images/basement.svg"


const PropertyForm = ({ showModal, setShowModal }) => {
  return (
    <>
      <Form>
        <Form.Group controlId="propertyForm.propertyName">
          <Form.Label>
            <Image src={HouseImage} className="mr-2" />Property Name</Form.Label>
          <Form.Control type="text" placeholder="Example Property Name" />
        </Form.Group>
        <Form.Group controlId="propertyForm.address">
          <Form.Label>
            <Image src={AddressImage} className="mr-2" />Address</Form.Label>
          <Form.Control type="text" placeholder="Example Address" />
        </Form.Group>
        <Form.Group controlId="exampleForm.housingType">
          <Form.Label>
            <Image src={HouseImage} className="mr-2" />Housing Type</Form.Label>
          <Form.Control as="select">
            <option>Apartment</option>
            <option>Shared House</option>
            <option>Basement Apartment</option>
            <option>Full House</option>
            <option>Duplex</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="propertyForm.rent">
          <Form.Label>
            <Image src={DollarsignImage} className="mr-2" />Rent</Form.Label>
          <Form.Control type="text" placeholder="placeholder" />
        </Form.Group>
        <Form.Group controlId="propertyForm.bedrooms">
          <Form.Label>
            <Image src={BedImage} className="mr-2" />Bedrooms</Form.Label>
          <Form.Control type="number" placeholder="1" />
        </Form.Group>
        <Form.Group controlId="propertyForm.bathrooms">
          <Form.Label>
            <Image src={BathImage} className="mr-2" />Bathrooms</Form.Label>
          <Form.Control type="number" placeholder="1" />
        </Form.Group>
        <Form.Group controlId="propertyForm.sharedBathrooms">
          <Form.Label>
            <Image src={BathImage} className="mr-2" />Shared Bathrooms</Form.Label>
          <Form.Control type="number" placeholder="0" />
        </Form.Group>
        <Form.Group controlId="propertyForm.location">
          <Form.Label>
            <Image src={SchoolImage} className="mr-2" />Location</Form.Label>
          <Form.Control type="text" placeholder="Charlottesville" />
        </Form.Group>
        <Form.Group controlId="exampleForm.vouchers">
          <Form.Label>
            <Image src={TicketImage} className="mr-2" />Vouchers Accepted</Form.Label>
          <Form.Control as="select">
            <option>None</option>
            <option>Type 1</option>
            <option>Type 2</option>
            <option>All</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="propertyForm.propertyContact">
          <Form.Label>
            <Image src={PersonImage} className="mr-2" />Property Contact</Form.Label>
          <Form.Control type="text" placeholder="Example Property Contact" />
        </Form.Group>
        <Form.Group controlId="propertyForm.contactPhoneNumber">
          <Form.Label>
            <Image src={PhoneImage} className="mr-2" />Contact Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Example Phone Number" />
        </Form.Group>
        <Form.Group controlId="propertyForm.landlord">
          <Form.Label>
            <Image src={HouseImage} className="mr-2" />Landlord</Form.Label>
          <Form.Control type="text" placeholder="Example Landlord<" />
        </Form.Group>
        <Form.Label>Test Label</Form.Label>
        <Form.Check
          className="mt-2 mb-2"
          type="switch"
          id="bus-switch"
          label="Bus Nearby"
        />
        <Form.Check
          className="mt-2 mb-2"

          type="switch"
          id="basement-switch"
          label="Basement"
        />
        <Form.Check
          className="mt-2 mb-2"
          type="switch"
          id="wheelchair-switch"
          label="Wheelchair Accessible"
        />
        <Form.Check
          className="mt-2 mb-2"
          type="switch"
          id="background-check-switch"
          label="No Background Check"
        />
        <Form.Check
          className="mt-2 mb-2"
          type="switch"
          id="pets-switch"
          label="Pets Allowed"
        />
        <Form.Check
          className="mt-2 mb-2"
          type="switch"
          id="elevator-switch"
          label="Elevator"
        />
        <Form.Group className="mt-4" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="mb-2">
            <Image src={AddressImage} className="mr-2" />Additional Notes</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
      </Form>
    </>
  );
};

export default PropertyForm
