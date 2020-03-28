import unittest
from server import app
import os
import jwt


class TestAuthHandlers(unittest.TestCase):

    # executed prior to each test
    def setUp(self):
        app.config['DB_ENDPOINT'] = "tcp://dynamodb"
        app.config['TOKEN_SECRET'] = "r4?89N;-Pe/mj)5!"
        app.config['TOKEN_EXP_SECONDS'] = "1000"
        self.app = app.test_client()
        self.assertEqual(app.debug, False)

    def test_login_user(self):
        # username is valid
        response = self.app.post("/auth/login",
                                 json={
                                     'username': 'david',
                                     'password': 'davidrulz'
                                 })
        self.assertEqual(response.status_code, 200)
        # assert able to decode jwt
        t = response.get_json().get("jwt")
        jwtDecoded = jwt.decode(t,
                                os.environ['TOKEN_SECRET'],
                                algorithms='HS256')
        self.assertEqual(jwtDecoded.get("uid"), 234234)
        self.assertEqual(jwtDecoded.get("name"), "david goldstein")
        # username is not valid
        response = self.app.post("/auth/login",
                                 json={
                                     'username': 'david',
                                     'password': 'davidrulz-bad-password'
                                 })
        self.assertEqual(response.status_code, 401)
        self.assertEqual(response.get_json(), {
            'code': 401,
            'error': "incorrect username or password"
        })
