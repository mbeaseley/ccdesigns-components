import { TestWindow } from '@stencil/core/testing';
import { CcdesignHeader } from './ccdesign-header';

describe('ccdesign-header', () => {
  it('should build', () => {
    expect(new CcdesignHeader()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    let window;

    beforeEach(async () => {
      window = new TestWindow();
      element = await window.load({
        components: [CcdesignHeader],
        html: '<ccdesign-header></ccdesign-header>'
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
