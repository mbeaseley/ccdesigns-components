import { configure, addParameters } from '@storybook/polymer';
import { themes } from '@storybook/theming';



addParameters({
  options: {
    hierarchySeparator: /\/|\./,
    theme: themes.dark
  }
})

const req = require.context('../src/components', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
