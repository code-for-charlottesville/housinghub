import uuid

from sqlalchemy.orm import sessionmaker

from models.property import Property


class PropertyService:

    def __init__(self, logger, Session):
        super().__init__()
        self.session = Session()
        self.db_session = Session()

    def add_property(self, property: Property):
        property.id = uuid.uuid4()
        self.session.add(property)
        self.session.commit()
        return property

    def get_property(self, request):
        # TO DO : changes corresponding to search property API
        return None
