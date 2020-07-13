import { newSpecPage } from '@stencil/core/testing';
import { CcdesignGrid } from './ccdesign-grid';

describe('ccdesign-grid', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [CcdesignGrid],
      html: '<ccdesign-grid></ccdesign-grid>',
    });

    expect(root).toEqualHtml(
      '<ccdesign-grid><div class="grid"><div class="grid__container"></div></div></ccdesign-grid>',
    );
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [CcdesignGrid],
      html: '<ccdesign-grid heading="header"><div slot="children">child</div></ccdesign-grid>',
    });

    expect(root).toEqualHtml(
      '<ccdesign-grid heading="header"><div class="grid"><div class="grid__header"><h1>header</h1></div><div class="grid__container"><div slot="children">child</div></div></div></ccdesign-grid>',
    );
  });
});
