import { newSpecPage } from '@stencil/core/testing';
import { CcdesignHeader } from './ccdesign-header';

const mockHeaderHtml = `
  <ccdesign-header
    data=\"[ { id: 'home', name: 'Home', url: '/' }, { id: 'portfolio', name: 'Portfolio', url: '/portfolio'}, { id: 'contact', name: 'Contact', url: '/contact'} ]\">
  </ccdesign-header>
`;

describe('ccdesign-header', () => {
  let page;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [CcdesignHeader],
      html: mockHeaderHtml,
      supportsShadowDom: false
    });
  });

  it('should render without shadow dom', async () => {
    await page.waitForChanges();
    expect(page.rootInstance.data).toEqual(`[ { id: 'home', name: 'Home', url: '/' }, { id: 'portfolio', name: 'Portfolio', url: '/portfolio'}, { id: 'contact', name: 'Contact', url: '/contact'} ]`);
  });
});
