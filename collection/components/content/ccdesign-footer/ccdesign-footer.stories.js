import { withKnobs, select, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
export default {
    title: 'Content | Footer',
    decorators: [withKnobs, withA11y],
};
export const Default = () => {
    const textContent = text('Text', `© 2019 Copyright: Michael Beaseley`);
    const colorOptions = {
        White: 'white',
        ['Light Grey']: 'light-grey',
        Grey: 'grey',
        ['Dark Grey']: 'dark-grey',
        Black: 'black',
        Blue: 'blue',
    };
    const color = select('Colour', colorOptions, colorOptions['Dark Grey']);
    return `
    <ccdesign-footer data="{ id: 'ccdesign footer', text: '${textContent}', backgroundColor: '${color}'}"></ccdesign-footer>
  `;
};
// Default story parameters
Default.story = {
    parameters: {
        viewport: {
            defaultViewport: 'responsive',
        },
    },
};
