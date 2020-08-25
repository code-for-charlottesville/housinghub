from marshmallow import Schema, ValidationError, fields, pprint, validates
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema

from app.spec import housinghub_spec
from models import Property, User, Note


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
  code = fields.Integer()
  error = fields.String()
housinghub_spec.components.schema("ErrorResponse", schema=ErrorResponse)


class LoginRequest(Schema):
  username = fields.String(required=True)
  password = fields.String(required=True)
housinghub_spec.components.schema("LoginRequest", schema=LoginRequest)

class AddPropertyRequest(SQLAlchemyAutoSchema):
  class Meta:
    model = Property
    load_instance = True
    exclude = ('id',)
housinghub_spec.components.schema("AddPropertyRequest", schema=AddPropertyRequest)

class PropertyResponse(SQLAlchemyAutoSchema):
  class Meta:
    model = Property
    load_instance = True
housinghub_spec.components.schema("PropertyResponse", schema=PropertyResponse)


class SearchCriteria(Schema):
  zip_code = fields.List(fields.String)
  max_rent = fields.Integer(required=False)
  bedrooms = fields.Integer(required=False)
  bathrooms = fields.Integer(required=False)
  date_available = fields.Date(required=False)
  housing_type = fields.List(fields.String)
  bus_line = fields.Boolean(required=False)
  pets_allowed = fields.Boolean(required=False)
  wheelchair_accessibility = fields.Boolean(required=False)
  background_check_required = fields.Boolean(required=False)

class Pagination(Schema):
  results_per_page = fields.Integer(required=True)
  page = fields.Integer(required=True)

class GetPropertyRequest(Schema):
  pagination = fields.Nested(Pagination)
  searchFields = fields.Nested(SearchCriteria)
housinghub_spec.components.schema("GetPropertyRequest", schema=GetPropertyRequest)

class PaginationResponse(Schema):
  results_per_page = fields.Integer(required=True)
  page = fields.Integer(required=True)
  totalNumberOfResults = fields.Integer(required=True)

class PropertySchema(SQLAlchemyAutoSchema):
  class Meta:
    model = Property
    load_instance = True

class GetPropertyResponse(Schema):
  results = fields.List(fields.Nested(PropertySchema))
  pagination = fields.Nested(PaginationResponse)
housinghub_spec.components.schema("GetPropertyResponse", schema=GetPropertyResponse)

class NoteSchema(SQLAlchemyAutoSchema):
  class Meta:
    model = Note
    load_instance = True

class AddNoteRequest(SQLAlchemyAutoSchema):
  class Meta:
    model = Note
    load_instance = True
    exclude = ('id', 'created_at', 'created_by', )
housinghub_spec.components.schema("AddNoteRequest", schema=AddNoteRequest)

class NoteResponse(SQLAlchemyAutoSchema):
    class Meta:
      model = Note
      load_instance = True
housinghub_spec.components.schema("NoteResponse", schema=NoteResponse)

class UpdatePropertyRequest(SQLAlchemyAutoSchema):
  class Meta:
    model = Property
    load_instance = True
housinghub_spec.components.schema("UpdatePropertyRequest", schema=UpdatePropertyRequest)

class UpdatePropertyResponse(SQLAlchemyAutoSchema):
  class Meta:
    model = Property
    load_instance = True
housinghub_spec.components.schema("UpdatePropertyResponse", schema=UpdatePropertyResponse)


class DeletePropertyResponse(SQLAlchemyAutoSchema):
  class Meta:
    model = Property
    load_instance = True
housinghub_spec.components.schema("DeletePropertyResponse", schema=DeletePropertyResponse)