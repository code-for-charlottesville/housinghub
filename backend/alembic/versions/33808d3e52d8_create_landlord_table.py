"""create landlord table

Revision ID: 33808d3e52d8
Revises: f9d89609c0f0
Create Date: 2020-03-31 19:39:30.384240

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects.postgresql import UUID,VARCHAR,BOOLEAN,ARRAY


# revision identifiers, used by Alembic.
revision = '33808d3e52d8'
down_revision = 'f9d89609c0f0'
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        'landlords',
        sa.Column('id', UUID, primary_key=True),
        sa.Column('first_name', VARCHAR, nullable=True),
        sa.Column('last_name', VARCHAR, nullable=False),
        sa.Column('phone_number', VARCHAR, nullable=True),
        sa.Column('email_address', VARCHAR, nullable=False),
        sa.Column('company', VARCHAR, nullable=True),
        sa.Column('preferred_navigators', ARRAY(UUID))
    );


def downgrade():
    op.drop_table('landlords');
