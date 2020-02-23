import { newE2EPage } from '@stencil/core/testing';

describe('ccdesign-separator', () => {
  it('creates separator', async () => {
    const page = await newE2EPage();
    await page.setContent(`<ccdesign-separator></ccdesign-separator>`);
    const el = await page.find('ccdesign-separator');
    expect(el).not.toBeNull();
  });
});