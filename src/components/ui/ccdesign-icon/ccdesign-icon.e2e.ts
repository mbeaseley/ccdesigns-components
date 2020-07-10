import { newE2EPage } from '@stencil/core/testing';

describe('ccdesign-icon', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue('<svg');
  });

  it('renders', async () => {
    const page = await newE2EPage({});

    await page.setContent('<ccdesign-icon></ccdesign-icon>');
    const element = await page.find('ccdesign-icon');
    expect(element).toHaveClass('hydrated');
  });

  it('renders with values', async () => {
    const page = await newE2EPage({});

    await page.setContent('<ccdesign-icon></ccdesign-icon>');
    const component = await page.find('ccdesign-icon');
    const element = await page.find('div');
    expect(element).toHaveClasses(['icon', 'icon--white', 'icon--xs']);

    component.setProperty('name', 'chevron-left');
    component.setProperty('size', 'xxs');
    component.setProperty('color', 'grey');
    await page.waitForChanges();
    expect(element).toHaveClasses(['icon', 'icon--grey', 'icon--xxs']);
  });
});
