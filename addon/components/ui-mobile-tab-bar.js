import Ember from 'ember';
import layout from '../templates/components/ui-mobile-tab-bar';
const { $, A, Component, computed } = Ember; // jshint ignore:line

export default Component.extend({
  layout: layout,
  tagName: 'div',
  classNames: ['ui-mobile-tab-bar'],
  classNameBindings: ['position'],
  position: 'bottom',
  items: new A(),
  // if dotted route then look optimistically for aspects the possible options
  _active: Ember.on('init', computed('active', function() {
    let active = this.get('active');
    console.log('active is: %s', active);
    if(active && active.indexOf('.') !== -1) {
      let options = this.get('items').map( item => {
        return item.route ? item.route : String(item.text).toLowerCase();
      });
      let routeParts = active.split('.');
      routeParts.forEach( item => {
        if (new A(options).contains(item)) {     
          active = item;
        }
      });
    } 
    
    return active;
  })),
  iconFamily: 'fa',
  
  actions: {
    itemClicked: function(element) {
      this.sendAction('action', element);
    }
  }

});
