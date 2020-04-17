import re
from marshmallow import Schema, fields, validates, ValidationError, pprint
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema

from models.user import User
from models.property import Property

from app.spec import housinghub_spec

email_regex = '^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'

class RegisterRequest(Schema):
  user_name = fields.String(requried=True)
  password = fields.String(required=True)
  role = fields.String(required=True)
  is_admin = fields.Bool(required=True)

  @validates("user_name")
  def validate_username(self,value):
      if not re.search(email_regex,value):
          raise ValidationError('Username must be a valid email address')

  @validates("password")
  def validate_password(self,value):
      if len(value) < 6:
          raise ValidationError('Password must be at least 6 characters')
housinghub_spec.components.schema("RegisterRequest", schema=RegisterRequest)

class AuthResponse(Schema):
  jwt = fields.String()
housinghub_spec.components.schema("AuthResponse", schema=AuthResponse)

class ErrorResponse(Schema):
  message = fields.String()
housinghub_spec.components.schema("ErrorResponse", schema=ErrorResponse)


class LoginRequest(Schema):
  username = fields.String(required=True)
  password = fields.String(required=True)
housinghub_spec.components.schema("LoginRequest", schema=LoginRequest)

class AddPropertyRequest(SQLAlchemyAutoSchema):
  class Meta:
    model = Property
    load_instance = False
    exclude = ('id',)
housinghub_spec.components.schema("AddPropertyRequest", schema=AddPropertyRequest)

class PropertyResponse(SQLAlchemyAutoSchema):
  class Meta:
    model = Property
    load_instance = False
housinghub_spec.components.schema("PropertyResponse", schema=PropertyResponse)

