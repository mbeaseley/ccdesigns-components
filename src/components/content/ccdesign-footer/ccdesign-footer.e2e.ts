import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ccdesign-icon', () => {
  let page: E2EPage;

  beforeEach(async () => {
    page = await newE2EPage({});
  });

  it('renders', async () => {
    await page.setContent('<ccdesign-footer></ccdesign-footer>');
    const element = await page.find('ccdesign-footer');
    expect(element).toHaveClass('hydrated');
  });

  it('renders with values', async () => {
    await page.setContent(
      `<ccdesign-footer data="{ id: 'ccdesign footer', text: '© 2019 Copyright: Michael Beaseley', backgroundColor: 'dark-grey'}"></ccdesign-footer>`,
    );
    const element = await page.find('div');
    expect(element).toHaveClasses(['footer', 'footer--dark-grey']);
    expect(element.textContent).toEqual('Â© 2019 Copyright: Michael Beaseley');
  });
});
