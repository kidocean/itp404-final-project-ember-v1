define('final-project/tests/routes/homepage.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/homepage.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/homepage.js should pass jshint.');
  });
});