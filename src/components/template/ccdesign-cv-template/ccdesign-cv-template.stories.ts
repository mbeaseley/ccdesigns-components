import { withKnobs, select, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Template | CV Template',
  decorators: [withKnobs, withA11y],
};

const templateStyles = `
  <style>
    .placeholder {
      border: 1px solid #ff0000;
    }
  </style>
`;

const element = (header, footerContent, footerColor) => `
  ${templateStyles}
  <ccdesign-cv-template header='${header}' footer="{ id: 'ccdesign footer', text: '${footerContent}', backgroundColor: '${footerColor}'}">
    <div class='page__body--left story__highlight'>
      <div slot='left-side'>
        <p>LEFT SIDE</p>
        <p>
          Template showed here is used at <a href='https://ccdesign.me.uk/'>https://ccdesign.me.uk/</a>. Highlights template contains 3 slots: left-side, right-side & container (All highlighted in red border).</div>
        </p>
      </div>
    </div>
    <div class='page__body--right story__highlight'>
      <div slot='right-side'>
        <p>RIGHT SIDE</p>
      </div>
    </div>
    <ccdesign-placeholder
      slot='container'
      position='absolute'
      alignment='middle-center'
      width='min-small'
      height='auto'
    >
      <ccdesign-social-container
        url='https://www.linkedin.com/in/michael-beaseley-817b5a101'
        icon='linkedin'
      ></ccdesign-social-container>
      <ccdesign-social-container url='https://twitter.com/MTBeaseley' icon='twitter'>
      </ccdesign-social-container>
      <ccdesign-social-container url='https://github.com/mbeaseley' icon='github'>
      </ccdesign-social-container>
      <ccdesign-social-container url='mailto:m.t.beaseley@gmail.com' icon='envelope'>
      </ccdesign-social-container>
    </ccdesign-placeholder>
  </ccdesign-cv-template>
`;

export const Desktop = () => {
  const header = text(
    'Header',
    `[ { id: 'home', name: 'Home', url: '/' }, { id: 'portfolio', name: 'Portfolio', url: '/portfolio'} ]`,
  );
  const footerContent = text('Text', `© 2019 Copyright: Michael Beaseley`);
  const colorOptions = {
    White: 'white',
    ['Light Grey']: 'light-grey',
    Grey: 'grey',
    ['Dark Grey']: 'dark-grey',
    Black: 'black',
    Blue: 'blue',
  };
  const footerColor = select('Colour', colorOptions, colorOptions['Dark Grey']);

  return `
    ${element(header, footerContent, footerColor)}
  `;
};
// Set Desktop navbar story parameters
Desktop.story = {
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
  },
};

export const Tablet = () => {
  const header = text(
    'Header',
    `[ { id: 'home', name: 'Home', url: '/' }, { id: 'portfolio', name: 'Portfolio', url: '/portfolio'} ]`,
  );
  const footerContent = text('Text', `© 2019 Copyright: Michael Beaseley`);
  const colorOptions = {
    White: 'white',
    ['Light Grey']: 'light-grey',
    Grey: 'grey',
    ['Dark Grey']: 'dark-grey',
    Black: 'black',
    Blue: 'blue',
  };
  const footerColor = select('Colour', colorOptions, colorOptions['Dark Grey']);

  return `
    ${element(header, footerContent, footerColor)}
  `;
};

export const Mobile = () => {
  const header = text(
    'Header',
    `[ { id: 'home', name: 'Home', url: '/' }, { id: 'portfolio', name: 'Portfolio', url: '/portfolio'} ]`,
  );
  const footerContent = text('Text', `© 2019 Copyright: Michael Beaseley`);
  const colorOptions = {
    White: 'white',
    ['Light Grey']: 'light-grey',
    Grey: 'grey',
    ['Dark Grey']: 'dark-grey',
    Black: 'black',
    Blue: 'blue',
  };
  const footerColor = select('Colour', colorOptions, colorOptions['Dark Grey']);

  return `
    ${element(header, footerContent, footerColor)}
  `;
};
// Set mobile navbar story parameters
Mobile.story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphonexsmax',
    },
  },
};
