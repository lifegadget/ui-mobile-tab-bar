import Ember from 'ember';
import layout from '../templates/components/ui-mobile-tab-item';
import SharedIconsMixin from 'ui-mobile-tab-bar/mixins/ui-shared-icons';
const { computed, observer, $, A, run, on, typeOf, debug, keys, get, set } = Ember;    // jshint ignore:line
const dasherize = Ember.String.dasherize;

export default Ember.Component.extend(SharedIconsMixin,{
  layout: layout,
  classNames: ['tab-item'],
  classNameBindings: ['isActive:active'],
  tagName: 'div',
  icon: computed.alias('item.icon'),
  route: computed.alias('item.route'),
  text: computed.alias('item.text'),
  item: null,
  isActive: Ember.on('didInsertElement', computed('item','active',function() {
    let { item, active } = this.getProperties('item','active'); // jshint ignore:line
    let id;
    if(get('item.id')) {
      id = dasherize(get('item.id'));
    } else if (get('item.text')) {
      id = dasherize(get('item.text'));      
    } else {
      id = null;
    }
    
    return id === active;
  })),
  expectedRoute: computed('icon','text','elementId', function() {
    let { route, icon, text, elementId } = this.getProperties('route', 'icon','text','elementId');
    if(route) {
      return route;
    } else if(text) {
      return dasherize(text);
    } else if(icon) {
      return dasherize(icon);
    } 
    
    return dasherize(elementId);
  }),
  click: function() {
    this.sendAction('action', this);
  }
});
