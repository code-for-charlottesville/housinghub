import app

from flask import jsonify, g, request
from functools import wraps


def authenticate(f):
  @wraps(f)
  def decorated_function(*args, **kwargs):
    app.logger.error("Decorating function")
    auth_service = app.services.auth_service()
    (user, err) = auth_service.authenticate_request(request)
    if user:
      return f(*args,**kwargs)
    else:
      app.logger.error(f'Request not authenticated for ${request.url}')
      return jsonify(code=401,error=err), 401
  return decorated_function