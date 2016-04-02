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
