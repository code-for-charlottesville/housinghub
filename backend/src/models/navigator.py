import json

from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from sqlalchemy import Column
from sqlalchemy.dialects.postgresql import BOOLEAN, UUID, VARCHAR

from models.base import Base


class Navigator(Base):
    __tablename__ = 'navigator'

    id = Column(UUID, primary_key = True)
    first_name = Column(VARCHAR)
    last_name = Column(VARCHAR)
    phone_number = Column(VARCHAR)
    email_address = Column(VARCHAR)
    company = Column(BOOLEAN)

    def __repr__(self):
        _dict = NavigatorSchema().dump(self)
        return json.dumps(_dict)

class NavigatorSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Navigator
