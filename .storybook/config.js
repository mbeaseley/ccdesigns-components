import { configure, addParameters } from '@storybook/polymer';

import theme from './theme';



addParameters({
  options: {
    hierarchySeparator: /\/|\./,
    theme: theme,
  }
})

function loadStories() {
  require('../src/components/stories/index.stories');

  const req = require.context('../src/components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
