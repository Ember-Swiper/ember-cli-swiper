import { find, render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | swiper slide', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{swiper-slide}}`);
    assert.dom('*').hasText('');

    await render(hbs`
      {{#swiper-slide}}
        template block text
      {{/swiper-slide}}
    `);
    assert.dom('*').hasText('template block text');
  });

  test('predefined classes are added', async function(assert) {
    await render(hbs`{{swiper-slide id="slide"}}`);
    assert.dom('#slide').hasClass('swiper-slide');

    await render(hbs`{{swiper-slide id="slide" class="foo bar"}}`);
    assert.dom('#slide').hasClass('swiper-slide');
  });

  test('own classes are added', async function(assert) {
    await render(hbs`{{swiper-slide id="slide" class="foo bar"}}`);
    assert.dom('#slide').hasClass('foo');
    assert.dom('#slide').hasClass('bar');
  });
});
