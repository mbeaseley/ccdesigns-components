import { newSpecPage } from '@stencil/core/testing';
import { CcdesignSeparator } from './ccdesign-separator';

describe('ccdesign-separator', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [CcdesignSeparator],
      html: '<ccdesign-separator></ccdesign-separator>',
    });

    expect(root).toEqualHtml('<ccdesign-separator><hr></ccdesign-separator>');
  });
});
