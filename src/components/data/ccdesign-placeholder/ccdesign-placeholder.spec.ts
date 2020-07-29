import { newSpecPage } from '@stencil/core/testing';
import { CcdesignPlaceholder } from './ccdesign-placeholder';

describe('ccdesign-placeholder', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [CcdesignPlaceholder],
      html: '<ccdesign-placeholder><div>Hello World!</div></ccdesign-placeholder>',
    });

    expect(root).toEqualHtml(
      '<ccdesign-placeholder><div class="placeholder placeholder--height-auto placeholder--relative placeholder--top-left placeholder--width-auto"><div>Hello World!</div></div></ccdesign-placeholder>',
    );
  });
});
