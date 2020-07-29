import { withKnobs, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
export default {
    title: 'Content | Image Card',
    decorators: [withKnobs, withA11y],
};
const imageCardStyles = `
  <style>
    .story {
      width: 50vw;
    }
  </style>
`;
export const Default = () => {
    const imageUrl = text('Image Url', 'https://images.ctfassets.net/43i5e5k8e66i/2bu4HSFHLHGCEuX4epNQ2h/e4683bf9f90227425467b4427fce4e1e/logo-min.jpg');
    const imageAlt = text('Image Alt', 'CCDesign Web Component Library');
    const description = text('Description', 'CCDesign Component Library');
    return `
    ${imageCardStyles}
    <div class='story'>
      <ccdesign-image-card
        url='/'
        image-url='${imageUrl}'
        image-alt='${imageAlt}'
        description='${description}'>
      </ccdesign-image-card>
    </div>
  `;
};
