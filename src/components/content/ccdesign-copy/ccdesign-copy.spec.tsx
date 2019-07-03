import { newSpecPage } from '@stencil/core/testing';
import { CcdesignCopy } from './ccdesign-copy';

describe('ccdesign-copy', () => {
  let page;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [CcdesignCopy],
      html: `<ccdesign-copy copy="Test Copy"></ccdesign-copy>`,
      supportsShadowDom: false
    });
  });

  it('should render without shadow dom', async () => {
    await page.waitForChanges();
    expect(page.rootInstance.copy).toEqual('Test Copy');
  });
});
