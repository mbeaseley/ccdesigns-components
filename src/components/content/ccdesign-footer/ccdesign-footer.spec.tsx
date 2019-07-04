import { newSpecPage } from '@stencil/core/testing';
import { CcdesignFooter } from './ccdesign-footer';

const mockFooterHtml = `
  <ccdesign-footer
    data="{ id: 'footer id', text: 'text', backgroundColor: 'color'}">
  </ccdesign-footer
`;

describe('ccdesign-footer', () => {
  let page;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [CcdesignFooter],
      html: mockFooterHtml,
      supportsShadowDom: false
    });
  });

  it('should render without shadow dom', async () => {
    await page.waitForChanges();
    expect(page.rootInstance.data).toEqual(`{ id: 'footer id', text: 'text', backgroundColor: 'color'}`);
    expect(page.root.querySelector('div.footer--color')).toBeTruthy();
  });
});
