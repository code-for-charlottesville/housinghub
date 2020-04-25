import logging
import test
import unittest
import uuid
from unittest.mock import Mock, sentinel

from jwt import decode, encode

from services.auth import AuthService

logger = logging.getLogger('TestAuthService')
logger.setLevel(logging.DEBUG)  

class TestAuthService(unittest.TestCase):

  def setUp(self):
    self.session_mock = Mock()
    self.token_secret = 'secret'
    self.alg = 'HS256'
    self.ttl = 3600
    self.test_instance =  AuthService(logger,self.session_mock,self.token_secret,self.alg,self.ttl)

  def test_decode_jwt(self):
    # Happy path
    _user = test.generate_user()
    test_jwt = self.test_instance.encode_jwt(_user)

    decoded_jwt, err = self.test_instance.decode_jwt(test_jwt)

    self.assertEqual(decoded_jwt['uid'],str(_user.id))
    self.assertEqual(decoded_jwt['role'],_user.role)

    # Invalid jwt
    decoded_jwt, err = self.test_instance.decode_jwt('not-a-valid-jwt')
    self.assertIsNone(decoded_jwt)
    self.assertIsNotNone(err)

  def test_encode_jwt(self):
    # Happy path
    _user = test.generate_user()
    jwt = self.test_instance.encode_jwt(_user)

    decoded_jwt, err = self.test_instance.decode_jwt(jwt)
    self.assertIsNone(err)
    self.assertEqual(decoded_jwt['uid'],str(_user.id))
    self.assertEqual(decoded_jwt['role'],_user.role)


    # Invalid arg should return None
    result = self.test_instance.encode_jwt('not a user object')
    self.assertIsNone(result)

  def test_validate_login(self):
    # Happy path
    _user = test.generate_user(password='my-password')
    self.session_mock.return_value.query.return_value.filter.return_value.one_or_none.return_value = _user
    result = self.test_instance.validate_login(_user.username,'my-password')
    self.assertIsNotNone(result)
    self.assertEqual(result.id,_user.id)

    # Invalid password
    self.session_mock.return_value.query.return_value.filter.return_value.one_or_none.return_value = _user
    result = self.test_instance.validate_login(_user.username,'wrong-password')
    self.assertIsNone(result)

    # User does not exist
    self.session_mock.return_value.query.return_value.filter.return_value.one_or_none.return_value = None
    result = self.test_instance.validate_login(_user.username,'wrong-password')
    self.assertIsNone(result)

  def test_authenticate_request(self):
    request_mock = Mock()
    _user = test.generate_user()
    valid_token = self.test_instance.encode_jwt(_user)

    # Happy path
    request_mock.headers.get.return_value = 'Bearer ' + valid_token
    jwt_payload, err = self.test_instance.authenticate_request(request_mock)
    request_mock.headers.get.assert_called_with('Authorization')

    self.assertIsNone(err)
    self.assertEqual(jwt_payload['uid'], str(_user.id))
    self.assertEqual(jwt_payload['role'], _user.role)

    # Invalid bearer token
    request_mock.headers.get.return_value = 'Bearer ' + 'invlid-token'
    jwt_payload, err = self.test_instance.authenticate_request(request_mock)
    request_mock.headers.get.assert_called_with('Authorization')

    self.assertIsNone(jwt_payload)
    self.assertIsNotNone(err)

    # Missing auth header
    request_mock.headers.get.return_value = None
    jwt_payload, err = self.test_instance.authenticate_request(request_mock)
    request_mock.headers.get.assert_called_with('Authorization')

    self.assertIsNone(jwt_payload)
    self.assertIsNotNone(err)

