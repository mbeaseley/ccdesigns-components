import { newSpecPage } from '@stencil/core/testing';
import { CcdesignCvTemplate } from './ccdesign-cv-template';

describe('ccdesign-cv-template', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [CcdesignCvTemplate],
      html: '<ccdesign-cv-template></ccdesign-cv-template>',
    });

    const mainElement = root.querySelector('main');
    const contentElement = root.querySelector('content');

    expect(root).toBeTruthy();
    expect(mainElement).toHaveClass('page');
    expect(contentElement).toHaveClass('page__body');
  });

  it('render header and footer', async () => {
    const { root } = await newSpecPage({
      components: [CcdesignCvTemplate],
      html: '<ccdesign-cv-template header="{}" footer="{}"></ccdesign-cv-template>',
    });

    const headerContent = root.querySelector('ccdesign-header');
    const footerContent = root.querySelector('ccdesign-footer');

    expect(headerContent).toBeTruthy();
    expect(footerContent).toBeTruthy();
  });
});
