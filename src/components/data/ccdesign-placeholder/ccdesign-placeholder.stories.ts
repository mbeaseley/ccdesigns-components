import { withKnobs, select, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Data | Placeholder',
  decorators: [withKnobs, withA11y],
};

// const placeholderStyle = `
//   <style>
//     .story__highlight {
//       height: 100%;
//       width: 100%;
//     }
//   </style>
// `;

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
    ['Middle Left']: 'Middle-left',
    ['Middle Right']: 'Middle-right',
    ['Middle Center']: 'Middle-center',
    ['Bottom Left']: 'Bottom-left',
    ['Bottom Right']: 'Bottom-right',
    ['Bottom Center']: 'Bottom-center',
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
    <div class='story'>
      <p>This is a placeholder component, used in combination with other components, namely social-container.</p>
      <p>Does include global styling for base HTML tags.</p>
    </div>
    <ccdesign-placeholder position='${position}' alignment='${alignment}' width='${width}' height='${height}'>
      <div class='story__highlight'>${content}</div>
    </ccdesign-placeholder>
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
