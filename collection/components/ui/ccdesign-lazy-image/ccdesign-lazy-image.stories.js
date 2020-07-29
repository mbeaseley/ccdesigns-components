import { withKnobs, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
export default {
    title: 'UI | Lazy Image',
    decorators: [withKnobs, withA11y],
};
export const Default = () => {
    const imageUrl = text('Image Url', 'https://images.ctfassets.net/43i5e5k8e66i/3s2QTQy7ryM46G2ewIesO2/1043c4517ce8d6103d71be32d7c90ef2/profile_new-min.jpg');
    const altTag = text('Alt Text', 'Alt content here');
    return `
    <div class='story story--fit-content'>
      <ccdesign-lazy-image img-src='${imageUrl}' alt='${altTag}' />
    </div>
  `;
};
