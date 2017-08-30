import Ember from 'ember';
import Application from '../../app';
import config from '../../config/environment';

export default function startApp(attrs) {
  // jscs:disable disallowDirectPropertyAccess
  let attributes = Ember.merge({}, config.APP);

  // jscs:disable disallowDirectPropertyAccess
  attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

  // jscs:disable disallowDirectPropertyAccess
  return Ember.run(() => {
    let application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
    return application;
  });
}
