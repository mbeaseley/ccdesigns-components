import { TestWindow } from '@stencil/core/testing';
import { CcdesignSocialContainer } from './ccdesign-social-container';

describe('ccdesign-social-container', () => {
  it('should build', () => {
    expect(new CcdesignSocialContainer()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    let window;

    beforeEach(async () => {
      window = new TestWindow();
      element = await window.load({
        components: [CcdesignSocialContainer],
        html: '<ccdesign-social-container></ccdesign-social-container>'
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
