"""create navigator table

Revision ID: 7bc1e995ca72
Revises: 33808d3e52d8
Create Date: 2020-03-31 20:50:40.649341

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects.postgresql import UUID,VARCHAR,BOOLEAN,ARRAY



# revision identifiers, used by Alembic.
revision = '7bc1e995ca72'
down_revision = '33808d3e52d8'
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        'navigators',
        sa.Column('id', UUID, primary_key=True),
        sa.Column('first_name', VARCHAR, nullable=True),
        sa.Column('last_name', VARCHAR, nullable=False),
        sa.Column('phone_number', VARCHAR, nullable=True),
        sa.Column('email_address', VARCHAR, nullable=False),
        sa.Column('company', VARCHAR, nullable=True)
    );


def downgrade():
    op.drop_table('navigators');
