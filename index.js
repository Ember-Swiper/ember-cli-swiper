/* jshint node:true */
'use strict';

module.exports = {
  name: 'ember-cli-swiper',

  included(app) {
    this._super.included.apply(this, arguments);
    
    var app;

    // If the addon has the _findHost() method (in ember-cli >= 2.7.0), we'll just
    // use that.
    if (typeof this._findHost === 'function') {
      app = this._findHost();
    } else {
      // Otherwise, we'll use this implementation borrowed from the _findHost()
      // method in ember-cli.
      var current = this;
      do {
        app = current.app || app;
      } while (current.parent.parent && (current = current.parent));
    }

    app.import(app.bowerDirectory + '/swiper/dist/css/swiper.min.css');

    if (!process.env.EMBER_CLI_FASTBOOT) {
      app.import(app.bowerDirectory + '/swiper/dist/js/swiper.min.js');
    }
  }

};
