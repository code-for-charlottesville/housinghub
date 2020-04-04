import logging
from user import User
import sqlalchemy
from sqlalchemy.orm import sessionmaker


class DB:
    """class which interfaces a dynamo DB"""
    def __init__(self, host, user, password, port=5432, in_memory=False):
        """attempts to connect to db, throws exception on error"""
        self.db_url = "postgresql+pygresql://{}:{}@{}:{}/housinghub".format(
            user, password, host, int(port))
        self.in_memory = in_memory
        self.connect_to_db()

    def load_tables(self):
        pass

    def connect_to_db(self):
        """attemps initial connection to DB. Throws error on failure"""
        logging.debug("connecting to DB: {}".format(self.db_url))
        try:
            # if in memory, use sql lite in-memory DB
            if self.in_memory:
                self.engine = sqlalchemy.create_engine('sqlite:///:memory:',
                                                       echo=True)
            else:
                self.engine = sqlalchemy.create_engine(self.db_url)
            self.engine.connect()
            self.Session = sessionmaker(bind=self.engine)
            metadata = sqlalchemy.MetaData()
            logging.debug(
                "Loaded db '{}' successfully with metadata: {}".format(
                    self.db_url, metadata))
            print(metadata)
        except sqlalchemy.exc.InternalError as e:
            logging.error("Exception loading db '{}' at url '{}'".format(
                e, self.db_url))
            raise e

    def add(self, tableName, obj):
        """
        adds an object to the db
        :param: string name of table to add object to
        :param: dictionary object to add
        :return: string error
        """
        session = self.Session()
        try:
            session.add(obj)
        except sqlalchemy.orm.exc.UnmappedInstanceError as e:
            logging.error(e)
            return "table {} does not exist".format(tableName)

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
