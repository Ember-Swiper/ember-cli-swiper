/* jshint node:true */

module.exports = {
  description: 'Add swiper bower package',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('swiper', '~3.3.1');
  }
};
