/* globals Swiper */

import $ from 'jquery';
import Component from '@ember/component';
import { getProperties, computed } from '@ember/object';
import { once } from '@ember/runloop';
import { warn } from '@ember/debug';
import { assign as emAssign } from '@ember/polyfills';
import { or } from '@ember/object/computed';

import layout from '../templates/components/swiper-container';

const { keys } = Object;
const assign = (Object.assign || emAssign);

const EMBER_CLI_SWIPER_OPTIONS = [
  'options',
  'navigation',
  'registerAs',
  'vertical',
  'centered',
  'updateFor',
  'currentSlide'
];

export default Component.extend({
  layout,
  classNames: ['swiper-container'],

  /**
   * Swiper Instance
   * @private
   * @type {Boolean}
   */
  _swiper: false,

  /**
   * Proxies `Swiper.activeIndex`
   * @public
   * @type {Number}
   */
  currentSlide: 0,

  /**
   * Compared against `currentSlide`
   * @private
   * @type {Number}
   */
  _currentSlideInternal: 0,

  /**
   * User defined map of Swiper events
   * @type {Object}
   */
  events: computed(() => Object.create(null)),

  /**
   * Abstraction to invoke `Swiper.update`
   * @public
   * @type {String}
   */
  updateFor: '',

  /**
   * Compared against `updateFor`
   * @private
   * @type {String}
   */
  _updateForInternal: '',

  /**
   * Render navigation controls
   * @public
   * @type {Boolean}
   */
  hasNavigation: or('options.navigation', 'navigation'),

  /**
   * Render pagination controls
   * @public
   * @type {Boolean}
   */
  hasPagination: or('options.pagination', 'pagination'),

  /**
   * Single Attribute options
   * @public
   * @type {Object}
   */
  options: computed(() => ({})),

  /**
   * Get Swiper options from attributes
   * @private
   * @return {Object}
   */
  _getOptions() {
    let attrs = getProperties(this, ...keys(this.attrs)); // eslint-disable-line ember/no-attrs-in-components
    let options = assign({}, this.get('options'), attrs);

    // Overwrite pagination element selector
    if (options.pagination) {
      let customPaginationEl = (
        (typeof options.pagination === 'string' && options.pagination)       // custom string selector
        || (typeof options.pagination === 'object' && options.pagination.el) // custom `el` option selector
        || ''
      );

      // Note:
      //  Never resolve user provided pagination configuration,
      //  which may not extend Object.prototype creating hard to
      //  debug issues within Swiper.
      options.pagination = assign(
        { clickable: customPaginationEl ? true : false }, // custom paginations must be clickable
        typeof options.pagination === 'object' ? options.pagination : {},
        { el: customPaginationEl || `#${this.get('elementId')} > .swiper-pagination` }
      );
    }

    if (options.navigation) {
      warn(
        'ember-cli-swiper option `nextButton` is ignored while `navigation` true',
        !options.nextButton,
        { id: 'ember-cli-swiper.next-button-with-navigation' }
      );

      warn(
        'ember-cli-swiper option `prevButton` is ignored while `navigation` true',
        !options.prevButton,
        { id: 'ember-cli-swiper.prev-button-with-navigation' }
      );

      options.nextButton = '.swiper-button-next';
      options.prevButton = '.swiper-button-prev';
    }

    if (options.vertical) {
      warn(
        'ember-cli-swiper option `direction` is ignored while `vertical` true',
        !options.direction,
        { id: 'ember-cli-swiper.direction-with-virtical' }
      );

      options.direction = 'vertical';
    }

    if (options.centered) {
      warn(
        'ember-cli-swiper option `centeredSlides` is ignored while `centered` true',
        !options.centeredSlides,
        { id: 'ember-cli-swiper.centered-with-centered-slides' }
      );

      options.centeredSlides = true;
    }

    /*
     Remove component-only
     configuration options from Swiper options
     */
    keys(options).forEach((k) =>
      EMBER_CLI_SWIPER_OPTIONS.indexOf(k) !== -1 && delete options[k]);

    return options;
  },

  /**
   * Userland fallback sugar for forcing swiper update
   * @public
   */
  forceUpdate() {
    this.get('_swiper').update();
    this.get('_swiper').slideTo(this.get('currentSlide'));
  },

  /**
   * Update `currentSlide` and trigger `onChange` event
   * @private
   * @param {Object} swiper - Swiper instance
   */
  _slideChanged(swiper) {
    let index = this.get('loop') ? $(swiper.slides).filter('.swiper-slide-active').attr('data-swiper-slide-index') : swiper.realIndex;
    this.set('_currentSlideInternal', index);
    this.set('currentSlide', index);
    this.get('onChange')(swiper.slides[swiper.realIndex]);
  },

  didUpdateAttrs() {
    this._super(...arguments);

    /*
     Data-down Swiper slide activation
     */
    if (this.get('currentSlide') !== this.get('_currentSlideInternal')) {
      let index = this.get('currentSlide');

      if (this.get('loop')) {
        let swiper = this.get('_swiper');
        index = $(swiper.slides).filter(`[data-swiper-slide-index=${this.get('currentSlide')}]`).prevAll().length;
      }

      this.get('_swiper').slideTo(index);
      this.set('_currentSlideInternal', this.get('currentSlide'));
    }

    /*
     Trigger `update()` of swiper
     */
    if (this.get('updateFor') !== this.get('_updateForInternal')) {
      once(this, this.get('_swiper').update);
      this.set('_updateForInternal', this.get('updateFor'));
    }
  },

  didInsertElement() {
    this._super(...arguments);
    this.set('registerAs', this);

    let swiperOptions = assign(
      { initialSlide: this.get('currentSlide') },
      this._getOptions()
    );

    let instance = this.set('_swiper', new Swiper(this.element, swiperOptions));
    instance.on('slideChangeTransitionEnd', this._slideChanged.bind(this, instance));

    // Subscribe configured actions as Swiper events
    keys(this.get('events')).forEach((evt) =>
      instance.on(evt, this.get(`events.${evt}`))
    );
  },

  willDestroyElement() {
    this._super(...arguments);
    let instance = this.get('_swiper');

    if (instance) {
      instance.off('slideChangeTransitionEnd');
      instance.destroy();
      instance = this.set('_swiper', null);
    }
  },

  /**
   * On Swiper Slide change
   * @public
   * @param {Swiper.Slide} swiperSlide
   */
  onChange(/* swiperSlide */) {}
});
