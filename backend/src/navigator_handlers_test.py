import unittest
from unittest.mock import patch
from test import test_user

import app




class TestNavigatorHandlers(unittest.TestCase):

    # executed prior to each test
    def setUp(self):
        self.auth_service_patch = patch('services.container.AuthService', spec=True)
        mock_auth_service = self.auth_service_patch.start()
        instance = mock_auth_service.return_value
        instance.authenticate_request.return_value = (test_user,None)
        self.app = app.flask_app.test_client()

    def tearDown(self):
        self.auth_service_patch.stop()

    def test_get_navigator(self):
        response = self.app.get("/navigator?id=test")
        self.assertEqual(response.status_code, 500)
        self.assertEqual(response.get_json(), {
            'code': 500,
            'error': 'not implemented'
        })

    def test_post_navigator(self):
        response = self.app.post("/navigator",
                                 json={'name': 'test'})
        self.assertEqual(response.status_code, 500)
        self.assertEqual(response.get_json(), {
            'code': 500,
            'error': 'not implemented'
        })

    def test_put_navigator(self):
        response = self.app.put("/navigator?id=test",
                                json={'name': 'test'})
        self.assertEqual(response.status_code, 500)
        self.assertEqual(response.get_json(), {
            'code': 500,
            'error': 'not implemented'
        })

    def test_delete_navigator(self):
        response = self.app.delete("/navigator?id=test")
        self.assertEqual(response.status_code, 500)
        self.assertEqual(response.get_json(), {
            'code': 500,
            'error': 'not implemented'
        })
