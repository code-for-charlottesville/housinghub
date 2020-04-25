import logging
import unittest
from unittest.mock import Mock

from passlib.hash import pbkdf2_sha256

from services.user import UserService

logger = logging.getLogger('TestUserService')
logger.setLevel(logging.DEBUG)

class TestUserService(unittest.TestCase):

  def setUp(self):
    self.session_mock = Mock()
    self.test_instance =  UserService(logger,self.session_mock)

  def test_add_user(self):
    self.test_instance.add_user('username','password','role',False)
    self.session_mock.return_value.add.assert_called_once
