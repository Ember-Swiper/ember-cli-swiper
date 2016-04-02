import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('swiper-slide', 'Integration | Component | swiper slide', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{swiper-slide}}`);
  assert.equal(this.$().text().trim(), '');

  this.render(hbs`
    {{#swiper-slide}}
      template block text
    {{/swiper-slide}}
  `);
  assert.equal(this.$().text().trim(), 'template block text');
});

test('predefined classes are added', function(assert) {
  this.render(hbs`{{#swiper-slide}} Foo {{/swiper-slide}}`);
  assert.ok(this.$('>:first-child').hasClass('swiper-slide'));

  this.render(hbs`{{#swiper-slide class='foo bar'}} Foo {{/swiper-slide}}`);
  assert.ok(this.$('>:first-child').hasClass('swiper-slide'));
});

test('own classes are added', function(assert) {
  this.render(hbs`{{#swiper-slide class='foo bar'}} Foo {{/swiper-slide}}`);
  assert.ok(this.$('>:first-child').hasClass('foo'));
  assert.ok(this.$('>:first-child').hasClass('bar'));
});
