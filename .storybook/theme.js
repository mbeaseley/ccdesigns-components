import { create } from '@storybook/theming';

export default create({
  base: 'dark',

  colorPrimary: 'black',
  colorSecondary: '#007bff',

  // UI
  appBg: 'black',
  appContentBg: '#0F0F0F',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'white',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'white',
  barBg: 'black',

  // Form colors
  inputBg: '#007bff',
  inputBorder: 'silver',
  inputTextColor: 'white',
  inputBorderRadius: 4,

  brandTitle: 'CCDesign',
  brandUrl: 'http://ccdesign.me.uk/',
  brandImage:
    'https://images.ctfassets.net/43i5e5k8e66i/5hVDQiAmAuPUZu98Et1119/ae85e0daccddd48cfce16beab9217bd6/logo.svg',
});
