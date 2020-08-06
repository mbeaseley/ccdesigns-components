import { newSpecPage } from '@stencil/core/testing';
import { CcdesignContactForm } from './ccdesign-contact-form';

describe('ccdesign-contact-form unit tests', () => {
  let page;
  let element;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [CcdesignContactForm],
      html: '<ccdesign-contact-form first="Peter" last="Parker"></ccdesign-contact-form>'
    });
    element = await page.doc.querySelector('ccdesign-contact-form');
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
