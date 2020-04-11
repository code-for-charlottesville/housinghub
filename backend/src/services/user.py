import uuid

from passlib.hash import pbkdf2_sha256
from sqlalchemy.orm import sessionmaker

from models.user import User


class UserService:
  
  def __init__(self,logger,database_engine):
    super().__init__()
    Session = sessionmaker(database_engine)
    self.db_session = Session()

  def add_user(self, username: str, password: str, role: str, is_admin: bool = False):
    _new_user = User(id = uuid.uuid4(), username = username, password_hash = pbkdf2_sha256.hash(password), role = role, role_id = uuid.uuid4(), is_admin = is_admin)
    self.db_session.add(_new_user)
    self.db_session.commit()
    return _new_user
