from collections import defaultdict
from functools import partial

from apispec import APISpec, BasePlugin, yaml_utils
from apispec.exceptions import APISpecError
from apispec.ext.marshmallow import MarshmallowPlugin
from apispec_webframeworks.flask import FlaskPlugin
from flask import Blueprint

housinghub_spec = APISpec(
    title="Housinghub API",
    version="1.0.0",
    openapi_version="3.0.0",
    info=dict(description="Backend for HousingHub application"),
    plugins=[FlaskPlugin(), MarshmallowPlugin()],
)

class DocumentedBlueprintBase(Blueprint):
    """Flask Blueprint which documents every view function defined in it."""

    def __init__(self, name, import_name, spec, url_prefix=None):
        """
        Initialize blueprint. Must be provided an APISpec object.
        :param APISpec spec: APISpec object which will be attached to the blueprint.
        """
        super(DocumentedBlueprintBase, self).__init__(name, import_name, url_prefix=url_prefix)
        self.documented_view_functions = defaultdict(list)
        self.spec = spec

    def route(self, rule, documented=True, **options):
        """If documented is set to True, the route will be added to the spec.
        :param bool documented: Whether you want this route to be added to the spec or not.
        """

        return super(DocumentedBlueprintBase, self).route(rule, documented=documented, **options)

    def add_url_rule(self, rule, endpoint=None, view_func=None, documented=True, **options):
        """If documented is set to True, the route will be added to the spec.
        :param bool documented: Whether you want this route to be added to the spec or not.
        """
        super(DocumentedBlueprintBase, self).add_url_rule(rule, endpoint=endpoint, view_func=view_func, **options)
        if documented:
            self.documented_view_functions[rule].append(view_func)

    def register(self, app, options, first_registration=False):
        """Register current blueprint in the app. Add all the view_functions to the spec."""
        super(DocumentedBlueprintBase, self).register(app, options, first_registration=first_registration)
        with app.app_context():
            for rule, view_functions in self.documented_view_functions.items():
                [self.spec.path(view=f) for f in view_functions]

DocumentedBlueprint = partial(DocumentedBlueprintBase, spec=housinghub_spec)
