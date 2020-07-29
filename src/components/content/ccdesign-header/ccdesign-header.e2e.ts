import { newE2EPage, E2EPage } from '@stencil/core/testing';

describe('ccdesign-header', () => {
  let page: E2EPage;

  beforeEach(async () => {
    page = await newE2EPage({});
  });

  it('renders', async () => {
    await page.setContent('<ccdesign-header></ccdesign-header>');
    const element = await page.find('ccdesign-header');
    expect(element).toHaveClass('hydrated');
  });

  it('renders with values trigger desktop to show', async () => {
    await page.setContent(
      `<ccdesign-header data='[ { id: "home", name: "Home", url: "/" } ]'></ccdesign-header>`,
    );
    const element = await page.find('nav');
    expect(element).toHaveClass('navbar');
  });

  it('renders with values trigger mobile to show', async () => {
    // Only see mobile nav on view width below 768px
    await page.setViewport({
      width: 375,
      height: 667,
    });

    await page.setContent(
      `<ccdesign-header data='[ { id: "home", name: "Home", url: "/" } ]'></ccdesign-header>`,
    );
    const element = await page.find('mobile-nav');
    expect(element).toBeTruthy();
  });
});
