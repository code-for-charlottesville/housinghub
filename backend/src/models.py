from datetime import datetime
import uuid
from sqlalchemy.ext.declarative import declarative_base
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy import Column, String, Boolean, DateTime, ForeignKey
from sqlalchemy.orm import relationship

Base = declarative_base()


class User(Base):
    """user is anyone who has uses the app"""
    __tablename__ = 'users'
    id = Column(String, primary_key=True)
    user_name = Column('user_name', String)
    password_hash = Column('password_hash', String)

    role = Column('role', String)

    is_admin = Column('is_admin', Boolean)
    registered_on = Column('registered_on', DateTime, default=datetime.now)
    last_updated = Column('last_updated',
                          DateTime,
                          default=datetime.now,
                          onupdate=datetime.now)

    def __init__(self, info={}):
        """
        attempts to connect to db, throws exception on error'
        throws key error when required information does not exist
        """
        self.id = "u-" + str(uuid.uuid1())
        self.user_name = info["user_name"]
        self.role = info["role"]
        if self.role not in ["navigator", "landlord"]:
            raise KeyError("role must be one of {}".format(
                ["navigator", "landlord"]))
        self.is_admin = info.get("is_admin") or info.get("is_admin") == "true"
        self._set_password(info.get("password"))

    def _set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def get_info(self):
        return_dict = {
            "id": self.id,
            "user_name": self.user_name,
            "role": self.role,
            "is_admin": self.is_admin,
            "registered_on": self.registered_on,
            "last_updated": self.last_updated
        }

        return return_dict


class Navigator(Base):
    __tablename__ = 'navigators'
    id = Column(String, primary_key=True)
    user_id = Column('user_id', ForeignKey('users.id'))


class Landlord(Base):
    __tablename__ = 'landlords'
    id = Column(String, primary_key=True)
    user_id = Column('user_id', ForeignKey('users.id'))
