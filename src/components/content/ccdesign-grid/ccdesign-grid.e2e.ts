import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ccdesign-grid', () => {
  let page: E2EPage;

  beforeEach(async () => {
    page = await newE2EPage({});
  });

  it('renders', async () => {
    await page.setContent('<ccdesign-grid></ccdesign-grid>');
    const element = await page.find('ccdesign-grid');
    expect(element).toHaveClass('hydrated');
  });

  it('renders with values', async () => {
    await page.setContent(
      '<ccdesign-grid heading="header"><div slot="children">SOMETHING</div></ccdesign-grid>',
    );
    const element = await page.find('ccdesign-grid');
    const headerElement = await page.find('h1');
    const slotElement = await page.findAll('div[slot="children"]');
    expect(element).toHaveClass('hydrated');
    expect(headerElement).toBeTruthy();
    expect(headerElement.textContent).toEqual('header');
    expect(slotElement.length).toEqual(1);
  });
});
