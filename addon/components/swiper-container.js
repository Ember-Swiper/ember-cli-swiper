/* globals Swiper */

import Ember from 'ember';
import layout from '../templates/components/swiper-container';

const { Component, computed, observer, on, run, $ } = Ember;

// jscs:disable
const swiperParameters = Object.keys({
    // The follwing parameters are copied verbatim from idangerous.swiper.js
    direction: 'horizontal',
    touchEventsTarget: 'container',
    initialSlide: 0,
    speed: 300,
    // autoplay
    autoplay: false,
    autoplayDisableOnInteraction: true,
    autoplayStopOnLast: false,
    // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
    iOSEdgeSwipeDetection: false,
    iOSEdgeSwipeThreshold: 20,
    // Free mode
    freeMode: false,
    freeModeMomentum: true,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: true,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: false,
    freeModeMinimumVelocity: 0.02,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true
    },
    flip: {
        slideShadows : true,
        limitRotation: true
    },
    cube: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94
    },
    fade: {
        crossFade: false
    },
    // Parallax
    parallax: false,
    // Zoom
    zoom: false,
    zoomMax: 3,
    zoomMin: 1,
    zoomToggle: true,
    // Scrollbar
    scrollbar: null,
    scrollbarHide: true,
    scrollbarDraggable: false,
    scrollbarSnapOnRelease: false,
    // Keyboard Mousewheel
    keyboardControl: false,
    mousewheelControl: false,
    mousewheelReleaseOnEdges: false,
    mousewheelInvert: false,
    mousewheelForceToAxis: false,
    mousewheelSensitivity: 1,
    mousewheelEventsTarged: 'container',
    // Hash Navigation
    hashnav: false,
    hashnavWatchState: false,
    // History
    history: false,
    // Commong Nav State
    replaceState: false,
    // Breakpoints
    breakpoints: undefined,
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: 'column',
    slidesPerGroup: 1,
    centeredSlides: false,
    slidesOffsetBefore: 0, // in px
    slidesOffsetAfter: 0, // in px
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    onlyExternal: false,
    threshold: 0,
    touchMoveStopPropagation: true,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Pagination
    pagination: null,
    paginationElement: 'span',
    paginationClickable: false,
    paginationHide: false,
    paginationBulletRender: null,
    paginationProgressRender: null,
    paginationFractionRender: null,
    paginationCustomRender: null,
    paginationType: 'bullets', // 'bullets' or 'progress' or 'fraction' or 'custom'
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Next/prev buttons
    nextButton: null,
    prevButton: null,
    // Progress
    watchSlidesProgress: false,
    watchSlidesVisibility: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // Lazy Loading
    lazyLoading: false,
    lazyLoadingInPrevNext: false,
    lazyLoadingInPrevNextAmount: 1,
    lazyLoadingOnTransitionStart: false,
    // Images
    preloadImages: true,
    updateOnImagesReady: true,
    // loop
    loop: false,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    // Control
    control: undefined,
    controlInverse: false,
    controlBy: 'slide', //or 'container'
    normalizeSlideIndex: true,
    // Swiping/no swiping
    allowSwipeToPrev: true,
    allowSwipeToNext: true,
    swipeHandler: null, //'.swipe-handler',
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    // Passive Listeners
    passiveListeners: true,
    // NS
    containerModifierClass: 'swiper-container-', // NEW
    slideClass: 'swiper-slide',
    slideActiveClass: 'swiper-slide-active',
    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideDuplicateClass: 'swiper-slide-duplicate',
    slideNextClass: 'swiper-slide-next',
    slideDuplicateNextClass: 'swiper-slide-duplicate-next',
    slidePrevClass: 'swiper-slide-prev',
    slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
    wrapperClass: 'swiper-wrapper',
    bulletClass: 'swiper-pagination-bullet',
    bulletActiveClass: 'swiper-pagination-bullet-active',
    buttonDisabledClass: 'swiper-button-disabled',
    paginationCurrentClass: 'swiper-pagination-current',
    paginationTotalClass: 'swiper-pagination-total',
    paginationHiddenClass: 'swiper-pagination-hidden',
    paginationProgressbarClass: 'swiper-pagination-progressbar',
    paginationClickableClass: 'swiper-pagination-clickable', // NEW
    paginationModifierClass: 'swiper-pagination-', // NEW
    lazyLoadingClass: 'swiper-lazy',
    lazyStatusLoadingClass: 'swiper-lazy-loading',
    lazyStatusLoadedClass: 'swiper-lazy-loaded',
    lazyPreloaderClass: 'swiper-lazy-preloader',
    notificationClass: 'swiper-notification',
    preloaderClass: 'preloader',
    zoomContainerClass: 'swiper-zoom-container',

    // Observer
    observer: false,
    observeParents: false,
    // Accessibility
    a11y: false,
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
    firstSlideMessage: 'This is the first slide',
    lastSlideMessage: 'This is the last slide',
    paginationBulletMessage: 'Go to slide {{index}}',
    // Callbacks
    runCallbacksOnInit: true
});
// jscs:enable

export default Component.extend({
  layout,
  classNames: ['swiper-container'],
  swiper: false,

  swiperOptions: computed('navigation', 'vertical', 'centered', 'effect', 'fade', 'cube', 'overflow', 'flip', ...swiperParameters, function() {
    let options = {};

    swiperParameters.forEach((parameter) => {
      if (this.get(parameter)) {
        options[parameter] = parameter;
      }
    });

    if (this.get('pagination') === true) {
      options.pagination = `#${this.get('elementId')} > .swiper-pagination`;
      if (this.get('paginationClickable') !== false) {
        options.paginationClickable = true;
      }
    }

    if (this.get('navigation')) {
      options.nextButton = '.swiper-button-next';
      options.prevButton = '.swiper-button-prev';
    }

    // Disables swiping
    if (this.get('followFinger')) {
      // followFinger is reversed ???
      options.followFinger = false;
    }

    if (typeof this.get('simulateTouch') === 'boolean') {
      options.simulateTouch = this.get('simulateTouch');
    }

    if (this.get('vertical')) {
      options.direction = 'vertical';
    }

    if (this.get('centered')) {
      options.centeredSlides = true;
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
    let index = swiper.activeIndex;
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
