import { configure, addParameters, addDecorator } from '@storybook/polymer';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y);
addParameters({
  options: {
    hierarchyRootSeparator: /\|/,
  },
});

function loadStories() {
  require('../src/components/stories/index.stories');

  const req = require.context('../src/components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
