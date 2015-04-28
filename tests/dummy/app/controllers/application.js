import Ember from 'ember';

export default Ember.Controller.extend({

  position: 'bottom',
  items: Ember.A([
    { text:'Profile', icon: 'user', route: 'profile' },
    { text:'Sessions', icon: 'calendar', route: 'sessions' },
    { text:'Payments', icon: 'money', route: 'payments' },
    { text:'Goals', icon: 'trophy', route: 'goals' },
    { text:'Discussion', icon: 'comments-o', route: 'discussion' }
  ]),
  
  actions: {
    navigationChanged: function(item) {
      console.log('navigation changed: %o', item);
      let route = item.get('expectedRoute');
      this.transitionToRoute(route);
    }
  }

});