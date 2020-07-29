import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('mobile-nav', () => {
  let page: E2EPage;

  beforeEach(async () => {
    page = await newE2EPage({});
  });

  it('renders', async () => {
    await page.setContent('<mobile-nav></mobile-nav>');
    const element = await page.find('mobile-nav');
    expect(element).toHaveClass('hydrated');
  });
});
