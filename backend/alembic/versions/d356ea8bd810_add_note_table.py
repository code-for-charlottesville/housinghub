"""Add Note table


Revision ID: d356ea8bd810
Revises: c3746fe5988c
Create Date: 2020-05-16 20:44:22.010771

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects.postgresql import UUID, VARCHAR, BOOLEAN, INTEGER, TIMESTAMP

# revision identifiers, used by Alembic.
revision = 'd356ea8bd810'
down_revision = 'c3746fe5988c'
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        'note',
        sa.Column('id', UUID, primary_key=True),
        sa.Column('entity_type', VARCHAR, nullable=False),
        sa.Column('entity_id', UUID, nullable=False),
        sa.Column('created_by', UUID, nullable=False),
        sa.Column('private', BOOLEAN, nullable=False),
        sa.Column('created_at', TIMESTAMP, nullable=False),
    );


def downgrade():
    op.drop_table('note')
