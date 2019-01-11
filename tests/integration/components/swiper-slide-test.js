import { find, render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { camelize } from '@ember/string';
import { PERMITTED_DATA_ATTRIBUTES } from 'ember-cli-swiper/components/swiper-slide';
import { compileTemplate } from '@ember/template-compilation';

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

  test('whitelisted data attributes are added', async function(assert) {
    for (let attr of PERMITTED_DATA_ATTRIBUTES) {
      let innerAttr = attr.slice(attr.indexOf('-') + 1);

      await render(compileTemplate(`{{swiper-slide id="slide" ${attr}="foo"}}`));

      assert.equal(find('#slide').dataset[camelize(innerAttr)], 'foo');
    }
  });

  test('non-whitelisted data attributes are not added', async function(assert) {
    await render(hbs`{{swiper-slide id="slide" data-not-allowed="foo"}}`);
    assert.notOk(find('#slide').dataset['not-allowed']);
  });
});
