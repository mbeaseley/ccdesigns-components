import { newSpecPage } from '@stencil/core/testing';
import { CcdesignImages } from './ccdesign-image';

describe('ccdesign-carousel', () => {
  let page;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [CcdesignImages],
      html: `<ccdesign-image img=\"Image Name\" alt=\"Alt Name\" />`,
      supportsShadowDom: false
    });
  });

  it('should render without shadow dom', async () => {
    await page.waitForChanges();
    expect(page.rootInstance.img).toEqual('Image Name');
    expect(page.rootInstance.alt).toEqual('Alt Name');
  });
});
