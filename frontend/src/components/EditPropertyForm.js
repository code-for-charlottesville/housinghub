import React from "react";
import { Form, Image } from "react-bootstrap";
import {
  HouseImage,
  AddressImage,
  DollarsignImage,
  BedImage,
  BathImage,
  SchoolImage,
  TicketImage,
  PersonImage,
  PhoneImage,
} from "../images";

const EditPropertyForm = ({ formValues, setFormValues }) => {

  const handleChange = (e) => {
    let localFormValues = {...formValues};
    localFormValues[e.target.id] =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormValues(localFormValues);
    console.log(formValues);
  };

  return (
    <>
      <Form>
        <Form.Group controlId="property_name">
          <Form.Label>
            <Image src={HouseImage} className="mr-2" />
            Property Name
          </Form.Label>
          <Form.Control type="text" placeholder="Property Name" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>
            <Image src={AddressImage} className="mr-2" />
            Address
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Address"
            onChange={handleChange}
            defaultValue={formValues.address}
          />
        </Form.Group>
        <Form.Group controlId="housing_type">
          <Form.Label>
            <Image src={HouseImage} className="mr-2" />
            Housing Type
          </Form.Label>
          <Form.Control as="select" onChange={handleChange} defaultValue={formValues.housing_type} >
            <option></option>
            <option>Apartment</option>
            <option>Shared House</option>
            <option>Basement Apartment</option>
            <option>Full House</option>
            <option>Duplex</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="monthly_rent">
          <Form.Label>
            <Image src={DollarsignImage} className="mr-2" />
            Rent
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="placeholder"
            onChange={handleChange}
            defaultValue={formValues.monthly_rent}
          />
        </Form.Group>
        <Form.Group controlId="bedrooms">
          <Form.Label>
            <Image src={BedImage} className="mr-2" />
            Bedrooms
          </Form.Label>
          <Form.Control type="number" placeholder="1" onChange={handleChange} defaultValue={formValues.bedrooms}/>
        </Form.Group>
        <Form.Group controlId="bathrooms">
          <Form.Label>
            <Image src={BathImage} className="mr-2" />
            Bathrooms
          </Form.Label>
          <Form.Control type="number" placeholder="1" onChange={handleChange} defaultValue={formValues.bathrooms}/>
        </Form.Group>
        <Form.Group controlId="shared_bathrooms">
          <Form.Label>
            <Image src={BathImage} className="mr-2" />
            Shared Bathrooms
          </Form.Label>
          <Form.Control type="number" placeholder="0" onChange={handleChange} defaultValue={formValues.shared_bathrooms}/>
        </Form.Group>
        <Form.Group controlId="location">
          <Form.Label>
            <Image src={SchoolImage} className="mr-2" />
            Location
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Charlottesville"
            onChange={handleChange}
            defaultValue={formValues.location}
          />
        </Form.Group>
        <Form.Group controlId="voucher_type_accepted">
          <Form.Label>
            <Image src={TicketImage} className="mr-2" />
            Vouchers Accepted
          </Form.Label>
          <Form.Control as="select" onChange={handleChange} defaultValue={formValues.voucher_type_accepted}>
            <option>None</option>
            <option>Type 1</option>
            <option>Type 2</option>
            <option>All</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="primary_contact">
          <Form.Label>
            <Image src={PersonImage} className="mr-2" />
            Property Contact
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Example Property Contact"
            onChange={handleChange}
            defaultValue={formValues.property_contact}
          />
        </Form.Group>
        <Form.Group controlId="contact_phone_number">
          <Form.Label>
            <Image src={PhoneImage} className="mr-2" />
            Contact Phone Number
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Example Phone Number"
            onChange={handleChange}
            defaultValue={formValues.contact_phone_number}  
          />
        </Form.Group>
        <Form.Group controlId="landlord_id">
          <Form.Label>
            <Image src={HouseImage} className="mr-2" />
            Landlord
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Example Landlord"
            onChange={handleChange}
            defaultValue={formValues.landlord_id}          
          />
        </Form.Group>
        <Form.Label>Test Label</Form.Label>
        <Form.Switch controlId="near_busstop"
          className="mt-2 mb-2"
          id="near_busstop"
          label="Bus Nearby"
          onChange={handleChange}
          defaultValue={formValues.near_busstop} 
        />
        <Form.Switch controlId="has_basement"
          className="mt-2 mb-2"
          id="has_basement"
          label="Basement"
          onChange={handleChange}
          defaultValue={formValues.has_basement}        
        />
        <Form.Switch controlId="wheelchair_accessibility"
          className="mt-2 mb-2"
          id="wheelchair_accessibility"
          label="ADA Complient"
          onChange={handleChange}
          defaultValue={formValues.wheelchair_accessibility}        
        />
        <Form.Switch controlId="background_check_required"
          className="mt-2 mb-2"
          id="background_check_required"
          label="No Background Check"
          onChange={handleChange}
          defaultValue={formValues.background_check_required}        
        />
        <Form.Switch controlId="pets_allowed"
          className="mt-2 mb-2"
          id="pets_allowed"
          label="Pets Allowed"
          onChange={handleChange}
          defaultValue={formValues.pets_allowed}        
        />
        <Form.Switch controlId="elevator"
          className="mt-2 mb-2"
          id="elevator"
          label="Elevator"
          onChange={handleChange}
          defaultValue={formValues.elevator}
        />
        <Form.Group className="mt-4" controlId="notes">
          <Form.Label className="mb-2">
            <Image src={AddressImage} className="mr-2" />
            Additional Notes
          </Form.Label>
          <Form.Control as="textarea" rows="3" defaultValue={formValues.notes} />
        </Form.Group>
      </Form>
    </>
  );
};

export default EditPropertyForm;
