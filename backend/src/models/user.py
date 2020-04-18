import json

from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from sqlalchemy import Column
from sqlalchemy.dialects.postgresql import BOOLEAN, UUID, VARCHAR

from models.base import Base


class User(Base):
  __tablename__ = 'users'

  id = Column(UUID, primary_key = True)
  username = Column(VARCHAR)
  password_hash = Column(VARCHAR)
  role = Column(VARCHAR)
  role_id = Column(VARCHAR)
  is_admin = Column(BOOLEAN)

  def __repr__(self):
    return json.dumps(self)

class UserSchema(SQLAlchemyAutoSchema):
  class Meta:
    model = User
