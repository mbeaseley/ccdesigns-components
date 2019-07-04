import { newSpecPage } from '@stencil/core/testing';
import { CcdesignButton } from './ccdesign-button';

const mockButtonHtml = `
  <ccdesign-button
    icon="Icon name"
    type="Text"
    color="Color"
    url="/"
    alt="Alt text">
  </ccdesign-button>
`;

describe('ccdesign-carousel', () => {
  let page;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [CcdesignButton],
      html: mockButtonHtml,
      supportsShadowDom: false
    });
  });

  it('should render without shadow dom', async () => {
    await page.waitForChanges();
    expect(page.rootInstance.icon).toEqual('Icon name');
    expect(page.root.querySelector('ccdesign-icon[name="Icon name"]')).toBeTruthy();
    expect(page.rootInstance.type).toEqual('Text');
    expect(page.rootInstance.color).toEqual('Color');
    expect(page.rootInstance.url).toEqual('/');
    expect(page.rootInstance.alt).toEqual('Alt text');
  });
});
