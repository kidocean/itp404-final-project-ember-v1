define('final-project/app', ['exports', 'ember', 'final-project/resolver', 'ember-load-initializers', 'final-project/config/environment'], function (exports, _ember, _finalProjectResolver, _emberLoadInitializers, _finalProjectConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _finalProjectConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _finalProjectConfigEnvironment['default'].podModulePrefix,
    Resolver: _finalProjectResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _finalProjectConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});