import Ember from 'ember';
import layout from '../templates/components/ui-mobile-tab-item';
import SharedIconsMixin from '../mixins/ui-shared-icons.js';
const { $, A, Component, computed } = Ember;

export default Ember.Component.extend(SharedIconsMixin,{
  layout: layout,
  classNames: ['tab-item'],
  classNameBindings: ['isActive:active'],
  tagName: 'div',
  icon: computed.alias('item.icon'),
  route: computed.alias('item.route'),
  text: computed.alias('item.text'),
  item: null,
  active: null,
  isActive: Ember.on('didInsertElement', computed('item','active',function() {
    let { item, active } = this.getProperties('item','active');
    // active route may be a compound route and we're only interested in the last part of it for comparison sake
    active = active.split('.').slice(-1)[0];
    console.log('active is: ' + active);
    let id = item.id || item.text ? Ember.String.dasherize(item.text) : Ember.String.dasherize(item.text);
    return id === active;
  })),
  expectedRoute: computed('icon','text','elementId', function() {
    let { route, icon, text, elementId } = this.getProperties('route', 'icon','text','elementId');
    if(route) {
      return route;
    } else if(text) {
      return Ember.String.dasherize(text);
    } else if(icon) {
      return Ember.String.dasherize(icon);
    } 
    
    return Ember.String.dasherize(elementId);
  }),
  click: function(evt) {
    this.sendAction('action', this);
  }
});
