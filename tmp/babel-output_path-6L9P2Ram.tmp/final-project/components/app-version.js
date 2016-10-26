define('final-project/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'final-project/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _finalProjectConfigEnvironment) {

  var name = _finalProjectConfigEnvironment['default'].APP.name;
  var version = _finalProjectConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});