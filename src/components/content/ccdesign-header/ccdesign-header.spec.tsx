import { h } from '@stencil/core/testing';

import { CcdesignHeader } from './ccdesign-header';

const mockHeaderData = [
  {
    id: 'example1',
    url: '/example1',
    name: 'example1',
  },
  {
    id: 'example2',
    url: '/example2',
    name: 'example2',
  },
  {
    id: 'example2',
    url: '/example2',
    name: 'example2',
  },
];

describe('ccdesign-header', () => {
  it('should build', () => {
    expect(new CcdesignHeader()).toBeTruthy();
  });

  describe('header functionality', () => {
    it('should process header object', () => {
      const result = h('<ccdesign-header></ccdesign-header>', mockHeaderData);
      expect(result.vattrs[0].id).toBe(mockHeaderData[0].id);
      expect(result.vattrs[1].url).toBe(mockHeaderData[1].url);
      expect(result.vattrs[2].name).toBe(mockHeaderData[2].name);
    });
  });
});
