import secrets 
import time

class Config(object):
  """ Base config. User local environment """
  PORT = 5000
  DATABASE_URL = 'postgresql+pygresql://app:apppassword@0.0.0.0:5432/housinghub'
  TOKEN_TTL = 10800
  TOKEN_ALG = 'HS256'
  TOKEN_SECRET = f"{secrets.token_hex(64)}-{time.time()}"

class TiltConfig(Config):
  """ Tilt local development environment. User the postgres container as DB host """
  DATABASE_URL = 'postgresql+pygresql://app:apppassword@postgres:5432/housinghub'

class StagingConfig(Config):
  """ Staging environment configuration. Currently not implemented yet """
  
  DATABASE_URL = None

class ProductionConfig(Config):
  """ Production environment configuration. Currently not implemented yet """
  
  DATABASE_URL = None