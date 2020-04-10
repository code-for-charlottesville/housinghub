"""create user table

Revision ID: f9d89609c0f0
Revises: 
Create Date: 2020-03-31 17:34:23.684398

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects.postgresql import UUID,VARCHAR,BOOLEAN


# revision identifiers, used by Alembic.
revision = 'f9d89609c0f0'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        'users',
        sa.Column('id', VARCHAR, primary_key=True),
        sa.Column('username', VARCHAR, unique=True, nullable=False),
        sa.Column('password_hash', VARCHAR, nullable=False),
        sa.Column('role', VARCHAR, nullable=False),
        sa.Column('role_id', VARCHAR, nullable=True),
        sa.Column('is_admin', BOOLEAN, default=False, nullable=False)
    );


def downgrade():
    op.drop_table('users');
