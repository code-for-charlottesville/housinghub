from sqlalchemy import Column
from sqlalchemy.dialects.postgresql import UUID,VARCHAR,BOOLEAN
import json

class User(Base):
  __tablename__ = 'users'

  id = Column(UUID, primary_key = True)
  username = Column(VARCHAR)
  password_hash = Column(VARCHAR)
  salt = Column(VARCHAR)
  role = Column(VARCHAR)
  role_id = Column(VARCHAR)
  is_admin = Column(BOOLEAN)

  def __repr__(self):
    return json.dumps(self)

