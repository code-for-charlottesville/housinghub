import json

from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from sqlalchemy import Column
from sqlalchemy.dialects.postgresql import (ARRAY, BOOLEAN, DATE, FLOAT,
                                            INTEGER, UUID, VARCHAR)

from models.base import Base


class Property(Base):
  __tablename__ = 'property'

  id = Column(UUID, primary_key = True)
  landlord_id = Column(UUID)
  navigator_id = Column(UUID)
  voucher_type_accepted = Column(ARRAY(VARCHAR))
  voucher_type_not_accepted = Column(ARRAY(VARCHAR))
  address = Column(VARCHAR)
  zip_code = Column(VARCHAR)
  unit_apt_no = Column(VARCHAR)
  property_name = Column(VARCHAR)
  bus_line = Column(BOOLEAN)
  school_district = Column(VARCHAR)
  wheelchair_accessibility = Column(BOOLEAN)
  elevator = Column(BOOLEAN)
  monthly_rent = Column(INTEGER)
  contact_method = Column(ARRAY(VARCHAR))
  is_available = Column(BOOLEAN)
  date_first_available = Column(DATE)
  last_contact_date = Column(DATE)
  potential_month_available = Column(INTEGER)
  bedrooms = Column(INTEGER)
  bathrooms = Column(INTEGER)
  shared_bathrooms = Column(INTEGER)
  has_basement = Column(BOOLEAN)
  application_fee = Column(FLOAT)
  deposit = Column(FLOAT)
  last_month_rent_required = Column(BOOLEAN)
  allow_criminal_records = Column(BOOLEAN)
  listing_date = Column(DATE)
  where_listed = Column(ARRAY(VARCHAR))
  floor = Column(INTEGER)
  housing_type = Column(VARCHAR)
  year_available = Column(INTEGER)
  credit_screening_company = Column(VARCHAR)
  background_screening_company = Column(VARCHAR)
  last_contacted_by = Column(UUID)
  pets_allowed = Column(BOOLEAN)
  background_check_required = Column(BOOLEAN)
  near_busstop = Column(BOOLEAN)
  primary_contact = Column(VARCHAR)
  contact_phone_number = Column(VARCHAR)

  def __repr__(self):
    _dict = PropertySchema().dump(self)
    return json.dumps(_dict)

class PropertySchema(SQLAlchemyAutoSchema):
  class Meta:
    model = Property
