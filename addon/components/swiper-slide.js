import Component from '@ember/component';
import layout from '../templates/components/swiper-slide';

export const PERMITTED_DATA_ATTRIBUTES = [
  'data-history',
  'data-id',
  'data-swiper-autoplay',
  'data-swiper-parallax',
  'data-swiper-parallax-x',
  'data-swiper-parallax-y',
  'data-swiper-parallax-scale',
  'data-swiper-parallax-opacity',
  'data-swiper-parallax-duration',
  'data-background',
  'data-src',
  'data-srcset',
  'data-swiper-zoom',
  'data-hash'
];

export default Component.extend({
  layout,
  attributeBindings: PERMITTED_DATA_ATTRIBUTES,
  classNames: ['swiper-slide']
});
