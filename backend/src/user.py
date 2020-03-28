import datetime
import uuid


class User:
    """user is anyone who has uses the app"""

    # TODO: replace when entire scheme is decided
    uid = None
    email = None
    password = None
    first_name = None
    last_name = None
    registered_on = None

    def __init__(self, info={}):
        """attempts to connect to db, throws exception on error"""
        # create new fields
        self.uuid = uuid.uuid1()
        self.registered_on = datetime.datetime.now()
        # throws key error when required information does not exist
        self.email = info["email"]
        self.user_name = info["user_name"]
        self.password = info["password"]
        self.first_name = info["first_name"]
        self.last_name = info["last_name"]
