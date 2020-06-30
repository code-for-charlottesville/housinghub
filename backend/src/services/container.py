from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

import services
from services.auth import AuthService
from services.navigator import NavigatorService
from services.property import PropertyService
from services.user import UserService
from services.note import NoteService


class ServicesContainer:

    def __init__(self, logger, config):
        self.logger = logger
        if config['DB_CLUSTER_ARN'] and config['DB_SECRET_ARN']:
            _engine = create_engine(config['DATABASE_URL'], echo=True,
                                    connect_args=dict(aurora_cluster_arn=config['DB_CLUSTER_ARN'],
                                                      secret_arn=config['DB_SECRET_ARN']))
        else:
            _engine = create_engine(config['DATABASE_URL'])
        self.Session = sessionmaker(_engine)
        self.config = config

    def user_service(self):
        return UserService(self.logger, self.Session)

    def auth_service(self):
        return AuthService(self.logger, self.Session,
                           self.config['TOKEN_SECRET'],
                           self.config['TOKEN_ALG'], self.config['TOKEN_TTL'])

    def navigator_service(self):
        return NavigatorService(self.logger, self.Session)

    def property_service(self):
        return PropertyService(self.logger, self.Session)

    def note_service(self):
        return NoteService(self.logger, self.Session)
