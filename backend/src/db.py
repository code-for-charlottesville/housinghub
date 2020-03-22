import logging


class DB:
    """class which interfaces a dynamo DB"""
    def __init__(self, dbEndpoint):
        """attempts to connect to db, throws exception on error"""
        self.dbEndpoint = dbEndpoint
        # long-compute time values can be saved in class
        try:
            self.connectToDb()
            logging.debug("Loaded db '{}' successfully".format(dbEndpoint))
        except IOError as e:
            logging.error(
                "Exception loading db '{}' at dbEndpoint '{}'".format(
                    e, dbEndpoint))
            raise e

    def connectToDb(self):
        """attemps initial connection to DB. Throws error on failure"""
    def queryDb(self, q):
        """
        queries DB
        q (string) - query to be passed to DB
        """
