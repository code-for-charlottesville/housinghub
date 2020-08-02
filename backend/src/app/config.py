import secrets
import time
import os


class Config(object):
    """ Base config. User local environment """
    PORT = 5000
    DATABASE_URL = 'postgresql+pygresql://app:apppassword@0.0.0.0:5432/housinghub'
    DB_CLUSTER_ARN = None
    DB_SECRET_ARN = None
    TOKEN_TTL = 10800
    TOKEN_ALG = 'HS256'
    TOKEN_SECRET = f"{secrets.token_hex(64)}-{time.time()}"
    ALLOWED_ORIGINS = ['http://localhost:8443']


class TiltConfig(Config):
    """ Tilt local development environment. User the postgres container as DB host """
    DATABASE_URL = 'postgresql+pygresql://app:apppassword@postgres:5432/housinghub'


class DevConfig(Config):
    """ Staging environment configuration. Currently not implemented yet """

    DATABASE_URL = 'postgresql+auroradataapi://:@/housinghubdev'
    DB_CLUSTER_ARN = os.getenv('DB_CLUSTER_ARN', None)
    DB_SECRET_ARN = os.getenv('DB_SECRET_ARN', None)
    # TODO Replace with KMS encrypted value
    TOKEN_SECRET = 'dcc6035c4a14b6f8442c3b652e1bbe78fddadeaead5863970db8b9f9d215b1ca33786c7ff63ebbbc771d9a3241be5db2925695b3ef609e96c8285f172de8a8d5-1591538082.640191'
    ALLOWED_ORIGINS = ['http://housinghub-client-dev.s3-website-us-east-1.amazonaws.com','https://dev.housinghub.codeforcharlottesvilleprojects.org']



class ProductionConfig(Config):
    """ Production environment configuration. Currently not implemented yet """

    DATABASE_URL = 'postgresql+auroradataapi://:@/housinghubprod'
    DB_CLUSTER_ARN = os.getenv('DB_CLUSTER_ARN', None)
    DB_SECRET_ARN = os.getenv('DB_SECRET_ARN', None)
    # TODO Replace with KMS encrypted value
    TOKEN_SECRET = None
    ALLOWED_ORIGINS = ['https://housinghub.codeforcharlottesvilleprojects.org']
