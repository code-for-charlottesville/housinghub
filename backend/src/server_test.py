import unittest
from HTMLParser import HTMLParser

from server import app
import shutil

MAX_INT = 999999999.0


class TestServer(unittest.TestCase):

    # executed prior to each test
    def setUp(self):
        app.config["GRAPH_SAVE_PATH"] = "../out/test1.graph"
        self.app = app.test_client()
        self.assertEqual(app.debug, False)

    def tearDown(self):
        shutil.copyfile("./out/test1-COPY.graph", "./out/test1.graph")

    def test_getInfo(self):
        response = self.app.get("/info")
        self.assertEqual(response.status_code, 200)
        info = response.get_json()
        for n in ['avgOutDegree', 'avgInDegree']:
            self.assertEqual(type(info[n]), float)
        for n in ['nNodes', 'nEdges']:
            self.assertEqual(type(info[n]), int)

    def test_getNeighbors(self):
        # get node that doesn't exist
        response = self.app.get("/neighbors?node=1234234")
        self.assertEqual(response.status_code, 404)
        self.assertEqual(
            response.get_json(), {
                u'code': 404,
                u'error': u"Node '1234234' was not found or does not exist"
            })
        # get normal node
        response = self.app.get("/neighbors?node=1")
        self.assertEqual(response.status_code, 200)
        self.assertGreater(len(response.get_json()), 0)
        self.assertEqual(type(response.get_json()[0]), unicode)

        response = self.app.get("/neighbors?node=1001")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.get_json()), 4)

        # does not get more than limit
        response = self.app.get("/neighbors?node=2&limit=2")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.get_json(), [u'152', u'603'])

    def test_addEdges(self):
        # try to add normal neighbor
        response = self.app.post("/edges?node=1001",
                                 json={"neighbors": [1002, 1003, 1004, 1006]})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.get_json(), {"neighborsAdded": []})

    def test_getShortestPath(self):
        # no end given
        response = self.app.get("/shortestPath?start=3&n=j2j2oj3")
        self.assertEqual(response.status_code, 422)
        self.assertEqual(
            response.get_json(), {
                u'code': 422,
                u'error': u"could not convert [u'j2j2oj3', 3000] to an integer"
            })
        # end node doesn't exist
        response = self.app.get("/shortestPath?start=3&end=350000")
        self.assertEqual(response.status_code, 500)
        self.assertEqual(
            response.get_json(), {
                u'code': 500,
                u'error': u'Target 350000 cannot be reachedfrom Source 3'
            })

        # normal path
        response = self.app.get("/shortestPath?start=0&end=918")
        self.assertEqual(response.get_json(), [[u'0', u'918']])
        self.assertEqual(response.status_code, 200)

        # nodes dont exist
        response = self.app.get("/shortestPath?start=23524234&end=324345")
        self.assertEqual(response.status_code, 500)
        expectedResponse = {
            u'code': 500,
            u'error': u'Source 23524234 not in G'
        }
        self.assertEqual(response.get_json(), expectedResponse)
        # parses args correctly
        response = self.app.get(
            "/shortestPath?start=0&end=918&n=5&directed=true")
        self.assertEqual(response.status_code, 200)

    def test_serve_docs(self):
        response = self.app.get('/', follow_redirects=True)
        self.assertEqual(response.status_code, 200)
        self.assertIsNotNone(response.data)
        HTMLParser().feed(response.data)

    def test_save_positive(self):
        """attempt to save when already exists"""
        response = self.app.get('/save', follow_redirects=True)
        self.assertEqual(response.status_code, 200)
        self.assertIsNotNone(response.data)

    def test_metrics(self):
        # assert that it redirects
        response = self.app.get('/metrics', follow_redirects=True)
        self.assertEqual(response.status_code, 200)
        # assert contains normal prom metrics
        self.assertTrue(
            "HELP python_info Python platform information" in response.data)
        # assert that contains mix in
        self.assertTrue("Number of nodes" in response.data)

    def test_centrality(self):
        # bad json
        response = self.app.post("/centrality", json={'test': 'test'})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(
            response.get_json(),
            {u'test': {
                u'error': u'node test was not found in graph'
            }})
        # get centrality for a bunch existing / non-existing edges
        response = self.app.post("/centrality", json=[9, 19, 30, 99999])
        self.assertEqual(response.status_code, 200)
        self.assertIsNotNone(response.get_json())

    def test_topn(self):
        # bad node
        response = self.app.get("/top?n=sdfdfsdsdfsdfsd")
        self.assertEqual(response.status_code, 422)
        # positive test
        response = self.app.get("/top?n=1")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.get_json()['pageRank']), 2)
