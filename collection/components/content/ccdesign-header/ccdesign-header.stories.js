import { withKnobs, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
export default {
    title: 'Content | Header',
    decorators: [withKnobs, withA11y],
};
export const Desktop = () => {
    const data = text('Data', '[ { id: "home", name: "Home", url: "/" }, { id: "portfolio", name: "portfolio", url: "/" } ]');
    return `
    <ccdesign-header data='${data}'></ccdesign-header>
  `;
};
export const MobileNavbar = () => {
    const data = text('Data', '[ { id: "home", name: "Home", url: "/" }, { id: "portfolio", name: "portfolio", url: "/" } ]');
    return `
    <ccdesign-header data='${data}'></ccdesign-header>
  `;
};
// Set mobile navbar story parameters
MobileNavbar.story = {
    parameters: {
        viewport: {
            defaultViewport: 'iphonexsmax',
        },
    },
};
