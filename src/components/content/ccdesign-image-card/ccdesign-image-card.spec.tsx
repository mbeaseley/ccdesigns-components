import { newSpecPage } from '@stencil/core/testing';
import { CcdesignImageCard } from './ccdesign-image-card';

const mockImageCardHtml = `
  <ccdesign-image-card
    url="/"
    image-url="Image Url"
    image-alt="Image Alt"
    description="Description">
  </ccdesign-image-card>
`;

describe('ccdesign-carousel', () => {
  let page;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [CcdesignImageCard],
      html: mockImageCardHtml,
      supportsShadowDom: false
    });
  });

  it('should render without shadow dom', async () => {
    await page.waitForChanges();
    expect(page.rootInstance.url).toEqual('/');
    expect(page.rootInstance.imageUrl).toEqual('Image Url');
    expect(page.rootInstance.imageAlt).toEqual('Image Alt');
    expect(page.rootInstance.description).toEqual('Description');
  });
});
