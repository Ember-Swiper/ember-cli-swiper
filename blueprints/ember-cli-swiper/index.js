module.exports = {
  description: 'add swiper bower package',

  normalizeEntityName() {
  },

  afterInstall() {
    return this.addBowerPackageToProject('Swiper', '~3.1');
  }

};
