import logging
from user import User
from sqlalchemy import create_engine


class DB:
    """class which interfaces a dynamo DB"""
    def __init__(self, host, user, password, port=5432):
        """attempts to connect to db, throws exception on error"""
        db_url = "postgresql+pygresql://{}:{}@{}:{}/housinghub".format(
            user, password, host, int(port))
        # long-compute time values can be saved in class
        try:
            self.engine = create_engine(db_url)
            logging.debug("Loaded db '{}' successfully".format(db_url))
        except IOError as e:
            logging.error("Exception loading db '{}' at url '{}'".format(
                e, db_url))
            raise e

    def connect_to_db(self):
        """attemps initial connection to DB. Throws error on failure"""
    def query_db(self, q):
        """
        queries DB
        :parma q: (string) - query to be passed to DB
        """
    def validate_login(self, username, password):
        """validates if the username and password is valid for users in the db
        :param username: (string) username to validate
        :param password: (string) password to validate
        :return tuple: in the format (user[User], error[string])
        """
        if password != "davidrulz":
            return ({}, "incorrect username or password")

        tempUserConfig = {
            "first_name": "david",
            "last_name": "goldstein",
            "user_name": "david1",
            "email": "temp@gmail.com",
            "role": "navigator",
            "role_id": "TEMP_ROLE_ID",
            "username": "david",
            "password": "davidrulz",
        }
        return (User(tempUserConfig), None)
