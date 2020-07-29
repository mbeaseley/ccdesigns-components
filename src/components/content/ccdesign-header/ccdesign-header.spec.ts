import { newSpecPage } from '@stencil/core/testing';
import { CcdesignHeader } from './ccdesign-header';

describe('ccdesign-header', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [CcdesignHeader],
      html: '<ccdesign-header></ccdesign-header>',
    });

    expect(root).toEqualHtml('<ccdesign-header><header class="header"></header></ccdesign-header>');
  });

  it('renders with values for desktop', async () => {
    const { root } = await newSpecPage({
      components: [CcdesignHeader],
      html: `<ccdesign-header data='[ { id: "home", name: "Home", url: "/" } ]'></ccdesign-header>`,
    });

    expect(root).toEqualHtml(
      '<ccdesign-header data="[ { id: &quot;home&quot;, name: &quot;Home&quot;, url: &quot;/&quot; } ]"><header class="header"><nav aria-label="Main Navigation" class="navbar"><ul class="navbar__list"><li><a href="http://ccdesign.me.uk/"><ccdesign-lazy-image alt="CCDesigns" img-src="assets/favicon.svg"></ccdesign-lazy-image></a></li><li class="navbar__item"><a class="navbar__link" href="/" id="desktophome">Home</a></li></ul></nav></header></ccdesign-header>',
    );
  });
});
