import { newSpecPage } from '@stencil/core/testing';
import { CcdesignIcon } from './ccdesign-icon';

describe('ccdesign-icon', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [CcdesignIcon],
      html: '<ccdesign-icon></ccdesign-icon>',
    });

    expect(root).toEqualHtml(
      '<ccdesign-icon><div class="icon icon--white icon--xs"></div></ccdesign-icon>',
    );
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [CcdesignIcon],
      html: '<ccdesign-icon name="chevron-left" color="grey" size="xs"></ccdesign-icon>',
    });

    expect(root).toEqualHtml(
      '<ccdesign-icon color="grey" name="chevron-left" size="xs"><div class="icon icon--grey icon--xs"></div></ccdesign-icon>',
    );
  });
});
