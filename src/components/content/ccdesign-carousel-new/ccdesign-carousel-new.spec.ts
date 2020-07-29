import { newSpecPage } from '@stencil/core/testing';
import { CcdesignCarouselNew } from './ccdesign-carousel-new';

describe('ccdesign-carousel-new', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [CcdesignCarouselNew],
      html: '<ccdesign-carousel-new></ccdesign-carousel-new>',
    });

    expect(root).toEqualHtml(
      '<ccdesign-carousel-new><div class="carousel"></div></ccdesign-carousel-new>',
    );
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [CcdesignCarouselNew],
      html: `<ccdesign-carousel-new data="[{'id':'profilePicture','image':'https://images.ctfassets.net/43i5e5k8e66i/3s2QTQy7ryM46G2ewIesO2/1043c4517ce8d6103d71be32d7c90ef2/profile_new-min.jpg','alt':'Image of Michael Beaseley'},{'id':'profilePicture2','image':'https://images.ctfassets.net/43i5e5k8e66i/2tbgM7o5Wk6208QeuQM6o0/955924a78902a6df9df0bef78ae52b53/profile_pic-min.jpg','alt':'Image of Michael Beaseley(2)'},{'id':'profilePicture3','image':'https://images.ctfassets.net/43i5e5k8e66i/57QD3oI2tiUMOmwqyOgI42/fb97e7fb8bafe8bab7641a23c16584f5/profile_station2-min.jpg','alt':'Image of Michael Beaseley(3)'}]" time-interval="7500"></ccdesign-carousel-new>`,
    });

    expect(root).toEqualHtml(
      `<ccdesign-carousel-new data=\"[{'id':'profilePicture','image':'https://images.ctfassets.net/43i5e5k8e66i/3s2QTQy7ryM46G2ewIesO2/1043c4517ce8d6103d71be32d7c90ef2/profile_new-min.jpg','alt':'Image of Michael Beaseley'},{'id':'profilePicture2','image':'https://images.ctfassets.net/43i5e5k8e66i/2tbgM7o5Wk6208QeuQM6o0/955924a78902a6df9df0bef78ae52b53/profile_pic-min.jpg','alt':'Image of Michael Beaseley(2)'},{'id':'profilePicture3','image':'https://images.ctfassets.net/43i5e5k8e66i/57QD3oI2tiUMOmwqyOgI42/fb97e7fb8bafe8bab7641a23c16584f5/profile_station2-min.jpg','alt':'Image of Michael Beaseley(3)'}]\" time-interval=\"7500\"><div class=\"carousel\"><ccdesign-lazy-image alt=\"Image of Michael Beaseley\" classnames=\"slide-right\" img-src=\"https://images.ctfassets.net/43i5e5k8e66i/3s2QTQy7ryM46G2ewIesO2/1043c4517ce8d6103d71be32d7c90ef2/profile_new-min.jpg\"></ccdesign-lazy-image><ccdesign-lazy-image alt=\"Image of Michael Beaseley(2)\" classnames=\"slide-right\" img-src=\"https://images.ctfassets.net/43i5e5k8e66i/2tbgM7o5Wk6208QeuQM6o0/955924a78902a6df9df0bef78ae52b53/profile_pic-min.jpg\"></ccdesign-lazy-image><ccdesign-lazy-image alt=\"Image of Michael Beaseley(3)\" classnames=\"slide-right\" img-src=\"https://images.ctfassets.net/43i5e5k8e66i/57QD3oI2tiUMOmwqyOgI42/fb97e7fb8bafe8bab7641a23c16584f5/profile_station2-min.jpg\"></ccdesign-lazy-image></div></ccdesign-carousel-new>`,
    );
  });
});
