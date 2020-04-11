import uuid
from passlib.hash import pbkdf2_sha256

from models import User

test_user = User(id=uuid.uuid4,username='test@test.com',password_hash=pbkdf2_sha256.hash('password'),role='navigator',role_id='ROLE_ID',is_admin=False)