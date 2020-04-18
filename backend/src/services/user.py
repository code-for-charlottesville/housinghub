import uuid

from passlib.hash import pbkdf2_sha256
from sqlalchemy.exc import DBAPIError

from models.user import User


class UserService:
  
  def __init__(self,logger,Session):
    super().__init__()
    self.session = Session()
    self.logger = logger

  def add_user(self, username: str, password: str, role: str, is_admin: bool = False) -> User:
    _new_user = User(id = uuid.uuid4(), username = username, password_hash = pbkdf2_sha256.hash(password), role = role, role_id = uuid.uuid4(), is_admin = is_admin)
    try:
      self.session.add(_new_user)
      self.session.commit()
      return _new_user
    except DBAPIError as err:
      self.logger.error('Error adding user to database')
      return None

  def get_user_by_id(self, uid) -> User:
    return self.session.query(User).filter(User.id == uid).one_or_none()
