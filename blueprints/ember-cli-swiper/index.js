module.exports = {
  description: 'add swiper bower package',

  normalizeEntityName() {
  },

  afterInstall() {
    return this.addBowerPackageToProject('swiper', '~3.3.1 ');
  }

};
