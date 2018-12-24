import { TestWindow } from '@stencil/core/testing';
import { CcdesignCopy } from './ccdesign-copy';

describe('ccdesign-copy', () => {
  it('should build', () => {
    expect(new CcdesignCopy()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    let window;

    beforeEach(async () => {
      window = new TestWindow();
      element = await window.load({
        components: [CcdesignCopy],
        html: '<ccdesign-copy></ccdesign-copy>'
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
