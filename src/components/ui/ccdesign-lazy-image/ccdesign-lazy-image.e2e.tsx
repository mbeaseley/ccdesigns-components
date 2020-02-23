import { newE2EPage } from '@stencil/core/testing';


describe('ccdesign-lazy-image', () => {
  it('creates lazy-loaded image', async () => {
    const page = await newE2EPage();
    await page.setContent(`<ccdesign-lazy-image img-src="https://i.picsum.photos/id/877/300/300.jpg" alt="alt_text"></ccdesign-lazy-image>`);
    const el = await page.find(`ccdesign-lazy-image`)
    expect(el).not.toBeNull();
  });
});
