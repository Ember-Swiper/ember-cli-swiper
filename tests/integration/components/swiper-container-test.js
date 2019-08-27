import { find, findAll, render, click, waitFor } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';
import { run } from '@ember/runloop';

module('Integration | Component | swiper container', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.actions = {};
    this.send = (actionName, ...args) =>
      this.actions[actionName].apply(this, args);
  });

  test('it renders', async function(assert) {
    await render(hbs`{{swiper-container}}`);
    assert.equal(find('*').textContent.trim(), '');

    await render(hbs`
      {{#swiper-container}}
        template block text
      {{/swiper-container}}
    `);
    assert.equal(find('*').textContent.trim(), 'template block text');
  });

  test('it set `noSwiping` via attribute and `options`', async function(assert) {
    let expected = false;

    this.set('noSwiping', expected);
    await render(
      hbs`{{swiper-container noSwiping=noSwiping registerAs=componentInstanceAttr}}`
    );

    assert.strictEqual(
      this.get('componentInstanceAttr._swiper.params.noSwiping'),
      expected,
      'Swiper instance `noSwiping` configured by `noSwiping` attribute'
    );

    this.set('options', { noSwiping: expected });
    await render(
      hbs`{{swiper-container options=options registerAs=componentInstanceOpts}}`
    );

    assert.strictEqual(
      this.get('componentInstanceOpts._swiper.params.noSwiping'),
      expected,
      'Swiper instance `noSwiping` configured by `options.noSwiping`'
    );
  });

  test('it should allow attributes to overwrite `options`', async function(assert) {
    let expected = 'fade';

    this.set('effect', expected);
    this.set('options', { effect: 'cube' });
    await render(
      hbs`{{swiper-container effect=effect options=options registerAs=componentInstanceAttr}}`
    );

    assert.strictEqual(
      this.get('componentInstanceAttr._swiper.params.effect'),
      expected,
      'Swiper instance configured by attribute not `options`'
    );
  });

  test('predefined classes are added', async function(assert) {
    await render(hbs`{{swiper-container}}`);
    assert.ok(find('.swiper-container'));
  });

  test('contains the wrapper', async function(assert) {
    await render(hbs`{{swiper-container id="swp-container"}}`);
    assert.ok(find('#swp-container').querySelector('.swiper-wrapper'));
  });

  test('pagination node is present if requested', async function(assert) {
    await render(hbs`{{swiper-container id="swp-container" pagination=false}}`);
    assert.notOk(
      find('#swp-container').querySelector('.swiper-pagination'),
      'pagination not rendered'
    );

    await render(hbs`{{swiper-container id="swp-container" pagination=true}}`);
    assert.ok(
      find('#swp-container').querySelector('.swiper-pagination'),
      'pagination is rendered'
    );

    await render(
      hbs`{{swiper-container pagination=".custom-pagination"}}<div class="custom-pagination"></div>`
    );
    assert.ok(
      find('.custom-pagination').classList.contains(
        'swiper-pagination-clickable'
      ),
      'custom pagination element selector configured'
    );

    await render(
      hbs`{{swiper-container pagination=(hash el=".custom-pagination")}}<div class="custom-pagination"></div>`
    );
    assert.ok(
      find('.custom-pagination').classList.contains(
        'swiper-pagination-clickable'
      ),
      'custom pagination object element selector configured'
    );

    this.set('opts', { pagination: { type: 'progressbar' } });
    await render(hbs`{{swiper-container id="swp-container" options=opts}}`);
    assert.ok(
      find('#swp-container').querySelector('.swiper-pagination-progressbar'),
      'pagination object rendered'
    );
  });

  test('navigation buttons are present if requested', async function(assert) {
    await render(hbs`{{swiper-container id="swp-container" navigation=false}}`);
    assert.notOk(find('#swp-container').querySelector('.swiper-button-next'));
    assert.notOk(find('#swp-container').querySelector('.swiper-button-prev'));

    await render(hbs`{{swiper-container id="swp-container" navigation=true}}`);
    assert.ok(find('#swp-container').querySelector('.swiper-button-next'));
    assert.ok(find('#swp-container').querySelector('.swiper-button-prev'));

    this.set('opts', { navigation: true });
    await render(hbs`{{swiper-container id="swp-container" options=opts}}`);
    assert.ok(find('#swp-container').querySelector('.swiper-button-next'));
    assert.ok(find('#swp-container').querySelector('.swiper-button-prev'));
  });

  test('it supports `effect` attribute', async function(assert) {
    await render(hbs`{{swiper-container id="swp-container" effect="fade"}}`);
    assert.ok(
      find('#swp-container.swiper-container-fade'),
      'Container has `fade` class'
    );
  });

  test('it destroys the Swiper instance when component element destroyed', async function(assert) {
    assert.expect(2);
    this.set('componentInstance', null);
    this.set('active', true);

    await render(
      hbs`{{#if active}}{{swiper-container registerAs=componentInstance}}{{/if}}`
    );

    run(() => {
      let componentInstance = this.get('componentInstance');
      assert.ok(componentInstance._swiper, 'Swiper intantiated');

      sinon
        .stub(componentInstance._swiper, 'destroy')
        .callsFake(() => assert.ok(true, 'destroy was called'))
        .callThrough();

      this.set('active', false);
    });
  });

  test('it removes all `slideChangeTransitionEnd` handlers when component element destroyed', async function(assert) {
    this.set('componentInstance', null);
    this.set('rendered', true);

    await render(
      hbs`{{#if rendered}}{{swiper-container registerAs=componentInstance}}{{/if}}`
    );

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

  test('it yields a slide component', async function(assert) {
    await render(
      hbs`{{#swiper-container as |container|}}{{container.slide}}{{/swiper-container}}`
    );
    assert.equal(findAll('.swiper-slide').length, 1, 'renders a single slide');
  });

  test('it activates the slide at index `currentSlide` on render', async function(assert) {
    await render(hbs`
      {{#swiper-container currentSlide=1}}
        {{swiper-slide}}
        {{swiper-slide}}
      {{/swiper-container}}`);

    let lastSlide = Array.from(findAll('.swiper-slide')).pop();

    assert.ok(
      lastSlide && lastSlide.classList.contains('swiper-slide-active'),
      'set slide at index 1 to active'
    );
  });

  test('it updates the active slide when `currentSlide` is updated', async function(assert) {
    this.set('currentSlide', 0);

    await render(hbs`
      {{#swiper-container currentSlide=currentSlide}}
        {{swiper-slide}}
        {{swiper-slide}}
      {{/swiper-container}}`);

    this.set('currentSlide', 1);

    let lastSlide = Array.from(findAll('.swiper-slide')).pop();

    assert.ok(
      lastSlide && lastSlide.classList.contains('swiper-slide-active'),
      'set slide at index 1 to active'
    );
  });

  test('it triggers `swiper.update()` when `updateFor` is updated', async function(assert) {
    this.set('updateFor', '');
    await render(hbs`
      {{swiper-container updateFor=updateFor registerAs=componentInstance}}`);

    let componentInstance = this.get('componentInstance');

    sinon
      .stub(componentInstance._swiper, 'update')
      .callsFake(() => assert.ok(true, 'called swiper.update'))
      .callThrough();

    this.set('updateFor', 'updateTranslate');
  });

  test('it updates the `currentSlide` when viewing and removing the last item', async function(assert) {
    this.set('itemList', ['item-1', 'item-2']);

    await render(hbs`
      {{#swiper-container 
        navigation=true
        updateFor=itemList
        currentSlide=currentSlide
      }}
        {{#each itemList as |item|}}
          {{#swiper-slide}}
            <p class="{{item}}">{{item}}</p>
          {{/swiper-slide}}
        {{/each}}
      {{/swiper-container}}
    `);

    await click('.swiper-button-next');
    await waitFor('.swiper-slide-active .item-2');

    this.set('itemList', ['item-1']);
    await waitFor('.swiper-slide-active .item-1');

    assert.equal(this.get('currentSlide'), 0);
  });

  test('it subscribes `events` actions map as Swiper events', async function(assert) {
    this.actions.onBeforeDestroy = () => assert.ok(true);

    await render(hbs`
      {{swiper-container events=(hash beforeDestroy=(action "onBeforeDestroy"))}}`);
  });

  test('it supports manual swiper initialization when `init` event configured', async function(assert) {
    this.set('componentInstance', null);
    this.actions.onInit = () => assert.ok(true, 'invoked init handler');

    await render(hbs`
      {{swiper-container registerAs=componentInstance events=(hash init=(action "onInit"))}}`);
  });

  test('it triggers `autoplay` with custom `currentSlide`', async function(assert) {
    let run = false;

    this.actions.onAutoplay = () => {
      if (run) {
        return true;
      }

      let lastSlide = Array.from(findAll('.swiper-slide')).pop();

      assert.ok(
        lastSlide && lastSlide.classList.contains('swiper-slide-active'),
        'set slide at index 2 to active'
      );

      run = true;
    };

    await render(hbs`
      {{#swiper-container autoplay=(hash delay=10) currentSlide=1 events=(hash
        autoplay=(action "onAutoplay")) as |sc|}}
        {{swiper-slide}}
        {{swiper-slide}}
        {{swiper-slide}}
      {{/swiper-container}}
    `);
  });

  test('it exposes default swiper navigation controls to `navigation=true`', async function(assert) {
    await render(hbs`
      {{#swiper-container navigation=true}}
        {{swiper-slide}}
        {{swiper-slide}}
        {{swiper-slide}}
      {{/swiper-container}}
    `);

    assert.ok(find('.swiper-button-next'), 'rendered nav next button');
    assert.ok(find('.swiper-button-prev'), 'rendered nav prev button');

    let slides = Array.from(findAll('.swiper-slide'));

    await click('.swiper-button-next');

    assert.ok(
      slides[1].classList.contains('swiper-slide-active'),
      'next button click handled'
    );

    await click('.swiper-button-prev');

    assert.ok(
      slides[0].classList.contains('swiper-slide-active'),
      'previous button click handled'
    );
  });

  test('it applies custom navigation hash of control selectors', async function(assert) {
    await render(hbs`
      {{#swiper-container navigation=(hash nextEl=".is-next" prevEl=".is-last")}}
        {{swiper-slide}}
        {{swiper-slide}}
        {{swiper-slide}}
      {{/swiper-container}}
    `);

    assert.ok(find('.is-next'), 'rendered custom nav next button');
    assert.ok(find('.is-last'), 'rendered custom nav prev button');
  });

  test('it applies custom `navigation.disabledClass`', async function(assert) {
    await render(hbs`
      {{#swiper-container navigation=(hash disabledClass="is-disabled")}}
        {{swiper-slide}}
        {{swiper-slide}}
        {{swiper-slide}}
      {{/swiper-container}}
    `);

    assert.ok(find('.is-disabled'), 'rendered custom disabled class');
  });

  test('it provides swiper instance as context of `update`', async function(assert) {
    this.set('updateForValue', '');
    this.set('componentInstance', null);

    await render(
      hbs`{{swiper-container registerAs=componentInstance updateFor=updateForValue}}`
    );

    let swiperInstance = this.get('componentInstance._swiper');
    let originalUpdate = swiperInstance.update;
    swiperInstance.update = function() {
      assert.strictEqual(
        this,
        swiperInstance,
        'update invoked with swiper context'
      );
      swiperInstance.update = originalUpdate;
    };

    this.set('updateForValue', 'trigger update');
  });
});
