import { newSpecPage } from '@stencil/core/testing';
import { CcdesignCvTemplate } from './ccdesign-cv-template';

const mockTemplateHtml = `
  <ccdesign-cv-template
    header=\"{ id: 'home', name: 'Home', url: '/' }, { id: 'portfolio', name: 'Portfolio', url: '/portfolio'}, { id: 'contact', name: 'Contact', url: '/contact'}\"
    footer=\"{ id: 'footer id', text: 'text', backgroundColor: 'color'}\">
  </ccdesign-cv-template>
`;

describe('ccdesign-carousel', () => {
  let page;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [CcdesignCvTemplate],
      html: mockTemplateHtml,
      supportsShadowDom: false
    });
  });

  it('should render without shadow dom', async () => {
    await page.waitForChanges();
    expect(page.rootInstance.header).toEqual(`{ id: 'home', name: 'Home', url: '/' }, { id: 'portfolio', name: 'Portfolio', url: '/portfolio'}, { id: 'contact', name: 'Contact', url: '/contact'}`);
    expect(page.rootInstance.footer).toEqual(`{ id: 'footer id', text: 'text', backgroundColor: 'color'}`);
  });
});
