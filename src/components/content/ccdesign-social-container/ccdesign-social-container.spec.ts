import { newSpecPage } from '@stencil/core/testing';
import { CcdesignSocialContainer } from './ccdesign-social-container';

describe('ccdesign-social-container', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [CcdesignSocialContainer],
      html: '<ccdesign-social-container></ccdesign-social-container>',
    });

    expect(root).toEqualHtml(
      '<ccdesign-social-container><div class="circle circle--outercircle"><div class="circle circle--innercircle"><ccdesign-button color="blue"></ccdesign-button></div></div></ccdesign-social-container>',
    );
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [CcdesignSocialContainer],
      html:
        '<ccdesign-social-container icon="close" url="https://www.something.com"></ccdesign-social-container>',
    });

    expect(root).toEqualHtml(
      '<ccdesign-social-container icon="close" url="https://www.something.com"><div class="circle circle--outercircle"><div class="circle circle--innercircle"><ccdesign-button alt="close" color="blue" icon="close" url="https://www.something.com"></ccdesign-button></div></div></ccdesign-social-container>',
    );
  });
});
