import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ccdesign-carousel-new', () => {
  let page: E2EPage;

  beforeEach(async () => {
    page = await newE2EPage({});
  });

  it('renders', async () => {
    await page.setContent('<ccdesign-carousel-new></ccdesign-carousel-new>');
    const element = await page.find('ccdesign-carousel-new');
    expect(element).toHaveClass('hydrated');
  });

  it('renders with values', async () => {
    await page.setContent(
      `<ccdesign-carousel-new data="[{'id':'profilePicture','image':'https://images.ctfassets.net/43i5e5k8e66i/3s2QTQy7ryM46G2ewIesO2/1043c4517ce8d6103d71be32d7c90ef2/profile_new-min.jpg','alt':'Image of Michael Beaseley'},{'id':'profilePicture2','image':'https://images.ctfassets.net/43i5e5k8e66i/2tbgM7o5Wk6208QeuQM6o0/955924a78902a6df9df0bef78ae52b53/profile_pic-min.jpg','alt':'Image of Michael Beaseley(2)'},{'id':'profilePicture3','image':'https://images.ctfassets.net/43i5e5k8e66i/57QD3oI2tiUMOmwqyOgI42/fb97e7fb8bafe8bab7641a23c16584f5/profile_station2-min.jpg','alt':'Image of Michael Beaseley(3)'}]" time-interval="7500"></ccdesign-carousel-new>`,
    );
    const element = await page.findAll('ccdesign-lazy-image');
    expect(element.length).toEqual(3);
  });
});
