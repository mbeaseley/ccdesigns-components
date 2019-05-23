import { storiesOf } from "@storybook/polymer";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import { storyStyles, noteStyles, renderHTML, renderTable } from "../../stories/utils";

/* tslint:disable */
const defaultIcon = (icon, color, size) => {
  try {
    return `
      <div class="border">
        <ccdesign-icon
          name="${icon}"
          color="${color}"
          size="${size}">
        </ccdesign-icon>
      </div>
    `;
  } catch (e) {
    return `<p class="error">Following icon, ${icon}, </p>`;
  }
};

const notes = `
  ${noteStyles}
  <h2>Icon Component</h2>
  <p>This is a UI component that, as name says, adds icons to any part of other content based components.</p>
  <p>Important note, the icons come from font-awesome so please refer to this <a href="https://fontawesome.com/icons?d=gallery&m=free">link</a></p>
  <h3>HTML Example</h3>
  <code>
    ${renderHTML(
      `<ccdesign-icon name="string" color="string" size="string"></ccdesign-icon>`,
    )}
  </code>
  <h3>Options</h3>
  ${renderTable([
    ["Name", "Attribute", "Type", "Default", "Options"],
    ["Name", "name", "string", "-", "any"],
    ["Colour", "color", "string", "-", "any"],
    ["Size", "size", "string", "-", "any"],
  ])}
  <h3>Slots</h3>
  <p>There are no slots used in this component. </p>
`;

const stories = storiesOf("UI|Icon", module)
  .addDecorator(withKnobs);

stories.add(
  "Default Variant",
  () => {
    const icon = text("Icon name", "envelope");
    const color = select("Colour", ["white", "light-grey", "grey", "dark-grey", "black", "blue"], "white");
    const size = select("Colour", ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"], "xxl");
    return `
      ${storyStyles}
      ${defaultIcon(icon, color, size)}
    `;
  },
  {notes},
);
