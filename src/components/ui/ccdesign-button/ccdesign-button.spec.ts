import { newSpecPage } from '@stencil/core/testing';
import { CcdesignButton } from './ccdesign-button';

describe('ccdesign-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [CcdesignButton],
      html: '<ccdesign-button></ccdesign-button>',
    });

    expect(root).toEqualHtml(
      '<ccdesign-button><button class="btn"><span></span></button></ccdesign-button>',
    );
  });

  it('renders button with values', async () => {
    const { root } = await newSpecPage({
      components: [CcdesignButton],
      html: '<ccdesign-button text="content" icon="chervon-right" color="grey"></ccdesign-button>',
    });

    expect(root).toEqualHtml(
      '<ccdesign-button color="grey" icon="chervon-right" text="content"><button class="btn btn--grey"><ccdesign-icon color="grey" name="chervon-right" size="xs"></ccdesign-icon><span class="text--grey">content</span></button></ccdesign-button>',
    );
  });

  it('renders a tag with values', async () => {
    const { root } = await newSpecPage({
      components: [CcdesignButton],
      html:
        '<ccdesign-button text="content" url="https://www.something.com" icon="chervon-right" color="grey"></ccdesign-button>',
    });

    expect(root).toEqualHtml(
      '<ccdesign-button color="grey" icon="chervon-right" text="content" url="https://www.something.com"><a class="btn btn--grey" href="https://www.something.com"><ccdesign-icon color="grey" name="chervon-right" size="xs"></ccdesign-icon><span class="text--grey">content</span></a></ccdesign-button>',
    );
  });
});