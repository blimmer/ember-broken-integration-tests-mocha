/* jshint expr:true */
import Ember from 'ember';
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'my-input',
  'Integration: MyInputComponent',
  {
    integration: true
  },
  function() {
    it('it responds to focus events', function() {
      // renders the component on the page
      this.render(hbs`{{my-input}}`);
      expect(this.$('input').val()).to.equal('init');

      Ember.run(this.$('input'), 'trigger', 'focusin');
      expect(this.$('input').val()).to.equal('focusin');

      Ember.run(this.$('input'), 'trigger', 'focusout');
      expect(this.$('input').val()).to.equal('focusout');
    });
  }
);
