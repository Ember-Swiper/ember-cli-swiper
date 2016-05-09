"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _ember, _dummyResolver, _emberLoadInitializers, _dummyConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix,
    Resolver: _dummyResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _dummyConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('dummy/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'dummy/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _dummyConfigEnvironment) {

  var name = _dummyConfigEnvironment['default'].APP.name;
  var version = _dummyConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('dummy/components/swiper-container', ['exports', 'ember-cli-swiper/components/swiper-container'], function (exports, _emberCliSwiperComponentsSwiperContainer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliSwiperComponentsSwiperContainer['default'];
    }
  });
});
define('dummy/components/swiper-slide', ['exports', 'ember-cli-swiper/components/swiper-slide'], function (exports, _emberCliSwiperComponentsSwiperSlide) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliSwiperComponentsSwiperSlide['default'];
    }
  });
});
define('dummy/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('dummy/controllers/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    selectionHistory: '',

    actions: {

      addToHistory: function addToHistory(newElement) {
        this.set('selectionHistory', '' + _ember['default'].$(newElement).text() + this.get('selectionHistory'));
      },

      goToTwo: function goToTwo() {
        this.set('currentSlide', 2);
      }

    }

  });
});
define('dummy/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('dummy/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('dummy/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('dummy/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dummy/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _dummyConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_dummyConfigEnvironment['default'].APP.name, _dummyConfigEnvironment['default'].APP.version)
  };
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('dummy/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_dummyConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _dummyConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_dummyConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('dummy/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('dummy/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("dummy/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _dummyConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define('dummy/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("dummy/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("a");
        dom.setAttribute(el1, "href", "https://github.com/Suven/ember-cli-swiper");
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "style", "position: absolute; top: 0; right: 0; border: 0;");
        dom.setAttribute(el2, "src", "https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67");
        dom.setAttribute(el2, "alt", "Fork me on GitHub");
        dom.setAttribute(el2, "data-canonical-src", "https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "measure");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("ember-cli-swiper");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2]), 3, 3);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [5, 2], [5, 12]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 12,
                "column": 2
              },
              "end": {
                "line": 12,
                "column": 26
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 1");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 13,
                "column": 2
              },
              "end": {
                "line": 13,
                "column": 26
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 2");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 14,
                "column": 2
              },
              "end": {
                "line": 14,
                "column": 26
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 3");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 15,
                "column": 2
              },
              "end": {
                "line": 15,
                "column": 26
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 4");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child4 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 16,
                "column": 2
              },
              "end": {
                "line": 16,
                "column": 26
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 5");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.3",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 0
            },
            "end": {
              "line": 17,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(5);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          morphs[3] = dom.createMorphAt(fragment, 7, 7, contextualElement);
          morphs[4] = dom.createMorphAt(fragment, 9, 9, contextualElement);
          return morphs;
        },
        statements: [["block", "swiper-slide", [], [], 0, null, ["loc", [null, [12, 2], [12, 43]]]], ["block", "swiper-slide", [], [], 1, null, ["loc", [null, [13, 2], [13, 43]]]], ["block", "swiper-slide", [], [], 2, null, ["loc", [null, [14, 2], [14, 43]]]], ["block", "swiper-slide", [], [], 3, null, ["loc", [null, [15, 2], [15, 43]]]], ["block", "swiper-slide", [], [], 4, null, ["loc", [null, [16, 2], [16, 43]]]]],
        locals: [],
        templates: [child0, child1, child2, child3, child4]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 32,
                "column": 2
              },
              "end": {
                "line": 32,
                "column": 52
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 1");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 33,
                "column": 2
              },
              "end": {
                "line": 33,
                "column": 52
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 2");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 34,
                "column": 2
              },
              "end": {
                "line": 34,
                "column": 52
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 3");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 35,
                "column": 2
              },
              "end": {
                "line": 35,
                "column": 52
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 4");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child4 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 36,
                "column": 2
              },
              "end": {
                "line": 36,
                "column": 52
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 5");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.3",
          "loc": {
            "source": null,
            "start": {
              "line": 31,
              "column": 0
            },
            "end": {
              "line": 37,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(5);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          morphs[3] = dom.createMorphAt(fragment, 7, 7, contextualElement);
          morphs[4] = dom.createMorphAt(fragment, 9, 9, contextualElement);
          return morphs;
        },
        statements: [["block", "swiper-slide", [], ["class", "myslide myslide-1"], 0, null, ["loc", [null, [32, 2], [32, 69]]]], ["block", "swiper-slide", [], ["class", "myslide myslide-2"], 1, null, ["loc", [null, [33, 2], [33, 69]]]], ["block", "swiper-slide", [], ["class", "myslide myslide-3"], 2, null, ["loc", [null, [34, 2], [34, 69]]]], ["block", "swiper-slide", [], ["class", "myslide myslide-4"], 3, null, ["loc", [null, [35, 2], [35, 69]]]], ["block", "swiper-slide", [], ["class", "myslide myslide-5"], 4, null, ["loc", [null, [36, 2], [36, 69]]]]],
        locals: [],
        templates: [child0, child1, child2, child3, child4]
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 52,
                "column": 2
              },
              "end": {
                "line": 52,
                "column": 26
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 1");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 53,
                "column": 2
              },
              "end": {
                "line": 53,
                "column": 26
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 2");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 54,
                "column": 2
              },
              "end": {
                "line": 54,
                "column": 26
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 3");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 55,
                "column": 2
              },
              "end": {
                "line": 55,
                "column": 26
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 4");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child4 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 56,
                "column": 2
              },
              "end": {
                "line": 56,
                "column": 26
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 5");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.3",
          "loc": {
            "source": null,
            "start": {
              "line": 51,
              "column": 0
            },
            "end": {
              "line": 57,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(5);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          morphs[3] = dom.createMorphAt(fragment, 7, 7, contextualElement);
          morphs[4] = dom.createMorphAt(fragment, 9, 9, contextualElement);
          return morphs;
        },
        statements: [["block", "swiper-slide", [], [], 0, null, ["loc", [null, [52, 2], [52, 43]]]], ["block", "swiper-slide", [], [], 1, null, ["loc", [null, [53, 2], [53, 43]]]], ["block", "swiper-slide", [], [], 2, null, ["loc", [null, [54, 2], [54, 43]]]], ["block", "swiper-slide", [], [], 3, null, ["loc", [null, [55, 2], [55, 43]]]], ["block", "swiper-slide", [], [], 4, null, ["loc", [null, [56, 2], [56, 43]]]]],
        locals: [],
        templates: [child0, child1, child2, child3, child4]
      };
    })();
    var child3 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 72,
                "column": 2
              },
              "end": {
                "line": 72,
                "column": 26
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 1");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 73,
                "column": 2
              },
              "end": {
                "line": 73,
                "column": 26
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 2");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 74,
                "column": 2
              },
              "end": {
                "line": 74,
                "column": 26
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 3");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 75,
                "column": 2
              },
              "end": {
                "line": 75,
                "column": 26
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 4");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child4 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 76,
                "column": 2
              },
              "end": {
                "line": 76,
                "column": 26
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 5");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.3",
          "loc": {
            "source": null,
            "start": {
              "line": 71,
              "column": 0
            },
            "end": {
              "line": 77,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(5);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          morphs[3] = dom.createMorphAt(fragment, 7, 7, contextualElement);
          morphs[4] = dom.createMorphAt(fragment, 9, 9, contextualElement);
          return morphs;
        },
        statements: [["block", "swiper-slide", [], [], 0, null, ["loc", [null, [72, 2], [72, 43]]]], ["block", "swiper-slide", [], [], 1, null, ["loc", [null, [73, 2], [73, 43]]]], ["block", "swiper-slide", [], [], 2, null, ["loc", [null, [74, 2], [74, 43]]]], ["block", "swiper-slide", [], [], 3, null, ["loc", [null, [75, 2], [75, 43]]]], ["block", "swiper-slide", [], [], 4, null, ["loc", [null, [76, 2], [76, 43]]]]],
        locals: [],
        templates: [child0, child1, child2, child3, child4]
      };
    })();
    var child4 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 92,
                "column": 2
              },
              "end": {
                "line": 92,
                "column": 26
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 1");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 93,
                "column": 2
              },
              "end": {
                "line": 93,
                "column": 26
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 2");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 94,
                "column": 2
              },
              "end": {
                "line": 94,
                "column": 26
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 3");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 95,
                "column": 2
              },
              "end": {
                "line": 95,
                "column": 26
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 4");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child4 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 96,
                "column": 2
              },
              "end": {
                "line": 96,
                "column": 26
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 5");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.3",
          "loc": {
            "source": null,
            "start": {
              "line": 91,
              "column": 0
            },
            "end": {
              "line": 97,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(5);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          morphs[3] = dom.createMorphAt(fragment, 7, 7, contextualElement);
          morphs[4] = dom.createMorphAt(fragment, 9, 9, contextualElement);
          return morphs;
        },
        statements: [["block", "swiper-slide", [], [], 0, null, ["loc", [null, [92, 2], [92, 43]]]], ["block", "swiper-slide", [], [], 1, null, ["loc", [null, [93, 2], [93, 43]]]], ["block", "swiper-slide", [], [], 2, null, ["loc", [null, [94, 2], [94, 43]]]], ["block", "swiper-slide", [], [], 3, null, ["loc", [null, [95, 2], [95, 43]]]], ["block", "swiper-slide", [], [], 4, null, ["loc", [null, [96, 2], [96, 43]]]]],
        locals: [],
        templates: [child0, child1, child2, child3, child4]
      };
    })();
    var child5 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 114,
                "column": 2
              },
              "end": {
                "line": 114,
                "column": 26
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 1");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 115,
                "column": 2
              },
              "end": {
                "line": 115,
                "column": 26
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 2");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 116,
                "column": 2
              },
              "end": {
                "line": 116,
                "column": 26
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 3");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 117,
                "column": 2
              },
              "end": {
                "line": 117,
                "column": 26
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 4");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child4 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 118,
                "column": 2
              },
              "end": {
                "line": 118,
                "column": 26
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 5");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.3",
          "loc": {
            "source": null,
            "start": {
              "line": 113,
              "column": 0
            },
            "end": {
              "line": 119,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(5);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          morphs[3] = dom.createMorphAt(fragment, 7, 7, contextualElement);
          morphs[4] = dom.createMorphAt(fragment, 9, 9, contextualElement);
          return morphs;
        },
        statements: [["block", "swiper-slide", [], [], 0, null, ["loc", [null, [114, 2], [114, 43]]]], ["block", "swiper-slide", [], [], 1, null, ["loc", [null, [115, 2], [115, 43]]]], ["block", "swiper-slide", [], [], 2, null, ["loc", [null, [116, 2], [116, 43]]]], ["block", "swiper-slide", [], [], 3, null, ["loc", [null, [117, 2], [117, 43]]]], ["block", "swiper-slide", [], [], 4, null, ["loc", [null, [118, 2], [118, 43]]]]],
        locals: [],
        templates: [child0, child1, child2, child3, child4]
      };
    })();
    var child6 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 140,
                "column": 2
              },
              "end": {
                "line": 140,
                "column": 26
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 1");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 141,
                "column": 2
              },
              "end": {
                "line": 141,
                "column": 26
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 2");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 142,
                "column": 2
              },
              "end": {
                "line": 142,
                "column": 26
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 3");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 143,
                "column": 2
              },
              "end": {
                "line": 143,
                "column": 26
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 4");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child4 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 144,
                "column": 2
              },
              "end": {
                "line": 144,
                "column": 26
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 5");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.3",
          "loc": {
            "source": null,
            "start": {
              "line": 139,
              "column": 0
            },
            "end": {
              "line": 145,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(5);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          morphs[3] = dom.createMorphAt(fragment, 7, 7, contextualElement);
          morphs[4] = dom.createMorphAt(fragment, 9, 9, contextualElement);
          return morphs;
        },
        statements: [["block", "swiper-slide", [], [], 0, null, ["loc", [null, [140, 2], [140, 43]]]], ["block", "swiper-slide", [], [], 1, null, ["loc", [null, [141, 2], [141, 43]]]], ["block", "swiper-slide", [], [], 2, null, ["loc", [null, [142, 2], [142, 43]]]], ["block", "swiper-slide", [], [], 3, null, ["loc", [null, [143, 2], [143, 43]]]], ["block", "swiper-slide", [], [], 4, null, ["loc", [null, [144, 2], [144, 43]]]]],
        locals: [],
        templates: [child0, child1, child2, child3, child4]
      };
    })();
    var child7 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 171,
                "column": 2
              },
              "end": {
                "line": 171,
                "column": 52
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 1");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 172,
                "column": 2
              },
              "end": {
                "line": 172,
                "column": 52
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 2");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 173,
                "column": 2
              },
              "end": {
                "line": 173,
                "column": 52
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 3");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 174,
                "column": 2
              },
              "end": {
                "line": 174,
                "column": 52
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 4");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child4 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.3",
            "loc": {
              "source": null,
              "start": {
                "line": 175,
                "column": 2
              },
              "end": {
                "line": 175,
                "column": 52
              }
            },
            "moduleName": "dummy/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Slide 5");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.3",
          "loc": {
            "source": null,
            "start": {
              "line": 170,
              "column": 0
            },
            "end": {
              "line": 176,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(5);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          morphs[3] = dom.createMorphAt(fragment, 7, 7, contextualElement);
          morphs[4] = dom.createMorphAt(fragment, 9, 9, contextualElement);
          return morphs;
        },
        statements: [["block", "swiper-slide", [], ["class", "myslide myslide-1"], 0, null, ["loc", [null, [171, 2], [171, 69]]]], ["block", "swiper-slide", [], ["class", "myslide myslide-2"], 1, null, ["loc", [null, [172, 2], [172, 69]]]], ["block", "swiper-slide", [], ["class", "myslide myslide-3"], 2, null, ["loc", [null, [173, 2], [173, 69]]]], ["block", "swiper-slide", [], ["class", "myslide myslide-4"], 3, null, ["loc", [null, [174, 2], [174, 69]]]], ["block", "swiper-slide", [], ["class", "myslide myslide-5"], 4, null, ["loc", [null, [175, 2], [175, 69]]]]],
        locals: [],
        templates: [child0, child1, child2, child3, child4]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 221,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("This is a simple wrapper around ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "http://idangero.us/swiper/");
        var el3 = dom.createTextNode("Swiper");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  by idangerous which itself is a pritty slick, touch-enabled carousel-library.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("As this was created out of a particular requirement, only those swiper-options\n  have been ported, which were needed. If you would like to use anything else you\n  see on ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "http://idangero.us/swiper/demos/");
        var el3 = dom.createTextNode("their demos");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(", please create\n  a PullRequest or issue on github.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("Basic usage");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-container}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 1");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 2");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 3");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 4");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 5");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-container}}\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("Infinite + Pagination + extra classes");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-container pagination=true loop=true}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide class='myslide myslide-1'}}Slide 1");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide class='myslide myslide-2'}}Slide 2");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide class='myslide myslide-3'}}Slide 3");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide class='myslide myslide-4'}}Slide 4");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide class='myslide myslide-5'}}Slide 5");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-container}}\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("Vertical + Pagination");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-container pagination=true vertical=true}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 1");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 2");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 3");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 4");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 5");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-container}}\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("Vertical + Free & Sticky");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-container freeMode=true freeModeSticky=true vertical=true}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 1");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 2");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 3");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 4");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 5");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-container}}\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("Centered Slides + Pagination + Cursor");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-container grabCursor=true pagination=true centered=true slidesPerView=4 spaceBetween=5}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 1");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 2");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 3");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 4");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 5");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-container}}\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("Change Listener");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("The configured action receives the HTML-Element of the selected slide.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("textarea");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-container onChange='addToHistory'}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 1");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 2");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 3");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 4");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 5");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-container}}\n\n  <br>\n  <textarea>");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{selectionHistory}}</textarea>\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("2 way binded index");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1, "class", "btn btn--s btn--gray");
        dom.setAttribute(el1, "style", "float: right; cursor: pointer;");
        var el2 = dom.createTextNode("Go to 2");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\nCurrent Slideindex: ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-container currentSlide=currentSlide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 1");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 2");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 3");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 4");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 5");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-container}}\n\n  <br>\n  <a ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{action 'goToTwo'}} >Go to 2</a>\n  Current Slideindex: ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{currentSlide}}\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h4");
        var el2 = dom.createTextNode("¡ Atención, Atención !");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Please note that, in difference to a bare Swiper, this will always return ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("em");
        var el3 = dom.createTextNode("the correct");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  Index of the current slide. Even in loops.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("Current Slideindex: ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-container currentSlide=currentSlide2 loop=true centered=true slidesPerView=4}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 1");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 2");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 3");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 4");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 5");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-container}}\n  Current Slideindex: ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{currentSlide2}}\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("Triggering an update");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("If you find yourself adding/removing slides, you need to 'update' the swipe-container.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("You can do so by referencing a variable to observe for changes. This is usually your list of slides");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-container updateFor=propertyToWatch}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 1");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 2");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-container}}\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("Forcing an update/repaint directly");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Swiper as shown to be a little bit touchy when it comes to situations where you show it via css / manipulate\n  the container after initialization. For those scenarios you can force a refresh of the component via your\n  controller");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("forceUpdate()");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" also comes with an optional boolean parameter ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("updateTranslate");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" which\n  defaults to false. See ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "http://idangero.us/swiper/api/#methods");
        var el3 = dom.createTextNode("the Swiper docs");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" for more details.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("strong");
        var el2 = dom.createTextNode("Template");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        var el2 = dom.createTextNode("  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-container registerAs=superDuperSwiper}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 1");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{#swiper-slide}}Slide 2");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-slide}}\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("{{/swiper-container}}\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("strong");
        var el2 = dom.createTextNode("Controller");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        var el2 = dom.createTextNode("  modalHiddenOrSmthLikeThat() {\n    this.get('superDuperSwiper').forceUpdate();\n  }\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [52]);
        var morphs = new Array(12);
        morphs[0] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 12, 12, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 18, 18, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 24, 24, contextualElement);
        morphs[4] = dom.createMorphAt(fragment, 30, 30, contextualElement);
        morphs[5] = dom.createMorphAt(fragment, 38, 38, contextualElement);
        morphs[6] = dom.createMorphAt(dom.childAt(fragment, [42]), 0, 0);
        morphs[7] = dom.createMorphAt(fragment, 48, 48, contextualElement);
        morphs[8] = dom.createElementMorph(element0);
        morphs[9] = dom.createMorphAt(fragment, 54, 54, contextualElement);
        morphs[10] = dom.createMorphAt(fragment, 62, 62, contextualElement);
        morphs[11] = dom.createMorphAt(fragment, 64, 64, contextualElement);
        return morphs;
      },
      statements: [["block", "swiper-container", [], [], 0, null, ["loc", [null, [11, 0], [17, 21]]]], ["block", "swiper-container", [], ["pagination", true, "loop", true], 1, null, ["loc", [null, [31, 0], [37, 21]]]], ["block", "swiper-container", [], ["pagination", true, "vertical", true], 2, null, ["loc", [null, [51, 0], [57, 21]]]], ["block", "swiper-container", [], ["freeMode", true, "freeModeSticky", true, "vertical", true], 3, null, ["loc", [null, [71, 0], [77, 21]]]], ["block", "swiper-container", [], ["grabCursor", true, "pagination", true, "centered", true, "slidesPerView", 4, "spaceBetween", 5], 4, null, ["loc", [null, [91, 0], [97, 21]]]], ["block", "swiper-container", [], ["onChange", "addToHistory"], 5, null, ["loc", [null, [113, 0], [119, 21]]]], ["content", "selectionHistory", ["loc", [null, [122, 10], [122, 30]]]], ["block", "swiper-container", [], ["currentSlide", ["subexpr", "@mut", [["get", "currentSlide", ["loc", [null, [139, 33], [139, 45]]]]], [], []]], 6, null, ["loc", [null, [139, 0], [145, 21]]]], ["element", "action", ["goToTwo"], [], ["loc", [null, [148, 3], [148, 23]]]], ["content", "currentSlide", ["loc", [null, [149, 20], [149, 36]]]], ["block", "swiper-container", [], ["currentSlide", ["subexpr", "@mut", [["get", "currentSlide2", ["loc", [null, [170, 33], [170, 46]]]]], [], []], "loop", true, "centered", true, "slidesPerView", 4], 7, null, ["loc", [null, [170, 0], [176, 21]]]], ["content", "currentSlide2", ["loc", [null, [177, 20], [177, 37]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6, child7]
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("dummy/app")["default"].create({"name":"ember-cli-swiper","version":"0.2.4+77e32206"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map
