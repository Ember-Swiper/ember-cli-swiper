import Controller from '@ember/controller';
import jQ from 'jquery';

export default Controller.extend({
  selectionHistory: '',

  actions: {

    addToHistory(newElement) {
      this.set('selectionHistory', `${jQ(newElement).text()}${this.get('selectionHistory')}`);
    },

    goToTwo() {
      this.set('currentSlide', 2);
    }

  }

});
