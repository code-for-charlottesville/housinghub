import json

from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from sqlalchemy import Column
from sqlalchemy.dialects.postgresql import (BOOLEAN, DATE, TIMESTAMP,
                                            INTEGER, UUID, VARCHAR)

from models.base import Base

class Note(Base):
    __tablename__ = 'note'

    id = Column(UUID, primary_key = True)
    entity_type = Column(VARCHAR)
    entity_id = Column(UUID)
    created_by = Column(UUID)
    private = Column(BOOLEAN)
    created_at = Column(TIMESTAMP)

    def __repr_(self):
        _dict = NoteSchema().dump(self)
        return json.dumps(self)
    
class NoteSchema(SQLAlchemyAutoSchema):
    class Meta: 
        model = Note