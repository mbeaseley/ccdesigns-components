import { storiesOf } from "@storybook/polymer";
import { withKnobs, text } from "@storybook/addon-knobs";

import { storyStyles, noteStyles, renderHTML, renderTable } from "../../stories/utils";

const defaultCopy = (copy) => `
  <div class="border">
    <ccdesign-copy
      copy="${copy}">
    </ccdesign-copy>
  </div>
`;

const notes = `
  ${noteStyles}
  <h2>Copy Component</h2>
  <p>This is a content component which allows the user to place text on a webpage.</p>
  <h3>HTML Example</h3>
  <code>
    ${renderHTML(
      `<ccdesign-copy copy="Text here"></ccdesign-copy>`,
    )}
  </code>
  <h3>Options</h3>
  ${renderTable([
    ["Name", "Attribute", "Type", "Default", "Options"],
    ["Copy", "copy", "string", "-", "any"],
  ])}
  <h3>Slots</h3>
  <p>There are no slots used in this component. </p>
`;

const stories = storiesOf("Content|Copy", module)
  .addDecorator(withKnobs);

stories.add(
  "Default Variant",
  () => {
    // tslint:disable-next-line
    const copy = text("Text", "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>");
    return `
      ${storyStyles}
      ${defaultCopy(copy)}
    `;
  },
  {notes},
);
