import { newE2EPage, E2EPage } from '@stencil/core/testing';

describe('ccdesign-icon', () => {
  let page: E2EPage;

  beforeEach(async () => {
    global.fetch = jest.fn().mockResolvedValue('<svg');
    page = await newE2EPage({});
  });

  it('renders', async () => {
    await page.setContent('<ccdesign-icon></ccdesign-icon>');
    const element = await page.find('ccdesign-icon');
    expect(element).toHaveClass('hydrated');
  });

  it('renders with values', async () => {
    await page.setContent(
      '<ccdesign-icon name="chevron-left" size="xxs" color="grey"></ccdesign-icon>',
    );
    const element = await page.find('div');
    expect(element).toHaveClasses(['icon', 'icon--grey', 'icon--xxs']);
  });
});
