import { storiesOf } from "@storybook/polymer";

import { storyStyles, noteStyles, renderHTML, renderTable } from "../../stories/utils";

const defaultIcon = () => `
  <div class="border">
    <ccdesign-separator />
  </div>
`;

const notes = `
  ${noteStyles}
  <h2>Separator Component</h2>
  <p>This is a UI component that, by name, acts as a way of splitting up the main body of a webpage.</p>
  <h3>HTML Example</h3>
  <code>
    ${renderHTML(
      `<ccdesign-separator />`,
    )}
  </code>
  <h3>Options</h3>
  <p>There are no options used in this component.</p>
  <h3>Slots</h3>
  <p>There are no slots used in this component. </p>
`;

const stories = storiesOf("UI|Separator");

stories.add(
  "Default Variant",
  () => {
    return `
      ${storyStyles}
      ${defaultIcon()}
    `;
  },
  {notes},
);
