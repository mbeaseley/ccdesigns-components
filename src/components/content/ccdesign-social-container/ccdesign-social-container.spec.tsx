import { newSpecPage } from '@stencil/core/testing';
import { CcdesignSocialContainer } from './ccdesign-social-container';

const mockSocialContainerHtml = `
  <ccdesign-social-container
    url="/"
    icon="Icon name">
  </ccdesign-social-container>
`;

describe('ccdesign-social-container', () => {
  let page;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [CcdesignSocialContainer],
      html: mockSocialContainerHtml,
      supportsShadowDom: false
    });
  });

  it('should render without shadow dom', async () => {
    await page.waitForChanges();
    expect(page.rootInstance.url).toEqual('/');
    expect(page.rootInstance.icon).toEqual('Icon name');
  });
});
