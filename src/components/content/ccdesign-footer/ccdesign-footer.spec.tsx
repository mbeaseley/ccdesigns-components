import { TestWindow } from '@stencil/core/testing';
import { CcdesignFooter } from './ccdesign-footer';

describe('ccdesign-footer', () => {
  it('should build', () => {
    expect(new CcdesignFooter()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    let window;

    beforeEach(async () => {
      window = new TestWindow();
      element = await window.load({
        components: [CcdesignFooter],
        html: '<ccdesign-footer></ccdesign-footer>'
      });
    });

    it('should work with both the first and the last name', async () => {
      element.first = 'Peter';
      element.last = 'Parker';
      await window.flush();
      expect(element.textContent).toEqual('Hello, my name is Peter Parker');
    });
  });
});
