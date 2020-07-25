import { storiesOf } from '@storybook/html';

// import { storyStyles, noteStyles, renderHTML, renderTable } from './utils';

const welcome = () => {
  return `
    <div class="body-container">
      <ccdesign-copy copy="<h1>Welcome to CCDesign-components!</h1>"></ccdesign-copy>
      <ccdesign-copy class="margin" copy="<p>This is the UI Environment for CCDesign Web Components.
        This is an interactive demo area for the user to play around with the created UI components.
        Most, not all, components will have a series of addons applied to them which are Knobs, Action and Notes.
        Please play around with these and read the notes in each compoent to see what they are, and how to use them.</p>">
      </ccdesign-copy>
      <img src="https://images.ctfassets.net/43i5e5k8e66i/3uqgEDpiPCCkgiaCYEc2AQ/12e8ae839d5a8e9bff8c06a6cdfd0706/ccdesign-min.png"
          alt="CCDesign Web Component Library"
          height="256"
          width="256"
          style="display: block; margin: auto;">
  `;
};
// <h3>Components</h3>
// <h3 style="font-size: 14px;">Content Components</h3>
// ${renderTable([
//   [
//     'Carousel',
//     'A component that holds a mininum of 3 images and will slide each one by one to center and repeat.',
//   ],
//   ['Copy', 'A component that holds html allowed text that can be placed in any location.'],
//   [
//     'Footer',
//     'This is a key component for the template and will exist at the bottom of a webpage.',
//   ],
//   ['Grid', 'A component that can hold other components in a formatted structure on a page.'],
//   [
//     'Header',
//     'This is a key component for the template and will exist at the top of any page.',
//   ],
//   ['Image Card', 'A component that holds image and label which is a link to external pages.'],
//   [
//     'Social Container',
//     'A component that is used to hold an icon to act as a link to a external page.',
//   ],
// ])}
// <h3 style="font-size: 14px; margin-top: 10px;">Data Components</h3>
// ${renderTable([['Placeholder', 'A component that is a placeholder for other components.']])}
// <h3 style="font-size: 14px; margin-top: 10px;">Global Components</h3>
// ${renderTable([
//   ['Colour', 'Not a component but a refers to what colours are available to be used.'],
//   ['Typography', 'Not a component but a refers to what style of text is available.'],
// ])}
// <h3 style="font-size: 14px; margin-top: 10px;">Template Components</h3>
// ${renderTable([
//   [
//     'CV Template',
//     'A component that sets the structure for a webpage, including header and footer.',
//   ],
// ])}
// <h3 style="font-size: 14px; margin-top: 10px;">UI Components</h3>
// ${renderTable([
//   ['Button', 'A component that can add button element to other components.'],
//   ['Icon', 'A component that can add icon element to other components.'],
//   ['Separator', 'A component that can split up areas and content on webpages.'],
// ])}
// <br>
// </div>

const styles = `
    <style>
      .notesTable tr th{
        color: #fff;
        padding: 10px 5px 10px 10px;
        font-size: 14px;
      }
    </style>
`;

storiesOf('Welcome', module).add('Welcome', () => {
  return `
    ${styles}
    ${welcome()}
  `;
});
