from functools import wraps

from flask import g, jsonify, request

import app


def authenticate(f):
  @wraps(f)
  def decorated_function(*args, **kwargs):
    auth_service = app.services.auth_service()
    (user, err) = auth_service.authenticate_request(request)
    if user:
      g.user_id = user["uid"]
      g.user_role = user["role"]
      return f(*args,**kwargs)
    else:
      app.logger.error(f'Request not authenticated for ${request.url}')
      return jsonify(code=401,error=err), 401
  return decorated_function
