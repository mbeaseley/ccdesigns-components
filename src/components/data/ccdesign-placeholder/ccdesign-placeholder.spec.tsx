import { newSpecPage } from '@stencil/core/testing';
import { CcdesignPlaceholder } from './ccdesign-placeholder';

const mockPlaceholderHtml = `
  <ccdesign-placeholder>
    <div>Render Content</div>
  </ccdesign-placeholder>
`;

describe('ccdesign-carousel', () => {
  let page;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [CcdesignPlaceholder],
      html: mockPlaceholderHtml,
      supportsShadowDom: false
    });
  });

  it('should render without shadow dom', async () => {
    await page.waitForChanges();
    expect(page.root.querySelector('div').innerText).toEqual('Render Content');
  });
});
