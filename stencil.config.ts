import { Config } from '@stencil/core';
const { sass } = require('@stencil/sass');

export const config: Config = {
  namespace: 'ccdesigns-ui',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ],
  plugins: [
    sass()
  ]
};
