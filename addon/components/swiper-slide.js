import Component from '@ember/component';
import layout from '../templates/components/swiper-slide';

export default Component.extend({
  layout,
  tagName: 'li',
  classNames: ['swiper-slide']
});
