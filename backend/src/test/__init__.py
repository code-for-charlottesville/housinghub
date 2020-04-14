import uuid
from passlib.hash import pbkdf2_sha256
from models import User

from faker import Faker

fake = Faker()
Faker.seed(0)

test_user = User(id=uuid.uuid4(),username='test@test.com',password_hash=pbkdf2_sha256.hash('password'),role='navigator',role_id='ROLE_ID',is_admin=False)

def generate_user(password='password', role='navigator', role_id=uuid.uuid4(), is_admin=False):
  return User(
    id=uuid.uuid4(),
    username = fake.email(),
    password_hash = pbkdf2_sha256.hash(password),
    role = role,
    role_id = role_id,
    is_admin = is_admin
  )