import Ember from 'ember';
import layout from '../templates/components/ui-mobile-tab-bar';
const { $, A, Component, computed } = Ember;

export default Component.extend({
  layout: layout,
  tagName: 'div',
  classNames: ['ui-mobile-tab-bar'],
  classNameBindings: ['position'],
  position: 'bottom',
  items: new A([
    {text:'Profile', icon:'user'},
    {text:'Sessions', icon:'calendar'},
    {text:'Payments', icon:'money'},
    {text:'Goals', icon:'trophy'},
    {text:'Discussion', icon:'comments-o'},
  ]),
  iconFamily: 'fa',
  
  actions: {
    itemClicked: function(element) {
      this.sendAction('action', element);
    }
  }

});
