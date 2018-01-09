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
  'afterSwiperInit',
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
    let attrs = getProperties(this, ...keys(this.attrs));
    let options = assign({}, this.get('options'), attrs);

    /*
     Automatically configure pagination set to `true`
     */
    if (options.pagination === true) {
      options.pagination = `#${this.get('elementId')} > .swiper-pagination`;
    }

    if (options.pagination) {
      options.paginationClickable = true; // paginated must be clickable
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

  forceUpdate(updateTranslate) {
    this.get('_swiper').update(updateTranslate === undefined ? false : updateTranslate);
    this.get('_swiper').slideTo(this.get('currentSlide'));
  },

  slideChanged(swiper) {
    let index = this.get('loop') ? $(swiper.slides).filter('.swiper-slide-active').attr('data-swiper-slide-index') : swiper.activeIndex;

    this.set('_currentSlideInternal', index);
    this.set('currentSlide', index);
    this.sendAction('onChange', swiper.slides[swiper.activeIndex]);
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

    this
      .set('_swiper', new Swiper(this.element, this._getOptions()))
      .on('onSlideChangeEnd', this.slideChanged.bind(this))

    // ember-cli-swiper `autoplay` option is currently broken. There is an unmerged PR for a fix.
    // In the meantime, this will let us use the option.
    // .slideTo(this.get('currentSlide'));

    this.sendAction('afterSwiperInit', this);
  },

  willDestroyElement() {
    this._super(...arguments);

    if (this.get('_swiper')) {
      this.get('_swiper').off('onSlideChangeEnd');
      this.get('_swiper').destroy();
      this.set('_swiper', null);
    }
  }
});
