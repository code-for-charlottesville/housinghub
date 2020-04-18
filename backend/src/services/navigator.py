import uuid

from passlib.hash import pbkdf2_sha256
from sqlalchemy.orm import sessionmaker

from models.navigator import Navigator


class NavigatorService:
  
  def __init__(self,logger,database_engine):
    super().__init__()
    Session = sessionmaker(database_engine)
    self.db_session = Session()

  def add_navigator(self, first_name: str, last_name: str, phone_number: str, email_address: str, company: bool):
    _new_navigator = Navigator(id = uuid.uuid4(), first_name = first_name, last_name = last_name, phone_number = phone_number, email_address = email_address, company = company)
    self.db_session.add(_new_navigator)
    self.db_session.commit()
    return _new_navigator
