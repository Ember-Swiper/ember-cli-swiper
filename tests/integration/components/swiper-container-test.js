import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

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

test('predefined classes are added', function(assert) {
  this.render(hbs`{{#swiper-container}} Foo {{/swiper-container}}`);
  assert.ok(this.$('>:first-child').hasClass('swiper-container'));
});

test('contains the wrapper', function(assert) {
  this.render(hbs`{{#swiper-container}} Foo {{/swiper-container}}`);
  assert.ok(this.$('>:first-child').has('.swiper-wrapper').length);
});

test('pagination node is present if requested', function(assert) {
  this.render(hbs`{{#swiper-container pagination=false}} Foo {{/swiper-container}}`);
  assert.notOk(this.$('>:first-child').has('.swiper-pagination').length);

  this.render(hbs`{{#swiper-container pagination=true}} Foo {{/swiper-container}}`);
  assert.ok(this.$('>:first-child').has('.swiper-pagination').length);
});

test('navigation buttons are present if requested', function(assert) {
  this.render(hbs`{{#swiper-container navigation=false}} Foo {{/swiper-container}}`);
  assert.notOk(this.$('>:first-child').has('.swiper-button-next').length);
  assert.notOk(this.$('>:first-child').has('.swiper-button-prev').length);

  this.render(hbs`{{#swiper-container navigation=true}} Foo {{/swiper-container}}`);
  assert.ok(this.$('>:first-child').has('.swiper-button-next').length);
  assert.ok(this.$('>:first-child').has('.swiper-button-prev').length);
});

test('it supports `effect` attribute', function(assert) {
  this.render(hbs`{{#swiper-container effect='fade'}} Foo {{/swiper-container}}`);
  assert.ok(this.$().has('.swiper-container-fade').length,
    'Container has `fade` class');
});
