import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('profile');
  this.route('sessions');
  this.route('payments');
  this.route('goals');
  this.route('discussion');
});
