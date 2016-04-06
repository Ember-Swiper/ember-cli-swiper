import Ember from 'ember';
import layout from '../templates/components/swiper-container';

export default Ember.Component.extend({
  layout,
  classNames: ['swiper-container'],
  swiper: false,

  swiperOptions: Ember.computed('pagination', 'loop', 'vertical', function() {
    let options = {};

    if (this.get('pagination')) {
      options.pagination = `#${this.get('elementId')} .swiper-pagination`;
      options.paginationClickable = true;
    }

    if (this.get('loop')) {
      options.loop = true;
    }

    if (this.get('vertical')) {
      options.direction = 'vertical';
    }

    if (this.get('slidesPerView')) {
      options.slidesPerView = this.get('slidesPerView');
    }

    if (this.get('spaceBetween')) {
      options.spaceBetween = this.get('spaceBetween');
    }

    if (this.get('centered')) {
      options.centeredSlides = true;
    }

    if (this.get('freeMode')) {
      options.freeMode = true;
    }

    if (this.get('freeModeSticky')) {
      options.freeModeSticky = true;
    }

    if (this.get('grabCursor')) {
      options.grabCursor = true;
    }

    return options;
  }),

  initSwiper: Ember.on('init', function() {
    Ember.run.later(this, () => {
      this.set('swiper', new Swiper(`#${this.get('elementId')}`, this.get('swiperOptions')));
    });
  })

});
