import { newSpecPage } from '@stencil/core/testing';
import { CcdesignCopy } from './ccdesign-copy';

describe('ccdesign-copy', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [CcdesignCopy],
      html: '<ccdesign-copy></ccdesign-copy>',
    });

    expect(root).toEqualHtml('<ccdesign-copy><div class="copy"></div></ccdesign-copy>');
  });

  it('renders with value', async () => {
    const { root } = await newSpecPage({
      components: [CcdesignCopy],
      html: '<ccdesign-copy copy="something content"></ccdesign-copy>',
    });

    expect(root).toEqualHtml(
      '<ccdesign-copy copy="something content"><div class="copy">something content</div></ccdesign-copy>',
    );
  });
});
