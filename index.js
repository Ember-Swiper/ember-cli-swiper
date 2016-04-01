/*jshint node:true*/
'use strict';

module.exports = {
  name: 'ember-cli-swiper',

  included(app) {
    this._super.included(app);
    app.import('bower_components/Swiper/dist/css/swiper.css');
    app.import('bower_components/Swiper/dist/js/swiper.js');
  }

};
