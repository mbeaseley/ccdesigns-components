import { TestWindow } from '@stencil/core/testing';
import { CcdesignSeparator } from './ccdesign-separator';

describe('ccdesign-separator', () => {
  it('should build', () => {
    expect(new CcdesignSeparator()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    let window;

    beforeEach(async () => {
      window = new TestWindow();
      element = await window.load({
        components: [CcdesignSeparator],
        html: '<ccdesign-separator></ccdesign-separator>'
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
