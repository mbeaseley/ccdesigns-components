import { withKnobs, select, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
export default {
    title: 'Data | Placeholder',
    decorators: [withKnobs, withA11y],
};
const placeholderStyle = `
  <style>
    .story__placeholder {
      position: relative;
      height: 400px;
    }
    .placeholder--middle-center {
      transform: translate(0, 0) !important;
    }
  </style>
`;
export const Default = () => {
    const selectOption = {
        Relative: 'relative',
        Absolute: 'absolute',
    };
    const position = select('Position Type', selectOption, selectOption.Relative);
    const alignmentOption = {
        ['Top Left']: 'top-left',
        ['Top Right']: 'top-right',
        ['Top Center']: 'top-center',
        ['Middle Left']: 'middle-left',
        ['Middle Right']: 'middle-right',
        ['Middle Center']: 'middle-center',
        ['Bottom Left']: 'bottom-left',
        ['Bottom Right']: 'bottom-right',
        ['Bottom Center']: 'bottom-center',
    };
    const alignment = select('Position Alignment', alignmentOption, alignmentOption['Top Left']);
    const widthOption = {
        Auto: 'auto',
        ['Minimum Small']: 'min-small',
        Small: 'small',
        Medium: 'medium',
        Large: 'large',
    };
    const width = select('Width', widthOption, widthOption.Auto);
    const heightOption = {
        Auto: 'auto',
        Small: 'small',
        Medium: 'medium',
        Large: 'large',
    };
    const height = select('Height', heightOption, heightOption.Auto);
    const content = text('Content', 'ENTER CONTENT ME');
    return `
    ${placeholderStyle}
    <div class='story'>
      <p>This is a placeholder component, used in combination with other components, namely social-container.</p>
      <p>Does include global styling for base HTML tags.</p>
    </div>
    <div class='story story__placeholder'>
      <ccdesign-placeholder position='${position}' alignment='${alignment}' width='${width}' height='${height}'>
        <div class='story__highlight'>${content}</div>
      </ccdesign-placeholder>
    </div>
  `;
};
// Placeholder parameters
Default.story = {
    parameters: {
        viewport: {
            defaultViewport: 'responsive',
        },
    },
};
