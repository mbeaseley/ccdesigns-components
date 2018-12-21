import { TestWindow } from '@stencil/core/testing';
import { CcdesignCarousel } from './ccdesign-carousel';

describe('ccdesign-carousel', () => {
  it('should build', () => {
    expect(new CcdesignCarousel()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    let window;

    beforeEach(async () => {
      window = new TestWindow();
      element = await window.load({
        components: [CcdesignCarousel],
        html: '<ccdesign-carousel></ccdesign-carousel>'
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
