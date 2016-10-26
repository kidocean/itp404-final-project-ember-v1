define('final-project/router', ['exports', 'ember', 'final-project/config/environment'], function (exports, _ember, _finalProjectConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _finalProjectConfigEnvironment['default'].locationType,
    rootURL: _finalProjectConfigEnvironment['default'].rootURL
  });

  Router.map(function () {});

  exports['default'] = Router;
});