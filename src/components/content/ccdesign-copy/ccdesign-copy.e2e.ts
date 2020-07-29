import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ccdesign-copy', () => {
  let page: E2EPage;

  beforeEach(async () => {
    page = await newE2EPage({});
  });

  it('renders', async () => {
    await page.setContent('<ccdesign-copy></ccdesign-copy>');
    const element = await page.find('ccdesign-copy');
    expect(element).toHaveClass('hydrated');
  });

  it('renders with values', async () => {
    await page.setContent('<ccdesign-copy copy="something content"></ccdesign-copy>');
    const element = await page.find('.copy');
    expect(element.textContent).toEqual('something content');
  });
});
