import Ember from 'ember';
import layout from '../templates/components/swiper-slide';

export default Ember.Component.extend({
  layout,
  classNameBindings: ['mergedClasses'],

  mergedClasses: Ember.computed('class', function() {
    return this.get('class') ? `${this.get('class')} swiper-slide` : 'swiper-slide';
  })

});
