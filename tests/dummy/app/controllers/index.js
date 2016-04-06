import Ember from 'ember';

export default Ember.Controller.extend({
  selectionHistory: '',

  actions: {

    addToHistory(newElement) {
      this.set('selectionHistory', `${Ember.$(newElement).text()}${this.get('selectionHistory')}`);
    },

    goToTwo() {
      this.set('currentSlide', 2);
    }

  }

});
