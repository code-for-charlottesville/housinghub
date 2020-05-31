
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

import services
from services.auth import AuthService
from services.navigator import NavigatorService
from services.property import PropertyService
from services.user import UserService
from services.note import NoteService

class ServicesContainer:

  def __init__(self,logger,config):
    self.logger = logger
    self.Session = sessionmaker(create_engine(config['DATABASE_URL']))
    self.config = config
  
  def user_service(self):
    return UserService(self.logger, self.Session)

  def auth_service(self):
    return AuthService(self.logger,self.Session,self.config['TOKEN_SECRET'],self.config['TOKEN_ALG'],self.config['TOKEN_TTL'])

  def navigator_service(self):
    return NavigatorService(self.logger, self.Session)

  def property_service(self):
    return PropertyService(self.logger, self.Session)

  def note_service(self):
    return NoteService(self.logger, self.Session)
