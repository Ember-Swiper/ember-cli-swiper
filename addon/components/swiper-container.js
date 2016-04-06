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

    options.onSlideChangeEnd = this.slideChanged.bind(this);

    return options;
  }),

  slideChanged(swiper) {
    this.set('currentSlideInternal', swiper.activeIndex);
    this.set('currentSlide', swiper.activeIndex);

    if (this.get('onChange')) {
      this.sendAction('onChange', swiper.slides[swiper.activeIndex]);
    }
  },

  currentSlideModified: Ember.observer('currentSlide', function() {
    Ember.run.later(this, () => {
      if (this.get('currentSlide') !== this.get('currentSlideInternal')) {
        this.get('swiper').slideTo(this.get('currentSlide'));
        this.set('currentSlideInternal', this.get('currentSlide'));
      }
    });
  }),

  initSwiper: Ember.on('init', function() {
    Ember.run.later(this, () => {
      this.set('swiper', new Swiper(`#${this.get('elementId')}`, this.get('swiperOptions')));
    });
  })

});
