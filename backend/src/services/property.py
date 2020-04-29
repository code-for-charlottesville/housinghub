import uuid

from sqlalchemy.orm import sessionmaker

from models.property import Property


class PropertyService:
  
  def __init__(self,logger,Session):
    super().__init__()
    self.session = Session()
    self.db_session = Session()

  def add_property(self, property: Property):
    property.id = uuid.uuid4()
    self.session.add(property)
    self.session.commit()
    return property

  def get_property_by_id(self, pid) -> Property:
      return self.db_session.query(Property).filter(Property.id == pid).one_or_none()

  def get_all_property(self):
      print("get all property")
      return self.db_session.query(Property).all()

  def delete_property(self, pid):
      return self.db_session.query(Property).filter(Property.id == pid).delete(synchronize_session=False)

  def get_properties_by_zip_code(self, zip_code):
      return self.db_session.query(Property).filter(Property.zip_code == zip_code).all()

  def get_properties_by_max_rent(self, max_rent):
      return self.db_session.query(Property).filter(Property.monthly_rent <= max_rent).all()

  def get_properties_by_bedrooms(self, bedrooms):
      return self.db_session.query(Property).filter(Property.bedrooms == bedrooms).all()

  def get_properties_by_housing_type(self, housing_types):
      return self.db_session.query(Property).filter(Property.housing_type.in_(housing_types)).all()

  def get_properties_by_date(self, date):
      return self.db_session.query(Property).filter(Property.date_first_available <= date).all()

  def get_property(self, request):
      print("get property service")
      print(str(request))
      prop_result = self.get_all_property()
      # prop_result = self.db_session.query(Property).filter(Property.zip_code == request['zip_code']).all()
      '''prop_result = self.db_session.query(Property).filter(Property.zip_code == request['zip_code']). \
          filter(Property.monthly_rent <= request['max_rent']). \
          filter(Property.bedrooms == request['bedrooms']). \
          filter(Property.housing_type.in_(request['housing_type'])). \
          filter(Property.date_first_available <= request['date_available']).all()'''
      return prop_result
