import { CcdesignFooter } from './ccdesign-footer';
import { newSpecPage } from '@stencil/core/testing';

describe('ccdesign-icon', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [CcdesignFooter],
      html: '<ccdesign-footer></ccdesign-footer>',
    });

    expect(root).toEqualHtml('<ccdesign-footer></ccdesign-footer>');
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [CcdesignFooter],
      html: `<ccdesign-footer data="{ id: 'ccdesign footer', text: '© 2019 Copyright: Michael Beaseley', backgroundColor: 'dark-grey'}"></ccdesign-footer>`,
    });

    expect(root).toEqualHtml(
      `<ccdesign-footer data=\"{ id: 'ccdesign footer', text: '© 2019 Copyright: Michael Beaseley', backgroundColor: 'dark-grey'}\"><div class=\"footer footer--dark-grey\">© 2019 Copyright: Michael Beaseley</div></ccdesign-footer>`,
    );
  });
});
