import { find, render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | swiper slide', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{swiper-slide}}`);
    assert.equal(find('*').textContent.trim(), '');

    await render(hbs`
      {{#swiper-slide}}
        template block text
      {{/swiper-slide}}
    `);
    assert.equal(find('*').textContent.trim(), 'template block text');
  });

  test('predefined classes are added', async function(assert) {
    await render(hbs`{{swiper-slide id="slide"}}`);
    assert.ok(find('#slide').classList.contains('swiper-slide'));

    await render(hbs`{{swiper-slide id="slide" class="foo bar"}}`);
    assert.ok(find('#slide').classList.contains('swiper-slide'));
  });

  test('own classes are added', async function(assert) {
    await render(hbs`{{swiper-slide id="slide" class="foo bar"}}`);
    assert.ok(find('#slide').classList.contains('foo'));
    assert.ok(find('#slide').classList.contains('bar'));
  });
});
