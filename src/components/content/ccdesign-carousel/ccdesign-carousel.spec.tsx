import { CcdesignCarousel } from './ccdesign-carousel';
import { h } from '@stencil/core/testing';

const mockCarouselData = [
  {
    id: 'example1',
    image: 'https://images.ctfassets.net/43i5e5k8e66i/3s2QTQy7ryM46G2ewIesO2/98e50163a5281ceda24048302fdb3b6e/profile_new.jpg',
    alt: 'example1'
  },
  {
    id: 'example2',
    image: 'https://images.ctfassets.net/43i5e5k8e66i/2tbgM7o5Wk6208QeuQM6o0/e40591acca2af7f3eb835a1d3bc57fc2/profile_pic.jpg',
    alt: 'example2'
  },
  {
    id: 'example3',
    image: 'https://images.ctfassets.net/43i5e5k8e66i/57QD3oI2tiUMOmwqyOgI42/aa1f6fc07bd425a6a7cba65f84f10710/profile_station2.jpg',
    alt: 'example3'
  }
];

describe('ccdesign-carousel', () => {
  it('should build', () => {
    expect(new CcdesignCarousel()).toBeTruthy();
  });

  describe('Carousel Functionality', () => {
    it('should process carousel object', () => {
      const result = h('<ccdesign-carousel></ccdesign-carousel>', mockCarouselData);
      expect(result.vattrs[0].id).toBe(mockCarouselData[0].id);
      expect(result.vattrs[1].image).toBe(mockCarouselData[1].image);
      expect(result.vattrs[2].alt).toBe(mockCarouselData[2].alt);
    });
  });
});
