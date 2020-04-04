import app

from sqlalchemy.orm import sessionmaker
from datetime import datetime, timezone, timedelta
from jwt import encode, decode, ExpiredSignatureError, exceptions as jwtExceptions
from passlib.hash import pbkdf2_sha256


from models.user import User

class AuthService:

  def __init__(self,logger,database_engine,token_secret,token_alg,token_ttl):
    super().__init__()
    Session = sessionmaker(bind=database_engine)
    self.logger = logger
    self.session = Session()
    self.token_secret = token_secret
    self.token_alg = token_alg
    self.token_ttl = token_ttl

  def decode_jwt(self,jwt):
    """decodes jwt
    :param jwt: string, utf-8 representation of jwt
    :return: tuple of (payload(dict), error(string))
    """
    t = None
    err = None
    try:
        t = decode(jwt,
                   self.token_secret,
                   algorithms=[self.token_alg])
    except ExpiredSignatureError:
        err = "token has expired"
    except jwtExceptions.DecodeError:
        err = "token is invalid"
    return (t, err)

  def encode_jwt(self,user):
    """encodes JWT
    :param user: string takes user class.User as argument
    :return: encoded jwt as string
    """
    future_time = datetime.now(
        timezone.utc) + timedelta(seconds = self.token_ttl)
    raw_bytes = encode(
        {
            'exp': future_time,
            'uuid': user.id
        },
        self.token_secret,
        algorithm = self.token_alg)
    return str(raw_bytes, 'utf-8')

  def validate_login(self,username,password):
    """validates if the username and password is valid for users in the db
    :param username: (string) username to validate
    :param password: (string) password to validate
    :return tuple: in the format (user[User], error[string])
    """
    _user = self.session.query(User).filter(User.username==username).one_or_none()
    if _user and pbkdf2_sha256.verify(password,_user.password_hash):
      return _user
    else:
      return None

  def authenticate_request(self,request):
    """extracts jwt token from flask request object, then decodes JWT
    :param request: flask request object
    :return: tuple (jwt(string), err(string))
    """
    auth_header = request.headers.get('Authorization')
    if auth_header is None:
        return (None, "Authorization header not found in request")
    # get bearer
    spl = auth_header.split(" ")
    if len(spl) != 2:
        return (
            None,
            "Token header must be in form: 'Authorization: Bearer $JWT_TOKEN but was: '{}'"
            .format(auth_header))
    return app.services.auth_service().decode_jwt(spl[1])