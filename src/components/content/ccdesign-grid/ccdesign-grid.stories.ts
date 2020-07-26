import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Content | Grid',
  decorators: [withKnobs],
};

export const Default = () => {
  const headerContent = text('Header', 'Header');

  return `
    <div class='story'>
      <ccdesign-grid heading='${headerContent}'>
        <div slot='children' class='box-container'>child</div>
        <div slot='children' class='box-container'>child</div>
        <div slot='children' class='box-container'>child</div>
        <div slot='children' class='box-container'>child</div>
      </ccdesign-grid>
    </div>
  `;
};
