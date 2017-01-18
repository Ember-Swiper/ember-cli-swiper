import Ember from 'ember';
import Application from '../../app';
import config from '../../config/environment';

export default function startApp(attrs) {
  let application;

  // jscs:disable disallowDirectPropertyAccess
  let attributes = Ember.merge({}, config.APP);

  // jscs:disable disallowDirectPropertyAccess
  attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

  // jscs:disable disallowDirectPropertyAccess
  Ember.run(() => {
    application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
  });

  return application;
}
