import { newE2EPage } from '@stencil/core/testing';

describe('ccdesign-image-card', () => {
  it('renders', async () => {
    const page = await newE2EPage({});

    await page.setContent('<ccdesign-image-card></ccdesign-image-card>');
    const element = await page.find('ccdesign-image-card');
    expect(element).toHaveClass('hydrated');
  });

  it('renders with values', async () => {
    const page = await newE2EPage({});

    await page.setContent(
      '<ccdesign-image-card url="https://www.something.com" image-url="https://images.ctfassets.net/43i5e5k8e66i/2bu4HSFHLHGCEuX4epNQ2h/e4683bf9f90227425467b4427fce4e1e/logo-min.jpg" image-alt="CCDesign Web Component Library" description="CCDesign Component Library"></ccdesign-image-card>',
    );
    const element = await page.find('ccdesign-image-card');
    const aElement = await page.find('a');
    const imageElement = await page.find('ccdesign-lazy-image');
    expect(element).toHaveClass('hydrated');
    expect(aElement.getAttribute('href')).toEqual('https://www.something.com');
    expect(imageElement.getAttribute('img-src')).toEqual(
      'https://images.ctfassets.net/43i5e5k8e66i/2bu4HSFHLHGCEuX4epNQ2h/e4683bf9f90227425467b4427fce4e1e/logo-min.jpg',
    );
  });
});
