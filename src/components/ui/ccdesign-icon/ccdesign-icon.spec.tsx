import { newSpecPage } from '@stencil/core/testing';
import { CcdesignIcon } from './ccdesign-icon';

describe('ccdesign-carousel', () => {
  let page;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [CcdesignIcon],
      html: `<ccdesign-icon name=\"IconName\" color=\"Color\" size=\"Size\"></ccdesign-icon>`,
      supportsShadowDom: false
    });
    await page.waitForChanges();
  });

  it('should render without shadow dom', async () => {
    expect(page.rootInstance.name).toEqual('IconName');
    expect(page.rootInstance.color).toEqual('Color');
    expect(page.rootInstance.size).toEqual('Size');
  });

  it('should have icon name with url used to fetch svg', async () => {
    expect(page.rootInstance.url).toContain('IconName');
  });
});
