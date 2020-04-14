from sqlalchemy import Column
from sqlalchemy.dialects.postgresql import UUID,VARCHAR,BOOLEAN
import json

from models import Base

class Navigator(Base):
    __tablename__ = 'navigator'

    id = Column(UUID, primary_key = True)
    first_name = Column(VARCHAR)
    last_name = Column(VARCHAR)
    phone_number = Column(VARCHAR)
    email_address = Column(VARCHAR)
    company = Column(BOOLEAN)

    def __repr__(self):
        return json.dumps(self)

    def to_dict(self):
        _dict = self.__dict__
        _dict.pop('_sa_instance_state')
        return _dict