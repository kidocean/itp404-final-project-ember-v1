define('final-project/tests/helpers/resolver', ['exports', 'final-project/resolver', 'final-project/config/environment'], function (exports, _finalProjectResolver, _finalProjectConfigEnvironment) {

  var resolver = _finalProjectResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _finalProjectConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _finalProjectConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});