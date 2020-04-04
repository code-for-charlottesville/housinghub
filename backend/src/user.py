import datetime
import random
import uuid


class User:
    """user is anyone who has uses the app"""

    # TODO: replace when entire scheme is decided
    id = None
    username = None
    salt = None
    password_hash = None
    role = None
    role_id = None
    is_admin = None
    registered_on = None
    last_updated_on = None

    def __init__(self, info={}):
        """attempts to connect to db, throws exception on error"""
        # create new fields
        self.id = str(uuid.uuid1())
        self.registered_on = datetime.datetime.now()
        self.last_updated_on = self.registered_on
        # throws key error when required information does not exist
        #self.email = info["email"]
        self.username = info["user_name"]
        self.password_hash = info["password"]
        self.salt = self._create_salt()
        self.role_id = info["role_id"]
        self.role = info["role"]
        self.is_admin = (info.get("is_admin") == "true") or False

    def _create_salt(self):
        ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        chars = []
        for i in range(16):
            chars.append(random.choice(ALPHABET))

        return "".join(chars)

    def get_info(self):
        return_dict = {
            "id": self.id,
            "username": self.username,
            "salt": self.salt,
            "password_hash": self.password_hash,
            "role": self.role,
            "role_id": self.role_id,
            "is_admin": self.is_admin,
        }

        return return_dict
