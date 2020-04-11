import unittest
import uuid
from unittest.mock import patch
from models.user import User
import app
import services
import services.auth

class TestAuthHandlers(unittest.TestCase):

    # executed prior to each test
    def setUp(self):
        self.server = app.flask_app.test_client()

    def tearDown(self):
        return super().tearDown()

    @patch('services.container.AuthService')
    def test_login_success(self,MockAuthService):   
        mock_auth = MockAuthService.return_value
        mock_auth.validate_login.return_value = User(id=uuid.uuid4,username='user',password_hash='pass',role='role',role_id='role_id',is_admin=False)
        mock_auth.encode_jwt.return_value = 'jwt-token'
        # call with valid credentials
        response = self.server.post("/auth/login",
                                 json={
                                     'username': 'david',
                                     'password': 'davidrulz'
                                 })
        self.assertEqual(response.status_code, 200)
        mock_auth.validate_login.assert_called_once_with('david','davidrulz')
        
        # validate response structure
        t = response.get_json().get("jwt")
        self.assertEqual(t, 'jwt-token')
        
    
    @patch('services.container.AuthService')
    def test_login_fail(self,MockAuthService): 
        mock_auth = MockAuthService.return_value
        mock_auth.encode_jwt.return_value = 'jwt-token'
        mock_auth.validate_login.return_value = None
        # call with invalid credentials
        response = self.server.post("/auth/login",
                                 json={
                                     'username': 'david',
                                     'password': 'davidrulz-bad-password'
                                 })
        mock_auth.validate_login.assert_called_once_with('david','davidrulz-bad-password')
        self.assertEqual(response.status_code, 401)
        self.assertEqual(response.get_json(), {
            'code': 401,
            'error': "Login invalid"
        })

    # def test_status(self):
    #     # create new user
    #     user = User({
    #         "first_name": "david",
    #         "last_name": "goldstein",
    #         "user_name": "david1",
    #         "email": "temp@gmail.com",
    #         "username": "david",
    #         "password": "davidrulz",
    #     })
    #     jwt = encodeJWT(user)
    #     response = self.app.get("/auth/status",
    #                             headers=dict(Authorization='Bearer ' + jwt))

    #     self.assertEqual(response.get_json().get("error"), None)
    #     self.assertEqual(response.status_code, 200)
    #     # Auth header does not exist
    #     response = self.app.get("/auth/status",
    #                             headers=dict(XXXXX='Bearer ' + jwt))
    #     self.assertEqual(response.status_code, 401)
    #     # Auth header not in right format
    #     response = self.app.get("/auth/status",
    #                             headers=dict(Authorization='Bearer XXX xXX' +
    #                                          jwt))
    #     self.assertEqual(response.status_code, 401)
    #     # invalid jwt
    #     response = self.app.get(
    #         "/auth/status",
    #         headers=dict(Authorization='Bearer f2039fj20398fsohdfohjisdef'))
    #     self.assertEqual(response.status_code, 401)
    #     # Token has expired
    #     pastTime = datetime.now(timezone.utc) - timedelta(seconds=100)
    #     print(pastTime)
    #     rawBytes = encode(
    #         {
    #             'exp': pastTime,
    #             'uid': user.uid,
    #             "name": "{} {}".format(user.first_name, user.last_name)
    #         },
    #         tokenSecret,
    #         algorithm=tokenEncryptAlg)
    #     jwt = str(rawBytes, 'utf-8')
    #     response = self.app.get("/auth/status",
    #                             headers=dict(Authorization='Bearer ' + jwt))
    #     self.assertEqual(response.status_code, 401)
