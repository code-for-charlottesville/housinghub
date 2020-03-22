import unittest
import graph
import server
import handlers


class TestHandlers(unittest.TestCase):
    def test_validateInts(self):
        testTable = [{
            'name':
            'is not an array',
            'n':
            2093,
            'expectedError':
            'internal error: 2093 is not of type "list"',
        }, {
            'name':
            'greater than MAX_INT',
            'n': [server.MAX_INT + 1],
            'expectedError':
            '1000000000 is not in range 0 - 999999999.0',
        }, {
            'name': 'less than 0',
            'n': [-1],
            'expectedError': '-1 is not in range 0 - 999999999.0',
        }, {
            'name': 'is None',
            'n': [None],
            'expectedError': 'could not convert [None] to an integer',
        }, {
            'name':
            'is an unparseable strings',
            'n': ["23fjf2=j`sdf"],
            'expectedError':
            "could not convert ['23fjf2=j`sdf'] to an integer",
        }, {
            'name': 'is valid string int',
            'n': ["23423"],
            'expectedInts': [23423],
        }, {
            'name': 'is valid int',
            'n': [23423],
            'expectedInts': [23423]
        }]

        for t in testTable:
            print(t.get('name'))
            r = handlers.validateInts(t.get('n'))
            print(r)
            self.assertEqual(r.get('error'), t.get('expectedError'))
            self.assertEqual(r.get('validInts'), t.get('expectedInts'))
