import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ccdesign-button', () => {
  let page: E2EPage;

  beforeEach(async () => {
    page = await newE2EPage({});
  });

  it('renders', async () => {
    await page.setContent('<ccdesign-button></ccdesign-button>');
    const element = await page.find('ccdesign-button');
    expect(element).toHaveClass('hydrated');
  });

  it('renders button', async () => {
    await page.setContent('<ccdesign-button></ccdesign-button>');
    const element = await page.find('ccdesign-button > button');
    expect(element).toBeTruthy();
  });

  it('renders a tag', async () => {
    await page.setContent('<ccdesign-button url="https://www.something.com"></ccdesign-button>');
    const element = await page.find('ccdesign-button > a');
    expect(element).toBeTruthy();
  });

  it('renders icon', async () => {
    await page.setContent('<ccdesign-button icon="chervon-right"></ccdesign-button>');
    const element = await page.find('ccdesign-icon');
    expect(element.getProperty('name')).toBeTruthy();
  });
});
