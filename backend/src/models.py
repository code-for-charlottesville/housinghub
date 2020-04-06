import datetime
import random
import uuid
from sqlalchemy.ext.declarative import declarative_base
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy import Column, String, Boolean

Base = declarative_base()


class User(Base):
    """user is anyone who has uses the app"""
    __tablename__ = 'users'
    id = Column(String, primary_key=True)
    user_name = Column('user_name', String)
    password_hash = Column('password_hash', String)
    role = Column('role', String)
    role_id = Column('role_id', String)
    is_admin = Column('is_admin', Boolean)

    salt = None
    registered_on = None
    last_updated_on = None

    def __init__(self, info={}):
        """attempts to connect to db, throws exception on error"""
        # create new fields
        self.id = "u-" + str(uuid.uuid1())
        self.registered_on = datetime.datetime.now()
        self.last_updated_on = self.registered_on
        # throws key error when required information does not exist
        #self.email = info["email"]
        self.user_name = info["user_name"]
        self.salt = self._create_salt()
        self.role_id = info["role_id"]
        self.role = info["role"]
        self.is_admin = info.get("is_admin") or info.get("is_admin") == "true"
        self.set_password(info.get("password"))

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def _create_salt(self):
        ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        chars = []
        for i in range(16):
            chars.append(random.choice(ALPHABET))

        return "".join(chars)

    def get_info(self):
        return_dict = {
            "id": self.id,
            "user_name": self.user_name,
            "role": self.role,
            "role_id": self.role_id,
            "is_admin": self.is_admin,
        }

        return return_dict
