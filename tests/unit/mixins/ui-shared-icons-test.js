import Ember from 'ember';
import UiSharedIconsMixin from '../../../mixins/ui-shared-icons';
import { module, test } from 'qunit';

module('UiSharedIconsMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var UiSharedIconsObject = Ember.Object.extend(UiSharedIconsMixin);
  var subject = UiSharedIconsObject.create();
  assert.ok(subject);
});
