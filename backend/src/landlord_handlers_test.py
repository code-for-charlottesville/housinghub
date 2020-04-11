import unittest
from unittest.mock import patch
from test import test_user

import app


class TestLandlordHandlers(unittest.TestCase):

    # executed prior to each test
    def setUp(self):
        self.auth_service_patch = patch('services.container.AuthService',
                                        spec=True)
        mock_auth_service = self.auth_service_patch.start()
        instance = mock_auth_service.return_value
        instance.authenticate_request.return_value = (test_user, None)
        self.app = app.flask_app.test_client()

    def tearDown(self):
        self.auth_service_patch.stop()

    def test_get_landlord(self):
        response = self.app.get("/landlord?id=test")
        self.assertEqual(response.status_code, 500)
        self.assertEqual(response.get_json(), {
            'code': 500,
            'error': 'not implemented'
        })

    def test_post_landlord(self):
        response = self.app.post("/landlord", json={'name': 'test'})
        self.assertEqual(response.status_code, 500)
        self.assertEqual(response.get_json(), {
            'code': 500,
            'error': 'not implemented'
        })

    def test_put_landlord(self):
        response = self.app.put("/landlord?td=test", json={'name': 'test'})
        self.assertEqual(response.status_code, 500)
        self.assertEqual(response.get_json(), {
            'code': 500,
            'error': 'not implemented'
        })

    def test_delete_landlord(self):
        response = self.app.delete("/landlord?td=test")
        self.assertEqual(response.status_code, 500)
        self.assertEqual(response.get_json(), {
            'code': 500,
            'error': 'not implemented'
        })
