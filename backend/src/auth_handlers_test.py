import unittest
import uuid
from unittest.mock import patch
from models.user import User
import app
import services
import services.auth
from datetime import datetime

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

    @patch('services.container.AuthService')
    def test_status(self,MockAuthService):
        user_id = str(uuid.uuid4())
        mock_jwt_payload = {
            'exp': datetime.now(),
            'uid': user_id,
            'role': 'navigator'
        }

        # Auth success
        mock_auth = MockAuthService.return_value
        mock_auth.authenticate_request.return_value = (mock_jwt_payload, None)
        
        response = self.server.get("/auth/status")
        

        self.assertEqual(response.get_json().get("error"), None)
        self.assertEqual(response.get_json().get("uid"), user_id)
        self.assertEqual(response.get_json().get("role"), 'navigator')
        self.assertEqual(response.status_code, 200)
        
        # Auth fail
        mock_auth = MockAuthService.return_value
        mock_auth.authenticate_request.return_value = (None, 'some error')
        
        response = self.server.get("/auth/status")
        

        self.assertEqual(response.get_json().get("error"), 'Not logged in')
        self.assertEqual(response.status_code, 401)
