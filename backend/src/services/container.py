
from sqlalchemy import create_engine
import services

from services.user import UserService
from services.auth import AuthService


class ServicesContainer:

  def __init__(self,logger,config):
    self.logger = logger
    self.database_engine = create_engine(config['DATABASE_URL'])
    self.config = config
  
  def user_service(self):
    return UserService(self.logger, self.database_engine)

  def auth_service(self):
    return AuthService(self.logger,self.database_engine,self.config['TOKEN_SECRET'],self.config['TOKEN_ALG'],self.config['TOKEN_TTL'])