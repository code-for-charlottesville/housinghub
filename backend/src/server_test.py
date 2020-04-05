import unittest
from server import app
from auth_handlers import encodeJWT
from models import User


class TestServer(unittest.TestCase):

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
    jwt = encodeJWT(user)
    authHeaders = dict(Authorization='Bearer ' + jwt)

    # executed prior to each test
    def setUp(self):
        app.config['DB_ENDPOINT'] = "tcp://dynamodb"
        app.config['TOKEN_EXP_SECONDS'] = "1000"
        self.app = app.test_client()

    def test_serve_docs(self):
        response = self.app.get('/',
                                follow_redirects=True,
                                headers=self.authHeaders)
        self.assertEqual(response.status_code, 200)
        self.assertIsNotNone(response.data)
