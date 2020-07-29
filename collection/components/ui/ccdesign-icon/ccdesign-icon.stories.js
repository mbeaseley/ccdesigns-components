import { withKnobs, select, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
export default {
    title: 'UI | Icon',
    decorators: [withKnobs, withA11y],
};
const defaultIcon = (icon, color, size) => {
    try {
        return `
      <div class='story story--fit-content'>
        <ccdesign-icon
          name='${icon}'
          color='${color}'
          size='${size}'>
        </ccdesign-icon>
      </div>
    `;
    }
    catch (e) {
        console.log(e);
        return `<div class='story story--fit-content'><p class='error'>Following icon, ${icon}, doesn't exist.</p></div>`;
    }
};
export const Default = () => {
    const icon = text('Icon Name', 'envelope');
    const colorOptions = {
        White: 'white',
        ['Light Grey']: 'light-grey',
        Grey: 'grey',
        ['Dark Grey']: 'dark-grey',
        Black: 'black',
        Blue: 'blue',
    };
    const color = select('Colour', colorOptions, colorOptions['Dark Grey']);
    const sizeOption = {
        ['Extra Extra Small']: 'xxs',
        ['Exta Small']: 'xs',
        Small: 'sm',
        Medium: 'md',
        Large: 'lg',
        ['Exta Large']: 'xl',
        ['Extra Extra Large']: 'xxl',
    };
    const size = select('Size', sizeOption, sizeOption['Extra Extra Large']);
    return `
    ${defaultIcon(icon, color, size)}
  `;
};
