import { withKnobs, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
export default {
    title: 'Content | Grid',
    decorators: [withKnobs, withA11y],
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
