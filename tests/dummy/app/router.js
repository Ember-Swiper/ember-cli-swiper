import Ember from 'ember';
import config from './config/environment';

// jscs:disable disallowDirectPropertyAccess
const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
});

export default Router;
