/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

describeComponent(
  'my-container',
  'Integration: MyContainerComponent',
  {
    integration: true
  },
  function() {
    it('allows changing value', function() {
      // renders the component on the page
       this.render(hbs`{{my-container}}`);

       this.$('input').val('foo');
       Ember.run(this.$('input'), 'trigger', 'change');

       expect($('.value').text()).to.equal('foo');
    });
  }
);
