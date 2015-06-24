import Ember from 'ember';

export default Ember.TextField.extend({
  _onInit: Ember.on('init', function() {
    this.set('value', 'init');
  }),
  focusIn: function() {
    this.set('value', 'focusin');
  },
  focusOut: function() {
    this.set('value', 'focusout');
  }
});
