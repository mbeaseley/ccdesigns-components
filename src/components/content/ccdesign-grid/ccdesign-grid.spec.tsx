import { newSpecPage } from '@stencil/core/testing';
import { CcdesignGrid } from './ccdesign-grid';

const mockGridHtml = `
  <ccdesign-grid heading="Test Heading" columns="2">
    <div slot="children">1</div>
    <div slot="children">2</div>
    <div slot="children">3</div>
    <div slot="children">4</div>
    <div slot="children">5</div>
    <div slot="children">6</div>
    <div slot="children">7</div>
  </ccdesign-grid>
`;

describe('ccdesign-grid', () => {
  let page;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [CcdesignGrid],
      html: mockGridHtml,
      supportsShadowDom: false
    });
    await page.waitForChanges();
  });

  it('should render without shadow dom', async () => {
    expect(page.rootInstance.heading).toEqual('Test Heading');
  });

  it('should have 7 children slots', async () => {
    expect(page.root.querySelectorAll('div[slot=children]').length).toEqual(7);
  });
});
