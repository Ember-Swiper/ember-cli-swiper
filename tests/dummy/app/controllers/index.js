import Controller from '@ember/controller';
import { later } from '@ember/runloop';
import jQ from 'jquery';

export default Controller.extend({
  selectionHistory: '',
  currentSlide: 0,
  currentSlide2: 2,

  actions: {
    addToHistory(newElement) {
      this.set('selectionHistory', `${jQ(newElement).text()}${this.get('selectionHistory')}`);
    },

    goToTwo() {
      this.set('currentSlide', 2);
    },

    onSwiperEnd() {
      later(() => alert('End of slider'), 300);
    }
  }
});
