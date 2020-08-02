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
        <Form.Group controlId="propertyForm.primaryContact">
          <Form.Label>
            <Image src={PersonImage} className="mr-2" />Primary Contact</Form.Label>
          <Form.Control type="text" placeholder="Primary Contact" />
        </Form.Group>
        <Form.Group controlId="propertyForm.contactPhoneNumber">
          <Form.Label>
            <Image src={PhoneImage} className="mr-2" />Contact Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Contact Phone Number" />
        </Form.Group>
        <Form.Group controlId="propertyForm.landlord">
          <Form.Label>
            <Image src={HouseImage} className="mr-2" />Landlord</Form.Label>
          <Form.Control type="text" placeholder="Landlord<" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>
            <Image src={AddressImage} className="mr-2" />Example textarea</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
      </Form>
    </>
  );
};

export default PropertyForm
