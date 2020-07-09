import { newE2EPage } from '@stencil/core/testing';

describe('ccdesign-separator', () => {
  it('renders', async () => {
    const page = await newE2EPage({});

    await page.setContent('<ccdesign-separator></ccdesign-separator>');
    const element = await page.find('ccdesign-separator');
    const innerElement = await page.find('ccdesign-separator hr');
    expect(element).toHaveClass('hydrated');
    expect(innerElement).toBeTruthy();
  });
});
