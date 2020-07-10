import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ccdesign-cv-template', () => {
  let page: E2EPage;

  beforeEach(async () => {
    page = await newE2EPage({});
  });

  it('renders', async () => {
    await page.setContent('<ccdesign-cv-template></ccdesign-cv-template>');
    const element = await page.find('ccdesign-cv-template');
    expect(element).toHaveClass('hydrated');
  });

  it('renders headers and footer', async () => {
    await page.setContent('<ccdesign-cv-template header="{}" footer="{}"></ccdesign-cv-template>');
    const headerElement = await page.find('ccdesign-header');
    const footerElement = await page.find('ccdesign-footer');
    expect(headerElement).toBeTruthy();
    expect(footerElement).toBeTruthy();
  });
});
