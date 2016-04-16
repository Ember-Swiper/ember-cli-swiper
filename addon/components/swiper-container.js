import Ember from 'ember';
import layout from '../templates/components/swiper-container';

export default Ember.Component.extend({
  layout,
  classNames: ['swiper-container'],
  swiper: false,
  hasAttemptedRecovery: false,

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

  updateTriggered: Ember.observer('updateFor', 'hasAttemptedRecovery', function() {
    Ember.run.once(this, () => {
      this.get('swiper').update();
      Ember.run.once(this, () => {
        this.notifyPropertyChange('currentSlide');
      });
    });
  }),

  slideChanged(swiper) {
    let index = this.get('loop') ? Ember.$(swiper.slides).filter('.swiper-slide-active').attr('data-swiper-slide-index') : swiper.activeIndex;
    this.set('currentSlideInternal', index);
    this.set('currentSlide', index);

    if (this.get('onChange')) {
      this.sendAction('onChange', swiper.slides[swiper.activeIndex]);
    }
  },

  currentSlideModified: Ember.observer('currentSlide', function() {
    Ember.run.later(this, () => {
      if (this.get('currentSlide') !== this.get('currentSlideInternal')) {
        let index = this.get('currentSlide');

        if (this.get('loop')) {
          let swiper = this.get('swiper');
          index = Ember.$(swiper.slides).filter(`[data-swiper-slide-index=${this.get('currentSlide')}]`).prevAll().length;
        }

        var didSlide = this.get('swiper').slideTo(index);
        if ( didSlide || this.get('hasAttemptedRecovery') ) {
          this.set('currentSlideInternal', this.get('currentSlide'));
        } else {
          this.set('hasAttemptedRecovery', true);
        }
      }
    });
  }),

  initSwiper: Ember.on('init', function() {
    Ember.run.later(this, () => {
      this.set('swiper', new Swiper(`#${this.get('elementId')}`, this.get('swiperOptions')));
    });
  })

});
