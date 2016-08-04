/* jshint node:true */
'use strict';

module.exports = {
  name: 'ember-cli-swiper',

  included: function(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/swiper/dist/css/swiper.min.css');

    if (!process.env.EMBER_CLI_FASTBOOT) {
      app.import(app.bowerDirectory + '/swiper/dist/js/swiper.min.js');
      app.import(app.bowerDirectory + '/swiper/dist/js/maps/swiper.min.js.map');
    }
  }
};
