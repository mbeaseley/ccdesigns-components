import { newSpecPage } from '@stencil/core/testing';
import { CcdesignImageCard } from './ccdesign-image-card';

describe('ccdesign-image-card', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [CcdesignImageCard],
      html: '<ccdesign-image-card></ccdesign-image-card>',
    });

    expect(root).toEqualHtml(
      '<ccdesign-image-card><a class="image-card"></a></ccdesign-image-card>',
    );
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [CcdesignImageCard],
      html:
        '<ccdesign-image-card url="https://www.something.com" image-url="https://images.ctfassets.net/43i5e5k8e66i/2bu4HSFHLHGCEuX4epNQ2h/e4683bf9f90227425467b4427fce4e1e/logo-min.jpg" image-alt="CCDesign Web Component Library" description="CCDesign Component Library"></ccdesign-image-card>',
    });

    expect(root).toEqualHtml(
      '<ccdesign-image-card description="CCDesign Component Library" image-alt="CCDesign Web Component Library" image-url="https://images.ctfassets.net/43i5e5k8e66i/2bu4HSFHLHGCEuX4epNQ2h/e4683bf9f90227425467b4427fce4e1e/logo-min.jpg" url="https://www.something.com"><a class="image-card" href="https://www.something.com"><div class="image-card__image"><ccdesign-lazy-image alt="CCDesign Web Component Library" img-src="https://images.ctfassets.net/43i5e5k8e66i/2bu4HSFHLHGCEuX4epNQ2h/e4683bf9f90227425467b4427fce4e1e/logo-min.jpg"></ccdesign-lazy-image></div><div class="image-card__description"><p>CCDesign Component Library</p></div></a></ccdesign-image-card>',
    );
  });
});
