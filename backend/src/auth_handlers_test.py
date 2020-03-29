import unittest
from server import app, tokenSecret, tokenEncryptAlg
import jwt
from user import User
from auth_handlers import encodeJWT
from datetime import datetime, timezone, timedelta
from jwt import encode
import server


class TestAuthHandlers(unittest.TestCase):

    # executed prior to each test
    def setUp(self):
        app.config['DB_ENDPOINT'] = "tcp://dynamodb"
        app.config['TOKEN_EXP_SECONDS'] = "1000"
        self.app = app.test_client()
        self.assertEqual(app.debug, False)

    def test_login(self):
        # username is valid
        response = self.app.post("/auth/login",
                                 json={
                                     'username': 'david',
                                     'password': 'davidrulz'
                                 })
        self.assertEqual(response.status_code, 200)
        # assert able to decode jwt
        t = response.get_json().get("jwt")
        jwtDecoded = jwt.decode(t, server.tokenSecret, algorithms='HS256')
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

    def test_status(self):
        # create new user
        user = User({
            "first_name": "david",
            "last_name": "goldstein",
            "user_name": "david1",
            "email": "temp@gmail.com",
            "username": "david",
            "password": "davidrulz",
        })
        jwt = encodeJWT(user)
        response = self.app.get("/auth/status",
                                headers=dict(Authorization='Bearer ' + jwt))

        self.assertEqual(response.get_json().get("error"), None)
        self.assertEqual(response.status_code, 200)
        # Auth header does not exist
        response = self.app.get("/auth/status",
                                headers=dict(XXXXX='Bearer ' + jwt))
        self.assertEqual(response.status_code, 401)
        # Auth header not in right format
        response = self.app.get("/auth/status",
                                headers=dict(Authorization='Bearer XXX xXX' +
                                             jwt))
        self.assertEqual(response.status_code, 401)
        # invalid jwt
        response = self.app.get(
            "/auth/status",
            headers=dict(Authorization='Bearer f2039fj20398fsohdfohjisdef'))
        self.assertEqual(response.status_code, 401)
        # Token has expired
        pastTime = datetime.now(timezone.utc) - timedelta(seconds=100)
        print(pastTime)
        rawBytes = encode(
            {
                'exp': pastTime,
                'uid': user.uid,
                "name": "{} {}".format(user.first_name, user.last_name)
            },
            tokenSecret,
            algorithm=tokenEncryptAlg)
        jwt = str(rawBytes, 'utf-8')
        response = self.app.get("/auth/status",
                                headers=dict(Authorization='Bearer ' + jwt))
        self.assertEqual(response.status_code, 401)
