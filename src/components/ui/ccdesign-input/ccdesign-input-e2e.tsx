import { newSpecPage } from '@stencil/core/testing';
import { CcdesignInput } from './ccdesign-input';

describe('ccdesign-input unit tests', () => {
  let page;
  let element;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [CcdesignInput],
      html: '<ccdesign-input first="Peter" last="Parker"></ccdesign-input>'
    });
    element = await page.doc.querySelector('ccdesign-input');
  });

  it('should work with both the first and the last name', async () => {
    expect(element.textContent).toEqual('Hello, my name is Peter Parker');
  });

  it('should be able to change first and the last name', async () => {
    element.first = 'Bruce';
    element.last = 'Wayne';
    await page.waitForChanges();
    expect(element.textContent).toEqual('Hello, my name is Bruce Wayne');
  });
});
