import Ember from 'ember';
import layout from '../templates/components/swiper-slide';

const { Component, computed } = Ember;

export default Component.extend({
  layout,
  classNameBindings: ['mergedClasses'],

  mergedClasses: computed('class', function() {
    return this.get('class') ? `${this.get('class')} swiper-slide` : 'swiper-slide';
  })

});
