import unittest
from models import User
from server import app


class TestUser(unittest.TestCase):
    def test_create_new_user(self):
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
        u = User(tempUserConfig)
        self.assertIsNotNone(u.id)
        self.assertIsNotNone(u.registered_on)
        # assert key error when field does not exist
        with self.assertRaises(KeyError):
            User({})
