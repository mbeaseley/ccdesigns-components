import { newE2EPage, E2EPage } from '@stencil/core/testing';

describe('ccdesign-placeholder', () => {
  it('renders', async () => {
    const page: E2EPage = await newE2EPage({});
    await page.setContent('<ccdesign-placeholder><div>Hello World!</div></ccdesign-placeholder>');
    const element = await page.find('ccdesign-placeholder');
    expect(element).toHaveClass('hydrated');
  });
});
