from alembic.config import Config
from alembic import command
import inspect
import os


def main(event, context):
    _current_dir = os.path.dirname(os.path.abspath(inspect.stack()[0][1]))

    alembic_cfg = Config()
    alembic_cfg.set_main_option('script_location', _current_dir)
    command.upgrade(alembic_cfg, 'head')


if __name__ == '__main__':
    main(None, None)
