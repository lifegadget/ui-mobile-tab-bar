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
  text: computed.alias('item.text'),
  item: null,
  active: null,
  isActive: computed('item','active',function() {
    let { item, active } = this.getProperties('item','active');
    let id = item.id || item.text ? Ember.String.dasherize(item.text) : Ember.String.dasherize(item.text);
    return id === active;
  }),
  expectedRoute: computed('icon','text','elementId', function() {
    let { icon, text, elementId } = this.getProperties('icon','text','elementId');
    if(text) {
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
