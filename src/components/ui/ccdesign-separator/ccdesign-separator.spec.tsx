import { newSpecPage } from '@stencil/core/testing';
import { CcdesignSeparator } from './ccdesign-separator';

describe('ccdesign-carousel', () => {
  let page;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [CcdesignSeparator],
      html: `<ccdesign-separator />`,
      supportsShadowDom: false
    });
  });

  it('should render without shadow dom', async () => {
    await page.waitForChanges();
    expect(page.root.querySelector('hr')).toBeTruthy();
  });
});
