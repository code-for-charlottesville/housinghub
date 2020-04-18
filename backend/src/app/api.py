from marshmallow import Schema, ValidationError, fields, pprint, validates
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema

from app.spec import housinghub_spec
from models import Property, User


class RegisterRequest(Schema):
  username = fields.Email(required=True)
  password = fields.String(required=True)
  role = fields.String(required=True)
  is_admin = fields.Bool(required=True)

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
