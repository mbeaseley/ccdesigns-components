import { withKnobs, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Content | Copy',
  decorators: [withKnobs, withA11y],
};

export const Default = () => {
  const content = text('Content', '<p>Enter content here</p>');
  return `
    <div class='story story--fit-content'>
      <ccdesign-copy copy='${content}'></ccdesign-copy>
    </div>
  `;
};
