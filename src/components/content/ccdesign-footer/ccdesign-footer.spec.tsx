import { CcdesignFooter } from './ccdesign-footer';
import { h } from '@stencil/core/testing';

const mockFooterData = {
  id: 'example', 
  text: 'example text',
  backgroundColor: 'exampleColor'
};

describe('ccdesign-footer', () => {
  it('should build', () => {
    expect(new CcdesignFooter()).toBeTruthy();
  });

  describe('footer functionality', () => {
    it('should process footer object', () => {
      const result = h('<ccdesign-footer></ccdesign-footer>', mockFooterData);
      expect(result.vattrs.id).toBe(mockFooterData.id);
      expect(result.vattrs.text).toBe(mockFooterData.text);
      expect(result.vattrs.backgroundColor).toBe(mockFooterData.backgroundColor);
    });
  })
});
