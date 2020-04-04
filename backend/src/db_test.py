import unittest
import db
import logging
import sqlalchemy
from user import User


class TestDBMethods(unittest.TestCase):
    host = "localhost"
    user = "dbuser"
    password = "password"
    port = 5432
    in_memory = True

    def setUp(self):
        logging.getLogger().setLevel(logging.ERROR)

    def test_connectToDb(self):
        db.DB(self.host, self.user, self.password, self.port, self.in_memory)
        with self.assertRaises(sqlalchemy.exc.InternalError):
            db.DB(self.host,
                  self.user,
                  self.password,
                  self.port,
                  in_memory=False)

    def test_add(self):
        d = db.DB(self.host, self.user, self.password, self.port,
                  self.in_memory)

        user = User({
            "first_name": "david",
            "last_name": "goldstein",
            "user_name": "david1",
            "email": "temp@gmail.com",
            "role": "navigator",
            "role_id": "TEMP_ROLE_ID",
            "username": "david",
            "password": "davidrulz",
        })
        err = d.add("users", user)
        self.assertIsNone(err)