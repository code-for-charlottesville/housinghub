"""create navigator table

Revision ID: 7bc1e995ca72
Revises: 33808d3e52d8
Create Date: 2020-03-31 20:50:40.649341

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects.postgresql import UUID,VARCHAR,BOOLEAN



# revision identifiers, used by Alembic.
revision = '7bc1e995ca72'
down_revision = '33808d3e52d8'
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        'navigators',
        sa.Column('id', UUID, primary_key=True),
        sa.Column('username', VARCHAR, unique=True),
        sa.Column('password_hash', VARCHAR, nullable=False),
        sa.Column('salt', VARCHAR, nullable=False),
        sa.Column('role', VARCHAR, nullable=False),
        sa.Column('role_id', UUID, nullable=False),
        sa.Column('is_admin', BOOLEAN, default=False, nullable=False)
    );


def downgrade():
    op.drop_table('navigators');
