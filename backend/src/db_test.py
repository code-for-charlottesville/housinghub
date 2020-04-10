import unittest
import db
import logging
import sqlalchemy
from models import User


class TestDBMethods(unittest.TestCase):
    host = "localhost"
    user = "dbuser"
    password = "password"
    port = 5432
    in_memory = True

    def setUp(self):
        logging.getLogger().setLevel(logging.ERROR)

    def test_connectToDb(self):
        d = db.DB(self.host, self.user, self.password, self.port,
                  self.in_memory)
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
            "first_name": "david-test_add",
            "last_name": "goldstein",
            "username": "david1",
            "email": "temp@gmail.com",
            "role": "navigator",
            "role_id": "TEMP_ROLE_ID",
            "username": "david",
            "password": "davidrulz",
        })
        err = d.add(user)
        self.assertIsNone(err)

        s = d.new_session()
        user_in_db = s.query(User).filter_by(username=user.username).one()
        self.assertEqual(user_in_db.username, user.username)

    def test_username_already_exists(self):
        d = db.DB(self.host, self.user, self.password, self.port,
                  self.in_memory)
        user = User({
            "first_name": "david-test_add",
            "last_name": "goldstein",
            "username": "david1",
            "email": "temp@gmail.com",
            "role": "navigator",
            "role_id": "TEMP_ROLE_ID",
            "username": "david",
            "password": "davidrulz",
        })
        err = d.add(user)
        self.assertIsNone(err)
        self.assertTrue(d.username_already_exists(user.username))
        self.assertFalse(
            d.username_already_exists("this is a username that doesnt exist"))
