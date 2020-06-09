import os
# from logging.config import fileConfig

# from sqlalchemy import engine_from_config
from sqlalchemy import create_engine
# from sqlalchemy import pool

import logging

from alembic import context

logging.basicConfig()

log = logging.getLogger('db-migration')
log.setLevel(logging.DEBUG)

# this is the Alembic Config object, which provides
# access to the values within the .ini file in use.
config = context.config

# Interpret the config file for Python logging.
# This line sets up loggers basically.
# fileConfig(config.config_file_name)

# add your model's MetaData object here
# for 'autogenerate' support
# from myapp import mymodel
# target_metadata = mymodel.Base.metadata
target_metadata = None

# other values from the config, defined by the needs of env.py,
# can be acquired:
# my_important_option = config.get_main_option("my_important_option")
# ... etc.


def get_database_url_config_key():
    app_env = os.getenv('APP_ENV')
    if app_env:
        return f'{app_env}.sqlalchemy.url'
    else:
        raise NotImplementedError('APP_ENV must be set to run DB migrations')


def get_db_url():
    application_environment = os.getenv('APP_ENV')
    if application_environment == 'tilt':
        return 'postgresql+pygresql://app:apppassword@postgres:5432/housinghub'
    elif application_environment == 'dev':
        return 'postgresql+auroradataapi://:@/housinghubdev'
    elif application_environment == 'prod':
        return 'postgresql+auroradataapi://:@/housinghubprod'
    else:
        return 'postgresql+pygresql://app:apppassword@0.0.0.0:5432/housinghub'


def run_migrations_offline():
    """Run migrations in 'offline' mode.

    This configures the context with just a URL
    and not an Engine, though an Engine is acceptables
    here as well.  By skipping the Engine creation
    we don't even need a DBAPI to be available.

    Calls to context.execute() here emit the given string to the
    script output.

    """
    db_url = get_db_url()
    db_cluster_arn = os.getenv('DB_CLUSTER_ARN', None)
    db_secret_arn = os.getenv('DB_SECRET_ARN', None)
    log.info(f'Starting offline migration with DB URL ${db_url}')
    context.configure(
        url=db_url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
    )

    with context.begin_transaction():
        context.run_migrations()


def run_migrations_online():
    """Run migrations in 'online' mode.

    In this scenario we need to create an Engine
    and associate a connection with the context.

    """
    db_url = get_db_url()
    db_cluster_arn = os.getenv('DB_CLUSTER_ARN', None)
    db_secret_arn = os.getenv('DB_SECRET_ARN', None)
    log.info(f'Starting online migration with DB URL {db_url}')
    if db_cluster_arn and db_secret_arn:
        log.info(
            f'Using data API with cluster ARN {db_cluster_arn} and secret ARN {db_secret_arn}'
        )
        connectable = create_engine(db_url,
                                    echo=True,
                                    connect_args=dict(
                                        aurora_cluster_arn=db_cluster_arn,
                                        secret_arn=db_secret_arn))
    else:
        log.info('Connecting to local database')
        connectable = create_engine(db_url, echo=True)

    with connectable.connect() as connection:
        log.info('Configuring context')
        context.configure(connection=connection,
                          target_metadata=target_metadata)

        with context.begin_transaction():
            log.info('Running migrations')
            context.run_migrations()


if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
