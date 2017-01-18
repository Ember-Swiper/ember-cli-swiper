import Ember from 'ember';

export default function destroyApp(application) {
  // jscs:disable disallowDirectPropertyAccess
  Ember.run(application, 'destroy');
}
