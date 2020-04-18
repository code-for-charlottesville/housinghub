from uuid import uuid4

from faker import Faker
from passlib.hash import pbkdf2_sha256

from models import User

examples = Faker()
Faker.seed(0)


def generate_user(password='password', role='navigator', role_id=uuid4(), is_admin=False):
  return User(
    id=uuid4(),
    username = examples.email(),
    password_hash = pbkdf2_sha256.hash(password),
    role = role,
    role_id = role_id,
    is_admin = is_admin
  )
