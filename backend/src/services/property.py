import uuid
import app 
from sqlalchemy.orm import sessionmaker
from sqlalchemy import update
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

    def get_property(self, payload):
        if (self.db_session.query(Property).all() == None):
            return None
        searchFields = payload["searchFields"]
        _properties = self.session.query(Property)
        for key, value in searchFields.items():
            if (isinstance(value, list)):
                # for houing types and zip code
                if (len(value) > 0):
                    _properties = _properties.filter(getattr(Property, key).in_(value))
                else:
                    continue
            elif (key == "date_available"):
                _properties = _properties.filter(Property.date_first_available <= value)
            elif (key == "max_rent"):
                _properties = _properties.filter(Property.monthly_rent <= value)
            else:
                _properties = _properties.filter(getattr(Property, key) == value)
        if payload.get("pagination",None):
            offset = payload["pagination"]["results_per_page"] * payload["pagination"]["page"]
            limit =  payload["pagination"]["results_per_page"]
            return _properties.offset(offset).limit(limit).all(), _properties.count()
        else:
            result = _properties.all()
            return _properties.all(), len(result)
            

    def update_property(self, payload):
        _property = self.session.query(Property).get({"id": payload["id"]})
        if (_property == None):
            app.logger.error('Property not found')
        self.session.query(Property).filter(Property.id == payload["id"]).update(payload)
        self.session.commit()
        return _property

    def delete_property(self, payload):
        _property = self.session.query(Property).get({"id": payload["id"]})
        if (_property == None):
            app.logger.error('Property not found')
        self.session.delete(_property)
        self.session.commit()
        return _property

    def get_all_property(self):
        # TO DO : changes corresponding to search property API
        return self.db_session.query(Property).all()
