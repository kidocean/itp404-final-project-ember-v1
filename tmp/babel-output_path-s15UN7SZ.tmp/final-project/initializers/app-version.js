define('final-project/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'final-project/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _finalProjectConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_finalProjectConfigEnvironment['default'].APP.name, _finalProjectConfigEnvironment['default'].APP.version)
  };
});