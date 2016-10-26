define('final-project/tests/test-helper', ['exports', 'final-project/tests/helpers/resolver', 'ember-qunit'], function (exports, _finalProjectTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_finalProjectTestsHelpersResolver['default']);
});