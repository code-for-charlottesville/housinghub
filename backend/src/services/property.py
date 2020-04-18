import uuid

from sqlalchemy.orm import sessionmaker

from models.property import Property


class PropertyService:
  
  def __init__(self,logger,database_engine):
    super().__init__()
    Session = sessionmaker(database_engine)
    self.db_session = Session()

  def add_property(self, property: Property):
    property.id = uuid.uuid4()
    self.db_session.add(property)
    self.db_session.commit()
    return property
