"""create property table

Revision ID: c3746fe5988c
Revises: 7bc1e995ca72
Create Date: 2020-04-14 19:11:39.275524

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects.postgresql import UUID, VARCHAR, BOOLEAN, ARRAY, INTEGER, DATE, FLOAT

# revision identifiers, used by Alembic.
revision = 'c3746fe5988c'
down_revision = '7bc1e995ca72'
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        'property',
        sa.Column('id', UUID, primary_key=True),
        sa.Column('landlord_id', UUID, nullable=True),
        sa.Column('navigator_id', UUID, nullable=True),
        sa.Column('voucher_type_accepted', ARRAY(VARCHAR)),
        sa.Column('voucher_type_not_accepted', ARRAY(VARCHAR)),
        sa.Column('address', VARCHAR, nullable=False),
        sa.Column('zip_code', VARCHAR, nullable=False), 
        sa.Column('unit_apt_no', VARCHAR, nullable=True),
        sa.Column('property_name', VARCHAR, nullable=True),
        sa.Column('bus_line', BOOLEAN, nullable=True),
        sa.Column('school_district = ', VARCHAR, nullable=True),
        sa.Column('wheelchair_accessibility', BOOLEAN, nullable=True), 
        sa.Column('elevator', BOOLEAN, nullable=True),
        sa.Column('monthly_rent', INTEGER, nullable=True),
        sa.Column('contact_method', ARRAY(VARCHAR)),
        sa.Column('is_available', BOOLEAN, nullable=False), 
        sa.Column('date_first_available', DATE, nullable=True),
        sa.Column('last_contact_date', DATE, nullable=True),
        sa.Column('potential_month_available', INTEGER, nullable=True),
        sa.Column('bedrooms', INTEGER, nullable=False),
        sa.Column('bathrooms', INTEGER, nullable=False),
        sa.Column('shared_bathrooms', INTEGER, nullable=True),
        sa.Column('has_basement', BOOLEAN, nullable=True), 
        sa.Column('application_fee', FLOAT, nullable=True),
        sa.Column('deposit', FLOAT, nullable=True),
        sa.Column('last_month_rent_required', BOOLEAN, nullable=True), 
        sa.Column('allow_criminal_records', BOOLEAN, nullable=True),
        sa.Column('listing_date', DATE, nullable=False), 
        sa.Column('where_listed', ARRAY(VARCHAR)),
        sa.Column('floor', INTEGER, nullable=True), 
        sa.Column('housing_type', VARCHAR, nullable=True), 
        sa.Column('year_available', INTEGER, nullable=True), 
        sa.Column('credit_screening_company', VARCHAR, nullable=True),
        sa.Column('background_screening_company', VARCHAR, nullable=True),
        sa.Column('last_contacted_by', UUID, nullable=True)
    );



def downgrade():
    op.drop_table('property')
