/* globals Swiper */

import Ember from 'ember';
import layout from '../templates/components/swiper-container';

const { Component, computed, observer, on, run, $ } = Ember;

const swiperParameters = [
  // Keyboard / Mousewheel
  'keyboardControl',
  'mousewheelControl',
  'mousewheelForceToAxis',
  'mousewheelInvert',
  'mousewheelReleaseOnEdges'
];

export default Component.extend({
  layout,
  classNames: ['swiper-container'],
  swiper: false,

  swiperOptions: computed('pagination', 'loop', 'vertical', 'onlyExternal', 'effect', ...swiperParameters, function() {
    let options = {};

    swiperParameters.forEach((parameter) => {
      if (this.get(parameter)) {
        options[parameter] = parameter;
      }
    });

    if (this.get('pagination')) {
      options.pagination = typeof this.get('pagination') === 'boolean' ?
        `#${this.get('elementId')} > .swiper-pagination` : this.get('pagination');
      options.paginationClickable = true;
    }

    if (this.get('nextButton')) {
      options.nextButton = this.get('nextButton');
    }

    if (this.get('prevButton')) {
      options.prevButton = this.get('prevButton');
    }

    if (this.get('navigation')) {
      options.nextButton = '.swiper-button-next';
      options.prevButton = '.swiper-button-prev';
    }

    if (this.get('loop')) {
      options.loop = true;
    }

    if (this.get('initialSlide')) {
      options.initialSlide = this.get('initialSlide');
    }

    // Disables swiping
    if (this.get('followFinger')) {
      options.followFinger = false;
    }

    // disable all user interactions
    if (this.get('onlyExternal')) {
      options.onlyExternal = true;
    }

    if (this.get('vertical')) {
      options.direction = 'vertical';
    }

    if (this.get('slidesPerGroup')) {
      options.slidesPerGroup = this.get('slidesPerGroup');
    }

    if (this.get('slidesPerView')) {
      options.slidesPerView = this.get('slidesPerView');
    }

    if (this.get('slidesPerColumn')) {
      options.slidesPerColumn = this.get('slidesPerColumn');
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

    if (this.get('speed')) {
      options.speed = this.get('speed');
    }

    if (this.get('freeModeSticky')) {
      options.freeModeSticky = true;
    }

    if (this.get('grabCursor')) {
      options.grabCursor = true;
    }

    if (this.get('nested')) {
      options.nested = true;
    }

    if (this.get('breakpoints')) {
      options.breakpoints = this.get('breakpoints');
    }

    if (this.get('keyboardControl')) {
      options.keyboardControl = this.get('keyboardControl');
    }

    if (this.get('autoplay')) {
      options.autoplay = this.get('autoplay');
    }

    if (this.get('autoplayStopOnLast')) {
      options.autoplayStopOnLast = this.get('autoplayStopOnLast');
    }

    if (this.get('autoplayDisableOnInteraction')) {
      options.autoplayDisableOnInteraction = this.get('autoplayDisableOnInteraction');
    }

    if (this.get('watchSlidesProgress')) {
      options.watchSlidesProgress = true;
    }

    if (this.get('watchSlidesVisibility')) {
      options.watchSlidesVisibility = true;
    }

    // basic support for 'effect' API
    let effect = this.get('effect');
    if (effect && effect !== 'slide') {
      options.effect = this.get('effect');

      // look for effect configurations if an effect other than the default
      // 'slide' effect is given
      let effectConfigs = this.getProperties('fade', 'cube', 'overflow', 'flip');

      // add available effect configurations to options
      Object.keys(effectConfigs).forEach((c) => {
        if (effectConfigs[c]) {
          options[c] = effectConfigs[c];
        }
      });
    }

    options.onSlideChangeEnd = this.slideChanged.bind(this);

    return options;
  }),

  updateTriggered: observer('updateFor', function() {
    run.once(this, this.get('swiper').update);
  }),

  forceUpdate(updateTranslate) {
    this.get('swiper').update(updateTranslate === undefined ? false : updateTranslate);
    this.get('swiper').slideTo(this.get('currentSlide'));
  },

  slideChanged(swiper) {
    let index = this.get('loop') ? $(swiper.slides).filter('.swiper-slide-active').attr('data-swiper-slide-index') : swiper.activeIndex;
    this.set('currentSlideInternal', index);
    this.set('currentSlide', index);

    if (this.get('onChange')) {
      this.sendAction('onChange', swiper.slides[swiper.activeIndex]);
    }
  },

  currentSlideModified: observer('currentSlide', function() {
    run.later(this, () => {
      if (this.get('currentSlide') !== this.get('currentSlideInternal')) {
        let index = this.get('currentSlide');

        if (this.get('loop')) {
          let swiper = this.get('swiper');
          index = $(swiper.slides).filter(`[data-swiper-slide-index=${this.get('currentSlide')}]`).prevAll().length;
        }

        this.get('swiper').slideTo(index);
        this.set('currentSlideInternal', this.get('currentSlide'));
      }
    });
  }),

  initSwiper: on('didInsertElement', function() {
    run.scheduleOnce('afterRender', this, function() {
      this.set('swiper', new Swiper(`#${this.get('elementId')}`, this.get('swiperOptions')));
      this.set('registerAs', this);
      if (this.get('afterSwiperInit')) {
        this.sendAction('afterSwiperInit', this);
      }
    });
  })
});
