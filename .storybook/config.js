import { configure, addParameters } from '@storybook/polymer';
import { themes } from '@storybook/theming';



addParameters({
  options: {
    hierarchySeparator: /\/|\./,
    theme: themes.dark
  }
})

function loadStories() {
  require('../src/components/stories/index.stories');

  const req = require.context('../src/components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
