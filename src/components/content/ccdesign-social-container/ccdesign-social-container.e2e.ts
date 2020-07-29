import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ccdesign-social-container', () => {
  let page: E2EPage;

  beforeEach(async () => {
    page = await newE2EPage({});
  });

  it('renders', async () => {
    await page.setContent('<ccdesign-social-container></ccdesign-social-container>');
    const element = await page.find('ccdesign-social-container');
    expect(element).toHaveClass('hydrated');
  });

  it('renders button', async () => {
    await page.setContent(
      '<ccdesign-social-container icon="close" url="https://www.something.com"></ccdesign-social-container>',
    );
    const element = await page.find('ccdesign-button');
    expect(element).toEqualHtml(
      '<ccdesign-button class="hydrated"><!----><a alt="close" aria-label="close" class="btn btn--blue btn--icon" href="https://www.something.com"><ccdesign-icon class="hydrated"><div class="icon icon--blue icon--xs"></div></ccdesign-icon><span></span></a></ccdesign-button>',
    );
  });
});
