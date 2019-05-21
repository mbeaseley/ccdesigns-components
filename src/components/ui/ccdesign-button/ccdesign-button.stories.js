import { storiesOf } from "@storybook/polymer";
import { withKnobs, text , select} from "@storybook/addon-knobs";

import { storyStyles, noteStyles, renderHTML, renderTable } from "../../stories/utils";

const defaultButton = (icon, color, content, url) => {
  try {
    return `
      <div class="border">
        <ccdesign-button
          icon="${icon}"
          type="text"
          color="${color}"
          text="${content}"
          url="${url}">
        </ccdesign-button>
      </div>
    `;
  } catch (err) {
    return `<p class="error">There was a problem rendering the component. Please look at knobs for correct input!!</p>`;
  }
};

const notes = `
  ${noteStyles}
  <h2>Button Component</h2>
  <p>This is a UI component used as a wrapper for a simple text based button.</p>
  <p>Important note, this component used the icon component.</p>
  <h3>HTML Example</h3>
  <code>
    ${renderHTML(
      `<ccdesign-button icon="string" type="string" color="string" text="string" url="string" />`,
    )}
  </code>
  <h3>Options</h3>
  ${renderTable([
    ["Name", "Attribute", "Type", "Default", "Options"],
    ["Text", "Text", "string", "-", "any"],
    ["Url", "url", "string", "-", "any"],
    ["Icon", "icon", "string", "-", "any"],
    ["Color", "color", "string", "-", "any"],
    ["Type", "type", "string", "-", "any"],
    ["Event Name", "eventname", "string", "-", "any"],
  ])}
  <h3>Slots</h3>
  <p>There are no slots used in this component. </p>
`;

const stories = storiesOf("UI|Button", module)
  .addDecorator(withKnobs);

stories.add(
  "Default Variant",
  () => {
    const icon = text("Icon name", "chevron-left");
    const color = select("Colour", ["white", "light-grey", "grey", "dark-grey", "black", "blue"], "light-grey");
    const content = text("Text", "Example Button");
    const url = text("URL", "/");
    return `
      ${storyStyles}
      ${defaultButton(icon, color, content, url)}
    `;
  },
  {notes},
);
