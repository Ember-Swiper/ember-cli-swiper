module.exports = {
  description: 'add swiper bower package',

  normalizeEntityName() {
  },

  afterInstall() {
    return this.addBowerPackageToProject('swiper', '~3.4.1 ');
  }

};
