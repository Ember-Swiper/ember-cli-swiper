'use strict';

define('dummy/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
});
define('dummy/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    // jscs:disable disallowDirectPropertyAccess
    Ember.run(application, 'destroy');
  }
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name, options = {}) {
    (0, _qunit.module)(name, {
      beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          // jscs:disable requireSpread
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach() {
        let afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(() => (0, _destroyApp.default)(this.application));
      }
    });
  };
});
define('dummy/tests/helpers/start-app', ['exports', 'dummy/app', 'dummy/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    // jscs:disable disallowDirectPropertyAccess
    let attributes = Ember.merge({}, _environment.default.APP);

    // jscs:disable disallowDirectPropertyAccess
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    // jscs:disable disallowDirectPropertyAccess
    return Ember.run(() => {
      let application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('dummy/tests/integration/components/swiper-container-test', ['@ember/test-helpers', 'qunit', 'ember-qunit', 'sinon'], function (_testHelpers, _qunit, _emberQunit, _sinon) {
  'use strict';

  (0, _qunit.module)('Integration | Component | swiper container', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    hooks.beforeEach(function () {
      this.actions = {};
      this.send = (actionName, ...args) => this.actions[actionName].apply(this, args);
    });

    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "ld0i0O6J",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"swiper-container\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "4Jbo4HFa",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"swiper-container\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
    });

    (0, _qunit.test)('it set `noSwiping` via attribute and `options`', async function (assert) {
      let expected = false;

      this.set('noSwiping', expected);
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "s6DOLlle",
        "block": "{\"symbols\":[],\"statements\":[[1,[26,\"swiper-container\",null,[[\"noSwiping\",\"registerAs\"],[[22,[\"noSwiping\"]],[22,[\"componentInstanceAttr\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.strictEqual(this.get('componentInstanceAttr._swiper.params.noSwiping'), expected, 'Swiper instance `noSwiping` configured by `noSwiping` attribute');

      this.set('options', { noSwiping: expected });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "w11eZs6e",
        "block": "{\"symbols\":[],\"statements\":[[1,[26,\"swiper-container\",null,[[\"options\",\"registerAs\"],[[22,[\"options\"]],[22,[\"componentInstanceOpts\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.strictEqual(this.get('componentInstanceOpts._swiper.params.noSwiping'), expected, 'Swiper instance `noSwiping` configured by `options.noSwiping`');
    });

    (0, _qunit.test)('it should allow attributes to overwrite `options`', async function (assert) {
      let expected = 'fade';

      this.set('effect', expected);
      this.set('options', { effect: 'cube' });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "u4GrmRlj",
        "block": "{\"symbols\":[],\"statements\":[[1,[26,\"swiper-container\",null,[[\"effect\",\"options\",\"registerAs\"],[[22,[\"effect\"]],[22,[\"options\"]],[22,[\"componentInstanceAttr\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.strictEqual(this.get('componentInstanceAttr._swiper.params.effect'), expected, 'Swiper instance configured by attribute not `options`');
    });

    (0, _qunit.test)('predefined classes are added', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "ld0i0O6J",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"swiper-container\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.ok((0, _testHelpers.find)('.swiper-container'));
    });

    (0, _qunit.test)('contains the wrapper', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "3mk7wC9Q",
        "block": "{\"symbols\":[],\"statements\":[[1,[26,\"swiper-container\",null,[[\"id\"],[\"swp-container\"]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.ok((0, _testHelpers.find)('#swp-container').querySelector('.swiper-wrapper'));
    });

    (0, _qunit.test)('pagination node is present if requested', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "CvnT2sw9",
        "block": "{\"symbols\":[],\"statements\":[[1,[26,\"swiper-container\",null,[[\"id\",\"pagination\"],[\"swp-container\",false]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.notOk((0, _testHelpers.find)('#swp-container').querySelector('.swiper-pagination'), 'pagination not rendered');

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "/Olmt9R7",
        "block": "{\"symbols\":[],\"statements\":[[1,[26,\"swiper-container\",null,[[\"id\",\"pagination\"],[\"swp-container\",true]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.ok((0, _testHelpers.find)('#swp-container').querySelector('.swiper-pagination'), 'pagination is rendered');

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "peYYGnbB",
        "block": "{\"symbols\":[],\"statements\":[[1,[26,\"swiper-container\",null,[[\"pagination\"],[\".custom-pagination\"]]],false],[6,\"div\"],[10,\"class\",\"custom-pagination\"],[8],[9]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.ok((0, _testHelpers.find)('.custom-pagination').classList.contains('swiper-pagination-clickable'), 'custom pagination element selector configured');

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "xhIboplg",
        "block": "{\"symbols\":[],\"statements\":[[1,[26,\"swiper-container\",null,[[\"pagination\"],[[26,\"hash\",null,[[\"el\"],[\".custom-pagination\"]]]]]],false],[6,\"div\"],[10,\"class\",\"custom-pagination\"],[8],[9]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.ok((0, _testHelpers.find)('.custom-pagination').classList.contains('swiper-pagination-clickable'), 'custom pagination object element selector configured');

      this.set('opts', { pagination: { type: 'progressbar' } });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "aUwIYs5Y",
        "block": "{\"symbols\":[],\"statements\":[[1,[26,\"swiper-container\",null,[[\"id\",\"options\"],[\"swp-container\",[22,[\"opts\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.ok((0, _testHelpers.find)('#swp-container').querySelector('.swiper-pagination-progressbar'), 'pagination object rendered');
    });

    (0, _qunit.test)('navigation buttons are present if requested', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "aQLDLXI0",
        "block": "{\"symbols\":[],\"statements\":[[1,[26,\"swiper-container\",null,[[\"id\",\"navigation\"],[\"swp-container\",false]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.notOk((0, _testHelpers.find)('#swp-container').querySelector('.swiper-button-next'));
      assert.notOk((0, _testHelpers.find)('#swp-container').querySelector('.swiper-button-prev'));

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "Ku7gUX0R",
        "block": "{\"symbols\":[],\"statements\":[[1,[26,\"swiper-container\",null,[[\"id\",\"navigation\"],[\"swp-container\",true]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.ok((0, _testHelpers.find)('#swp-container').querySelector('.swiper-button-next'));
      assert.ok((0, _testHelpers.find)('#swp-container').querySelector('.swiper-button-prev'));

      this.set('opts', { navigation: true });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "aUwIYs5Y",
        "block": "{\"symbols\":[],\"statements\":[[1,[26,\"swiper-container\",null,[[\"id\",\"options\"],[\"swp-container\",[22,[\"opts\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.ok((0, _testHelpers.find)('#swp-container').querySelector('.swiper-button-next'));
      assert.ok((0, _testHelpers.find)('#swp-container').querySelector('.swiper-button-prev'));
    });

    (0, _qunit.test)('it supports `effect` attribute', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "AvvsYfEK",
        "block": "{\"symbols\":[],\"statements\":[[1,[26,\"swiper-container\",null,[[\"id\",\"effect\"],[\"swp-container\",\"fade\"]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.ok((0, _testHelpers.find)('#swp-container.swiper-container-fade'), 'Container has `fade` class');
    });

    (0, _qunit.test)('it destroys the Swiper instance when component element destroyed', async function (assert) {
      assert.expect(2);
      this.set('componentInstance', null);
      this.set('active', true);

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "QnPCQOLs",
        "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[22,[\"active\"]]],null,{\"statements\":[[1,[26,\"swiper-container\",null,[[\"registerAs\"],[[22,[\"componentInstance\"]]]]],false]],\"parameters\":[]},null]],\"hasEval\":false}",
        "meta": {}
      }));

      Ember.run(() => {
        let componentInstance = this.get('componentInstance');
        assert.ok(componentInstance._swiper, 'Swiper intantiated');

        _sinon.default.stub(componentInstance._swiper, 'destroy').callsFake(() => assert.ok(true, 'destroy was called')).callThrough();

        this.set('active', false);
      });
    });

    (0, _qunit.test)('it removes all `slideChangeTransitionEnd` handlers when component element destroyed', async function (assert) {
      this.set('componentInstance', null);
      this.set('rendered', true);

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "D0ni9bvZ",
        "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[22,[\"rendered\"]]],null,{\"statements\":[[1,[26,\"swiper-container\",null,[[\"registerAs\"],[[22,[\"componentInstance\"]]]]],false]],\"parameters\":[]},null]],\"hasEval\":false}",
        "meta": {}
      }));

      let componentInstance = this.get('componentInstance');
      let swiperInstance = componentInstance._swiper;
      let originalDestroy = swiperInstance.destroy;
      let originalSwiperOff = swiperInstance.off;

      swiperInstance.off = (evt, ...args) => {
        if (evt === 'slideChangeTransitionEnd') {
          assert.ok(true, 'slideChangeTransitionEnd');
        }
        originalSwiperOff.apply(swiperInstance, [evt, ...args]);
      };

      swiperInstance.destroy = (...args) => {
        swiperInstance.off = originalSwiperOff;
        swiperInstance.destroy = originalDestroy;
        originalDestroy.apply(swiperInstance, ...args);
      };

      this.set('rendered', false); // trigger swipper destroy
    });

    (0, _qunit.test)('it yields a slide component', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "8oyd66OH",
        "block": "{\"symbols\":[\"container\"],\"statements\":[[4,\"swiper-container\",null,null,{\"statements\":[[1,[21,1,[\"slide\"]],false]],\"parameters\":[1]},null]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal((0, _testHelpers.findAll)('.swiper-slide').length, 1, 'renders a single slide');
    });

    (0, _qunit.test)('it activates the slide at index `currentSlide` on render', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "no2asbK2",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"swiper-container\",null,[[\"currentSlide\"],[1]],{\"statements\":[[0,\"        \"],[1,[20,\"swiper-slide\"],false],[0,\"\\n        \"],[1,[20,\"swiper-slide\"],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
        "meta": {}
      }));

      let lastSlide = Array.from((0, _testHelpers.findAll)('.swiper-slide')).pop();

      assert.ok(lastSlide && lastSlide.classList.contains('swiper-slide-active'), 'set slide at index 1 to active');
    });

    (0, _qunit.test)('it updates the active slide when `currentSlide` is updated', async function (assert) {
      this.set('currentSlide', 0);

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "cLJ6F7pt",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"swiper-container\",null,[[\"currentSlide\"],[[22,[\"currentSlide\"]]]],{\"statements\":[[0,\"        \"],[1,[20,\"swiper-slide\"],false],[0,\"\\n        \"],[1,[20,\"swiper-slide\"],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
        "meta": {}
      }));

      this.set('currentSlide', 1);

      let lastSlide = Array.from((0, _testHelpers.findAll)('.swiper-slide')).pop();

      assert.ok(lastSlide && lastSlide.classList.contains('swiper-slide-active'), 'set slide at index 1 to active');
    });

    (0, _qunit.test)('it triggers `swiper.update()` when `updateFor` is updated', async function (assert) {
      this.set('updateFor', '');
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "19hc/H2Q",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[1,[26,\"swiper-container\",null,[[\"updateFor\",\"registerAs\"],[[22,[\"updateFor\"]],[22,[\"componentInstance\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));

      let componentInstance = this.get('componentInstance');

      _sinon.default.stub(componentInstance._swiper, 'update').callsFake(() => assert.ok(true, 'called swiper.update')).callThrough();

      this.set('updateFor', 'updateTranslate');
    });

    (0, _qunit.test)('it updates the `currentSlide` when viewing and removing the last item', async function (assert) {
      this.set('itemList', ['item-1', 'item-2']);

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "595je4iD",
        "block": "{\"symbols\":[\"item\"],\"statements\":[[0,\"\\n\"],[4,\"swiper-container\",null,[[\"navigation\",\"updateFor\",\"currentSlide\"],[true,[22,[\"itemList\"]],[22,[\"currentSlide\"]]]],{\"statements\":[[4,\"each\",[[22,[\"itemList\"]]],null,{\"statements\":[[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"            \"],[6,\"p\"],[11,\"class\",[27,[[21,1,[]]]]],[8],[1,[21,1,[]],false],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      await (0, _testHelpers.click)('.swiper-button-next');
      await (0, _testHelpers.waitFor)('.swiper-slide-active .item-2');

      this.set('itemList', ['item-1']);
      await (0, _testHelpers.waitFor)('.swiper-slide-active .item-1');

      assert.equal(this.get('currentSlide'), 0);
    });

    (0, _qunit.test)('it subscribes `events` actions map as Swiper events', async function (assert) {
      this.actions.onBeforeDestroy = () => assert.ok(true);

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "s1xToYQO",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[1,[26,\"swiper-container\",null,[[\"events\"],[[26,\"hash\",null,[[\"beforeDestroy\"],[[26,\"action\",[[21,0,[]],\"onBeforeDestroy\"],null]]]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
    });

    (0, _qunit.test)('it supports manual swiper initialization when `init` event configured', async function (assert) {
      this.set('componentInstance', null);
      this.actions.onInit = () => assert.ok(true, 'invoked init handler');

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "W01Zwafq",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[1,[26,\"swiper-container\",null,[[\"registerAs\",\"events\"],[[22,[\"componentInstance\"]],[26,\"hash\",null,[[\"init\"],[[26,\"action\",[[21,0,[]],\"onInit\"],null]]]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
    });

    (0, _qunit.test)('it triggers `autoplay` with custom `currentSlide`', async function (assert) {
      let run = false;

      this.actions.onAutoplay = () => {
        if (run) {
          return true;
        }

        let lastSlide = Array.from((0, _testHelpers.findAll)('.swiper-slide')).pop();

        assert.ok(lastSlide && lastSlide.classList.contains('swiper-slide-active'), 'set slide at index 2 to active');

        run = true;
      };

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "ALRn/t6e",
        "block": "{\"symbols\":[\"sc\"],\"statements\":[[0,\"\\n\"],[4,\"swiper-container\",null,[[\"autoplay\",\"currentSlide\",\"events\"],[[26,\"hash\",null,[[\"delay\"],[10]]],1,[26,\"hash\",null,[[\"autoplay\"],[[26,\"action\",[[21,0,[]],\"onAutoplay\"],null]]]]]],{\"statements\":[[0,\"        \"],[1,[20,\"swiper-slide\"],false],[0,\"\\n        \"],[1,[20,\"swiper-slide\"],false],[0,\"\\n        \"],[1,[20,\"swiper-slide\"],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
    });

    (0, _qunit.test)('it exposes default swiper navigation controls to `navigation=true`', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "3B2KZ0in",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"swiper-container\",null,[[\"navigation\"],[true]],{\"statements\":[[0,\"        \"],[1,[20,\"swiper-slide\"],false],[0,\"\\n        \"],[1,[20,\"swiper-slide\"],false],[0,\"\\n        \"],[1,[20,\"swiper-slide\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.ok((0, _testHelpers.find)('.swiper-button-next'), 'rendered nav next button');
      assert.ok((0, _testHelpers.find)('.swiper-button-prev'), 'rendered nav prev button');

      let slides = Array.from((0, _testHelpers.findAll)('.swiper-slide'));

      await (0, _testHelpers.click)('.swiper-button-next');

      assert.ok(slides[1].classList.contains('swiper-slide-active'), 'next button click handled');

      await (0, _testHelpers.click)('.swiper-button-prev');

      assert.ok(slides[0].classList.contains('swiper-slide-active'), 'previous button click handled');
    });

    (0, _qunit.test)('it applies custom navigation hash of control selectors', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "xV17OurY",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"swiper-container\",null,[[\"navigation\"],[[26,\"hash\",null,[[\"nextEl\",\"prevEl\"],[\".is-next\",\".is-last\"]]]]],{\"statements\":[[0,\"        \"],[1,[20,\"swiper-slide\"],false],[0,\"\\n        \"],[1,[20,\"swiper-slide\"],false],[0,\"\\n        \"],[1,[20,\"swiper-slide\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.ok((0, _testHelpers.find)('.is-next'), 'rendered custom nav next button');
      assert.ok((0, _testHelpers.find)('.is-last'), 'rendered custom nav prev button');
    });

    (0, _qunit.test)('it applies custom `navigation.disabledClass`', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "J/Qw1MZ7",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"swiper-container\",null,[[\"navigation\"],[[26,\"hash\",null,[[\"disabledClass\"],[\"is-disabled\"]]]]],{\"statements\":[[0,\"        \"],[1,[20,\"swiper-slide\"],false],[0,\"\\n        \"],[1,[20,\"swiper-slide\"],false],[0,\"\\n        \"],[1,[20,\"swiper-slide\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.ok((0, _testHelpers.find)('.is-disabled'), 'rendered custom disabled class');
    });

    (0, _qunit.test)('it provides swiper instance as context of `update`', async function (assert) {
      this.set('updateForValue', '');
      this.set('componentInstance', null);

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "upw4TSay",
        "block": "{\"symbols\":[],\"statements\":[[1,[26,\"swiper-container\",null,[[\"registerAs\",\"updateFor\"],[[22,[\"componentInstance\"]],[22,[\"updateForValue\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));

      let swiperInstance = this.get('componentInstance._swiper');
      let originalUpdate = swiperInstance.update;
      swiperInstance.update = function () {
        assert.strictEqual(this, swiperInstance, 'update invoked with swiper context');
        swiperInstance.update = originalUpdate;
      };

      this.set('updateForValue', 'trigger update');
    });
  });
});
define('dummy/tests/integration/components/swiper-slide-test', ['@ember/test-helpers', 'qunit', 'ember-qunit'], function (_testHelpers, _qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Integration | Component | swiper slide', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "0rLGX6Q2",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"swiper-slide\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "IXJ+SVpd",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
    });

    (0, _qunit.test)('predefined classes are added', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "uZcW51+R",
        "block": "{\"symbols\":[],\"statements\":[[1,[26,\"swiper-slide\",null,[[\"id\"],[\"slide\"]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.ok((0, _testHelpers.find)('#slide').classList.contains('swiper-slide'));

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "hTXVGqB8",
        "block": "{\"symbols\":[],\"statements\":[[1,[26,\"swiper-slide\",null,[[\"id\",\"class\"],[\"slide\",\"foo bar\"]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.ok((0, _testHelpers.find)('#slide').classList.contains('swiper-slide'));
    });

    (0, _qunit.test)('own classes are added', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "hTXVGqB8",
        "block": "{\"symbols\":[],\"statements\":[[1,[26,\"swiper-slide\",null,[[\"id\",\"class\"],[\"slide\",\"foo bar\"]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.ok((0, _testHelpers.find)('#slide').classList.contains('foo'));
      assert.ok((0, _testHelpers.find)('#slide').classList.contains('bar'));
    });
  });
});
define('dummy/tests/test-helper', ['dummy/app', 'dummy/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('dummy/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/swiper-container-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/swiper-container-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/swiper-slide-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/swiper-slide-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
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

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
