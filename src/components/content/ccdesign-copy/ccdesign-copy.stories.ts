import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Content | Copy',
  decorators: [withKnobs],
};

export const Default = () => {
  const content = text('Content', '<p>Enter content here</p>');
  return `
    <div class='story story--fit-content'>
      <ccdesign-copy copy='${content}'></ccdesign-copy>
    </div>
  `;
};
