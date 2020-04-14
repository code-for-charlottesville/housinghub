from sqlalchemy import Column
from sqlalchemy.dialects.postgresql import UUID,VARCHAR,BOOLEAN, ARRAY, INTEGER, DATE, FLOAT

import json

from models import Base

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


  def __repr__(self):
    return json.dumps(self)

  def to_dict(self):
    _dict = self.__dict__
    _dict.pop('_sa_instance_state')
    return _dict