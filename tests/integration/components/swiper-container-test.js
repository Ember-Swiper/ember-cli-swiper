import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';
import { run } from '@ember/runloop';

moduleForComponent('swiper-container', 'Integration | Component | swiper container', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{swiper-container}}`);
  assert.equal(this.$().text().trim(), '');

  this.render(hbs`
    {{#swiper-container}}
      template block text
    {{/swiper-container}}
  `);
  assert.equal(this.$().text().trim(), 'template block text');
});

test('it set `noSwiping` via attribute and `options`', function(assert) {
  let expected = false;

  this.set('noSwiping', expected);
  this.render(hbs`{{swiper-container noSwiping=noSwiping registerAs=componentInstanceAttr}}`);

  assert.strictEqual(
    this.get('componentInstanceAttr._swiper.params.noSwiping'),
    expected,
    'Swiper instance `noSwiping` configured by `noSwiping` attribute'
  );

  this.set('options', { noSwiping: expected });
  this.render(hbs`{{swiper-container options=options registerAs=componentInstanceOpts}}`);

  assert.strictEqual(
    this.get('componentInstanceOpts._swiper.params.noSwiping'),
    expected,
    'Swiper instance `noSwiping` configured by `options.noSwiping`'
  );
});

test('it should allow attributes to overwrite `options`', function(assert) {
  let expected = 'fade';

  this.set('effect', expected);
  this.set('options', { effect: 'cube' });
  this.render(hbs`{{swiper-container effect=effect options=options registerAs=componentInstanceAttr}}`);

  assert.strictEqual(
    this.get('componentInstanceAttr._swiper.params.effect'),
    expected,
    'Swiper instance configured by attribute not `options`'
  );
});

test('predefined classes are added', function(assert) {
  this.render(hbs`{{swiper-container}}`);
  assert.ok(this.$('>:first-child').hasClass('swiper-container'));
});

test('contains the wrapper', function(assert) {
  this.render(hbs`{{swiper-container}}`);
  assert.ok(this.$('>:first-child').has('.swiper-wrapper').length);
});

test('pagination node is present if requested', function(assert) {
  this.render(hbs`{{swiper-container pagination=false}}`);
  assert.notOk(this.$('>:first-child').has('.swiper-pagination').length);

  this.render(hbs`{{swiper-container pagination=true}}`);
  assert.ok(this.$('>:first-child').has('.swiper-pagination').length);

  this.render(hbs`{{#swiper-container pagination=".custom-pagination"}}<div class="custom-pagination"></div>{{/swiper-container}}`);
  assert.ok(this.$('.custom-pagination').hasClass('swiper-pagination-clickable'));

  this.set('opts', { pagination: true });
  this.render(hbs`{{swiper-container options=opts}}`);
  assert.ok(this.$('>:first-child').has('.swiper-pagination').length);
});

test('navigation buttons are present if requested', function(assert) {
  this.render(hbs`{{swiper-container navigation=false}}`);
  assert.notOk(this.$('>:first-child').has('.swiper-button-next').length);
  assert.notOk(this.$('>:first-child').has('.swiper-button-prev').length);

  this.render(hbs`{{swiper-container navigation=true}}`);
  assert.ok(this.$('>:first-child').has('.swiper-button-next').length);
  assert.ok(this.$('>:first-child').has('.swiper-button-prev').length);

  this.set('opts', { navigation: true });
  this.render(hbs`{{swiper-container options=opts}}`);
  assert.ok(this.$('>:first-child').has('.swiper-button-next').length);
  assert.ok(this.$('>:first-child').has('.swiper-button-prev').length);
});

test('it supports `effect` attribute', function(assert) {
  this.render(hbs`{{swiper-container effect="fade"}}`);
  assert.ok(this.$().has('.swiper-container-fade').length,
    'Container has `fade` class');
});

test('on initialization, calls `afterSwiperInit` with the swiper container component if `afterSwiperInit` is passed in', function(assert) {
  this.set('actions.afterSwiperInit', () => {});
  let spy = sinon.spy(this.get('actions'), 'afterSwiperInit');
  this.render(hbs`{{swiper-container afterSwiperInit="afterSwiperInit" registerAs=superDuperSwiper}}`);
  assert.equal(spy.callCount, 1);
  assert.equal(spy.getCall(0).args[0], this.get('superDuperSwiper'));
});

test('it destroys the Swiper instance when component element destroyed', function(assert) {
  assert.expect(2);
  this.set('componentInstance', null);
  this.set('active', true);

  this.render(hbs`{{#if active}}{{swiper-container registerAs=componentInstance}}{{/if}}`);

  run(() => {
    let componentInstance = this.get('componentInstance');
    assert.ok(componentInstance._swiper, 'Swiper intantiated');

    sinon.stub(componentInstance._swiper, 'destroy').callsFake(() =>
      assert.ok(true, 'destroy was called')).callThrough();

    this.set('active', false);
  });
});

test('it removes all `onSlideChangeEnd` handlers when component element destroyed', function(assert) {
  assert.expect(1);
  this.set('componentInstance', null);
  this.render(hbs`{{swiper-container registerAs=componentInstance}}`);

  let componentInstance = this.get('componentInstance');

  sinon.stub(componentInstance._swiper, 'off').callsFake((evt) =>
    assert.strictEqual(evt, 'onSlideChangeEnd')).callThrough();
});

test('it yields a slide component', function(assert) {
  this.render(hbs`{{#swiper-container as |container|}}{{container.slide}}{{/swiper-container}}`);
  assert.equal(this.$('.swiper-slide').length, 1, 'renders a single slide');
});

test('it activates the slide at index `currentSlide` on render', function(assert) {
  this.render(hbs`
    {{#swiper-container currentSlide=1}}
      {{swiper-slide}}
      {{swiper-slide}}
    {{/swiper-container}}`);

  assert.ok(
    this.$('.swiper-slide').last().hasClass('swiper-slide-active'),
    'set slide at index 1 to active'
  );
});

test('it updates the active slide when `currentSlide` is updated', function(assert) {
  this.set('currentSlide', 0);

  this.render(hbs`
    {{#swiper-container currentSlide=currentSlide}}
      {{swiper-slide}}
      {{swiper-slide}}
    {{/swiper-container}}`);

  this.set('currentSlide', 1);

  assert.ok(
    this.$('.swiper-slide').last().hasClass('swiper-slide-active'),
    'set slide at index 1 to active'
  );
});

test('it triggers `swiper.update()` when `updateFor` is updated', function(assert) {
  assert.expect(1);

  this.set('updateFor', '');
  this.render(hbs`
    {{swiper-container updateFor=updateFor registerAs=componentInstance}}`);

  let componentInstance = this.get('componentInstance');

  sinon.stub(componentInstance._swiper, 'update').callsFake(() =>
    assert.ok(true, 'called swiper.update')).callThrough();

  this.set('updateFor', 'updateTranslate');
});

test('it autoplays with custom `currentSlide`', function(assert) {
  this.on('autoplay', () => {
    assert.ok(
      this.$('.swiper-slide').last().hasClass('swiper-slide-active'),
      'set slide at index 2 to active'
    );
  });

  this.render(hbs`
    {{#swiper-container autoplay=1 currentSlide=1 onAutoplay=(action "autoplay") as |sc|}}
      {{swiper-slide}}
      {{swiper-slide}}
      {{swiper-slide}}
    {{/swiper-container}}
  `);
});
