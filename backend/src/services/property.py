import uuid

from sqlalchemy.orm import sessionmaker

from models.property import Property

class PropertyService:
  
  def __init__(self,logger,database_engine):
    super().__init__()
    Session = sessionmaker(database_engine)
    self.db_session = Session()

  def add_property(self, property_name: str, address: str, zip_code: str):
    _new_property = Property(id = uuid.uuid4(), property_name = property_name, address = address, zip_code = zip_code)
    self.db_session.add(_new_property)
    self.db_session.commit()
    return _new_property
