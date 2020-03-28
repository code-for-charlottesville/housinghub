import logging


class DB:
    """class which interfaces a dynamo DB"""
    def __init__(self, dbEndpoint):
        """attempts to connect to db, throws exception on error"""
        self.dbEndpoint = dbEndpoint
        # long-compute time values can be saved in class
        try:
            self.connect_to_db()
            logging.debug("Loaded db '{}' successfully".format(dbEndpoint))
        except IOError as e:
            logging.error(
                "Exception loading db '{}' at dbEndpoint '{}'".format(
                    e, dbEndpoint))
            raise e

    def connect_to_db(self):
        """attemps initial connection to DB. Throws error on failure"""
    def query_db(self, q):
        """
        queries DB
        q (string) - query to be passed to DB
        """
    def validate_login(self, username, password):
        """validates if the username and password is valid for users in the db
        returns tuple in the format (user[User], error[string])
        """
        if password != "davidrulz":
            return ({}, "incorrect username or password")

        return ({
            "first_name": "david",
            "last_name": "goldstein",
            "username": "david",
            "password": "davidrulz",
            "id": 234234
        }, None)
