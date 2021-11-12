"use strict";



define('dummy/app', ['exports', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('dummy/components/swiper-container', ['exports', 'ember-cli-swiper/components/swiper-container'], function (exports, _swiperContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _swiperContainer.default;
    }
  });
});
define('dummy/components/swiper-slide', ['exports', 'ember-cli-swiper/components/swiper-slide'], function (exports, _swiperSlide) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _swiperSlide.default;
    }
  });
});
define('dummy/controllers/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    selectionHistory: '',
    currentSlide: 0,
    currentSlide2: 2,

    actions: {
      addToHistory(newElement) {
        this.set('selectionHistory', `${Ember.$(newElement).text()}${this.get('selectionHistory')}`);
      },

      goToTwo() {
        this.set('currentSlide', 2);
      },

      onSwiperEnd() {
        Ember.run.later(() => alert('End of slider'), 300);
      }
    }
  });
});
define('dummy/ember-cli-swiper/tests/addon.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | addon');

  QUnit.test('addon/components/swiper-container.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/swiper-container.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/swiper-slide.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/swiper-slide.js should pass ESLint\n\n');
  });
});
define('dummy/ember-cli-swiper/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app/components/swiper-container.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/swiper-container.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/swiper-slide.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/swiper-slide.js should pass ESLint\n\n');
  });
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/export-application-global', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('dummy/router', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  // jscs:disable disallowDirectPropertyAccess
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {});

  exports.default = Router;
});
define('dummy/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("dummy/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "56q/Snj/", "block": "{\"symbols\":[],\"statements\":[[6,\"a\"],[10,\"href\",\"https://github.com/Suven/ember-cli-swiper\"],[8],[6,\"img\"],[10,\"style\",\"position: absolute; top: 0; right: 0; border: 0;\"],[10,\"src\",\"https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67\"],[10,\"alt\",\"Fork me on GitHub\"],[10,\"data-canonical-src\",\"https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png\"],[8],[9],[9],[0,\"\\n\\n\"],[6,\"section\"],[10,\"class\",\"measure\"],[8],[0,\"\\n  \"],[6,\"h1\"],[8],[0,\"ember-cli-swiper\"],[9],[0,\"\\n  \"],[1,[20,\"outlet\"],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/application.hbs" } });
});
define("dummy/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "YGM1bVkM", "block": "{\"symbols\":[\"container\"],\"statements\":[[6,\"p\"],[8],[0,\"\\n  A simple wrapper around the touch-enabled carousel-library: \"],[6,\"a\"],[10,\"href\",\"http://idangero.us/swiper/\"],[8],[0,\"Swiper\"],[9],[0,\" by idangerous\\n\"],[9],[0,\"\\n\\n\"],[6,\"h3\"],[8],[0,\"Basic usage\"],[9],[0,\"\\n\\n\"],[4,\"swiper-container\",null,null,{\"statements\":[[0,\"  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 1\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 2\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 3\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 4\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 5\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[6,\"pre\"],[8],[0,\"\\n  \"],[0,\"{{#swiper-container}}\\n    \"],[0,\"{{#swiper-slide}}Slide 1\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 2\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 3\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 4\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 5\"],[0,\"{{/swiper-slide}}\\n  \"],[0,\"{{/swiper-container}}\\n\"],[9],[0,\"\\n\\n\"],[6,\"h3\"],[8],[0,\"Speedy Gonswiper\"],[9],[0,\"\\n\\n\"],[4,\"swiper-container\",null,[[\"speed\"],[100]],{\"statements\":[[0,\"  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 1\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 2\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 3\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 4\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 5\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[6,\"pre\"],[8],[0,\"\\n  \"],[0,\"{{#swiper-container speed=100}}\\n    \"],[0,\"{{#swiper-slide}}Slide 1\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 2\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 3\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 4\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 5\"],[0,\"{{/swiper-slide}}\\n  \"],[0,\"{{/swiper-container}}\\n\"],[9],[0,\"\\n\\n\"],[6,\"h3\"],[8],[0,\"Swiper Events\"],[9],[0,\"\\n\\n\"],[4,\"swiper-container\",null,[[\"events\"],[[26,\"hash\",null,[[\"reachEnd\"],[[26,\"action\",[[21,0,[]],\"onSwiperEnd\"],null]]]]]],{\"statements\":[[0,\"  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Start\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"End\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[6,\"pre\"],[8],[0,\"\\n  \"],[0,\"{{#swiper-container events=(hash reachEnd=(action \\\"onSwiperEnd\\\"))}}\\n    \"],[0,\"{{#swiper-slide}}Start\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}End\"],[0,\"{{/swiper-slide}}\\n  \"],[0,\"{{/swiper-container}}\\n\"],[9],[0,\"\\n\\n\"],[6,\"h3\"],[8],[0,\"Default Navigation\"],[9],[0,\"\\n\"],[4,\"swiper-container\",null,[[\"navigation\"],[true]],{\"statements\":[[0,\"  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 1\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 2\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 3\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[6,\"pre\"],[8],[0,\"\\n  \"],[0,\"{{#swiper-container navigation=true}}\\n    \"],[0,\"{{#swiper-slide}}Slide 1\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 2\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 3\"],[0,\"{{/swiper-slide}}\\n  \"],[0,\"{{/swiper-container}}\\n\"],[9],[0,\"\\n\\n\"],[6,\"h3\"],[8],[0,\"Infinite + Pagination\"],[9],[0,\"\\n\\n\"],[4,\"swiper-container\",null,[[\"pagination\",\"loop\"],[true,true]],{\"statements\":[[0,\"  \"],[4,\"swiper-slide\",null,[[\"class\"],[\"myslide myslide-1\"]],{\"statements\":[[0,\"Slide 1\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,[[\"class\"],[\"myslide myslide-2\"]],{\"statements\":[[0,\"Slide 2\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,[[\"class\"],[\"myslide myslide-3\"]],{\"statements\":[[0,\"Slide 3\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,[[\"class\"],[\"myslide myslide-4\"]],{\"statements\":[[0,\"Slide 4\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,[[\"class\"],[\"myslide myslide-5\"]],{\"statements\":[[0,\"Slide 5\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[6,\"pre\"],[8],[0,\"\\n  \"],[0,\"{{#swiper-container pagination=true loop=true}}\\n    \"],[0,\"{{#swiper-slide class='myslide myslide-1'}}Slide 1\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide class='myslide myslide-2'}}Slide 2\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide class='myslide myslide-3'}}Slide 3\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide class='myslide myslide-4'}}Slide 4\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide class='myslide myslide-5'}}Slide 5\"],[0,\"{{/swiper-slide}}\\n  \"],[0,\"{{/swiper-container}}\\n\"],[9],[0,\"\\n\\n\"],[6,\"h3\"],[8],[0,\"Vertical + Pagination\"],[9],[0,\"\\n\\n\"],[4,\"swiper-container\",null,[[\"pagination\",\"vertical\"],[true,true]],{\"statements\":[[0,\"  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 1\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 2\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 3\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 4\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 5\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[6,\"pre\"],[8],[0,\"\\n  \"],[0,\"{{#swiper-container pagination=true vertical=true}}\\n    \"],[0,\"{{#swiper-slide}}Slide 1\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 2\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 3\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 4\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 5\"],[0,\"{{/swiper-slide}}\\n  \"],[0,\"{{/swiper-container}}\\n\"],[9],[0,\"\\n\\n\"],[6,\"h3\"],[8],[0,\"Vertical + Free & Sticky\"],[9],[0,\"\\n\\n\"],[4,\"swiper-container\",null,[[\"freeMode\",\"freeModeSticky\",\"vertical\"],[true,true,true]],{\"statements\":[[0,\"  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 1\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 2\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 3\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 4\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 5\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[6,\"pre\"],[8],[0,\"\\n  \"],[0,\"{{#swiper-container freeMode=true freeModeSticky=true vertical=true}}\\n    \"],[0,\"{{#swiper-slide}}Slide 1\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 2\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 3\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 4\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 5\"],[0,\"{{/swiper-slide}}\\n  \"],[0,\"{{/swiper-container}}\\n\"],[9],[0,\"\\n\\n\"],[6,\"h3\"],[8],[0,\"Centered Slides + Pagination + Cursor\"],[9],[0,\"\\n\\n\"],[4,\"swiper-container\",null,[[\"grabCursor\",\"pagination\",\"centered\",\"slidesPerView\",\"spaceBetween\"],[true,true,true,4,5]],{\"statements\":[[0,\"  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 1\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 2\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 3\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 4\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 5\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[6,\"pre\"],[8],[0,\"\\n  \"],[0,\"{{#swiper-container grabCursor=true pagination=true centered=true slidesPerView=4 spaceBetween=5}}\\n    \"],[0,\"{{#swiper-slide}}Slide 1\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 2\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 3\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 4\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 5\"],[0,\"{{/swiper-slide}}\\n  \"],[0,\"{{/swiper-container}}\\n\"],[9],[0,\"\\n\\n\"],[6,\"h3\"],[8],[0,\"Keyboard + Mousewheel Control\"],[9],[0,\"\\n\\n\"],[4,\"swiper-container\",null,[[\"keyboard\",\"mousewheel\",\"slidesPerView\"],[true,true,2]],{\"statements\":[[0,\"  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 1\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 2\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 3\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 4\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 5\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[6,\"pre\"],[8],[0,\"\\n  \"],[0,\"{{#swiper-container keyboard=true mousewheel=true slidesPerView=2}}\\n    \"],[0,\"{{#swiper-slide}}Slide 1\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 2\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 3\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 4\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 5\"],[0,\"{{/swiper-slide}}\\n  \"],[0,\"{{/swiper-container}}\\n\"],[9],[0,\"\\n\\n\"],[6,\"h3\"],[8],[0,\"Change Listener\"],[9],[0,\"\\n\\n\"],[6,\"p\"],[8],[0,\"The configured action receives the HTML-Element of the selected slide.\"],[9],[0,\"\\n\\n\"],[4,\"swiper-container\",null,[[\"onChange\"],[[26,\"action\",[[21,0,[]],\"addToHistory\"],null]]],{\"statements\":[[0,\"  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 1\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 2\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 3\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 4\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 5\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[6,\"br\"],[8],[9],[0,\"\\n\"],[6,\"textarea\"],[8],[1,[20,\"selectionHistory\"],false],[9],[0,\"\\n\\n\"],[6,\"pre\"],[8],[0,\"\\n  \"],[0,\"{{#swiper-container onChange=(action 'addToHistory')}}\\n    \"],[0,\"{{#swiper-slide}}Slide 1\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 2\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 3\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 4\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 5\"],[0,\"{{/swiper-slide}}\\n  \"],[0,\"{{/swiper-container}}\\n\\n  <br>\\n  <textarea>\"],[0,\"{{selectionHistory}}</textarea>\\n\"],[9],[0,\"\\n\\n\"],[6,\"h3\"],[8],[0,\"2 way binded index\"],[9],[0,\"\\n\\n\"],[4,\"swiper-container\",null,[[\"currentSlide\"],[[22,[\"currentSlide\"]]]],{\"statements\":[[0,\"  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 1\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 2\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 3\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 4\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"Slide 5\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[6,\"br\"],[8],[9],[0,\"\\n\"],[6,\"a\"],[10,\"class\",\"btn btn--s btn--gray\"],[10,\"style\",\"float: right; cursor: pointer;\"],[3,\"action\",[[21,0,[]],\"goToTwo\"]],[8],[0,\"Go to 2\"],[9],[0,\"\\nCurrent Slideindex: \"],[1,[20,\"currentSlide\"],false],[0,\"\\n\\n\"],[6,\"pre\"],[8],[0,\"\\n  \"],[0,\"{{#swiper-container currentSlide=currentSlide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 1\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 2\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 3\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 4\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 5\"],[0,\"{{/swiper-slide}}\\n  \"],[0,\"{{/swiper-container}}\\n\\n  <br>\\n  <a \"],[0,\"{{action 'goToTwo'}} >Go to 2</a>\\n  Current Slideindex: \"],[0,\"{{currentSlide}}\\n\"],[9],[0,\"\\n\\n\"],[6,\"h4\"],[8],[0,\"¡ Atención, Atención !\"],[9],[0,\"\\n\\n\"],[6,\"p\"],[8],[0,\"Please note that, in difference to a bare Swiper, this will always return \"],[6,\"em\"],[8],[0,\"the correct\"],[9],[0,\"\\n  Index of the current slide. Even in loops.\"],[9],[0,\"\\n\\n\"],[4,\"swiper-container\",null,[[\"currentSlide\",\"loop\",\"centered\",\"slidesPerView\"],[[22,[\"currentSlide2\"]],true,true,4]],{\"statements\":[[0,\"  \"],[4,\"swiper-slide\",null,[[\"class\"],[\"myslide myslide-1\"]],{\"statements\":[[0,\"Slide 1\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,[[\"class\"],[\"myslide myslide-2\"]],{\"statements\":[[0,\"Slide 2\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,[[\"class\"],[\"myslide myslide-3\"]],{\"statements\":[[0,\"Slide 3\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,[[\"class\"],[\"myslide myslide-4\"]],{\"statements\":[[0,\"Slide 4\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"swiper-slide\",null,[[\"class\"],[\"myslide myslide-5\"]],{\"statements\":[[0,\"Slide 5\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"Current Slideindex: \"],[1,[20,\"currentSlide2\"],false],[0,\"\\n\\n\"],[6,\"pre\"],[8],[0,\"\\n  \"],[0,\"{{#swiper-container currentSlide=currentSlide2 loop=true centered=true slidesPerView=4}}\\n    \"],[0,\"{{#swiper-slide}}Slide 1\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 2\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 3\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 4\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 5\"],[0,\"{{/swiper-slide}}\\n  \"],[0,\"{{/swiper-container}}\\n  Current Slideindex: \"],[0,\"{{currentSlide2}}\\n\"],[9],[0,\"\\n\\n\"],[6,\"h3\"],[8],[0,\"Triggering an update\"],[9],[0,\"\\n\"],[6,\"p\"],[8],[0,\"If you find yourself adding/removing slides, you need to 'update' the swipe-container.\"],[9],[0,\"\\n\"],[6,\"p\"],[8],[0,\"You can do so by referencing a variable to observe for changes. This is usually your list of slides\"],[9],[0,\"\\n\\n\"],[6,\"pre\"],[8],[0,\"\\n  \"],[0,\"{{#swiper-container updateFor=propertyToWatch}}\\n    \"],[0,\"{{#swiper-slide}}Slide 1\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 2\"],[0,\"{{/swiper-slide}}\\n  \"],[0,\"{{/swiper-container}}\\n\"],[9],[0,\"\\n\\n\"],[6,\"h3\"],[8],[0,\"Forcing an update/repaint directly\"],[9],[0,\"\\n\"],[6,\"p\"],[8],[0,\"Swiper as shown to be a little bit touchy when it comes to situations where you show it via css / manipulate\\n  the container after initialization. For those scenarios you can force a refresh of the component via your\\n  controller\"],[9],[0,\"\\n\\n\"],[6,\"p\"],[8],[6,\"code\"],[8],[0,\"forceUpdate()\"],[9],[0,\" also comes with an optional boolean parameter \"],[6,\"code\"],[8],[0,\"updateTranslate\"],[9],[0,\" which\\n  defaults to false. See \"],[6,\"a\"],[10,\"href\",\"http://idangero.us/swiper/api/#methods\"],[8],[0,\"the Swiper docs\"],[9],[0,\" for more details.\"],[9],[0,\"\\n\\n\"],[6,\"strong\"],[8],[0,\"Template\"],[9],[0,\"\\n\"],[6,\"pre\"],[8],[0,\"  \"],[0,\"{{#swiper-container registerAs=superDuperSwiper}}\\n    \"],[0,\"{{#swiper-slide}}Slide 1\"],[0,\"{{/swiper-slide}}\\n    \"],[0,\"{{#swiper-slide}}Slide 2\"],[0,\"{{/swiper-slide}}\\n  \"],[0,\"{{/swiper-container}}\\n\"],[9],[0,\"\\n\\n\"],[6,\"strong\"],[8],[0,\"Controller\"],[9],[0,\"\\n\"],[6,\"pre\"],[8],[0,\"  modalHiddenOrSmthLikeThat() {\\n    this.get('superDuperSwiper').forceUpdate();\\n  }\\n\"],[9],[0,\"\\n\\n\"],[6,\"h3\"],[8],[0,\"Contextual Slides\"],[9],[0,\"\\n\\n\"],[4,\"swiper-container\",null,null,{\"statements\":[[0,\"  \"],[4,\"component\",[[21,1,[\"slide\"]]],null,{\"statements\":[[0,\"Slide 1\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"component\",[[21,1,[\"slide\"]]],null,{\"statements\":[[0,\"Slide 2\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n\"],[6,\"pre\"],[8],[0,\"\\n  \"],[0,\"{{#swiper-container as |container|}}\\n    \"],[0,\"{{#container.slide}}Slide 1\"],[0,\"{{/container.slide}}\\n    \"],[0,\"{{#container.slide}}Slide 2\"],[0,\"{{/container.slide}}\\n  \"],[0,\"{{/swiper-container}}\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/index.hbs" } });
});


define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("dummy/app")["default"].create({});
}
//# sourceMappingURL=dummy.map
