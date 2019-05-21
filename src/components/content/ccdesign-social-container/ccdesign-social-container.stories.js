import { storiesOf } from "@storybook/polymer";
import { withKnobs, text } from "@storybook/addon-knobs";

import { storyStyles, noteStyles, renderHTML, renderTable } from "../../stories/utils";

const defaultContainer = (icon, url) => `
  <div class="border">
    <ccdesign-social-container
      icon="${icon}"
      url="${url}">
    </ccdesign-social-container>
  </div>
`;

const notes = `
  ${noteStyles}
  <h2>Social Container Component</h2>
  <p>This is a content component that is used to place an icon with url on a webpage.</p>
  <p>Icons are generated through the Icon Component with icons coming from font-awesome package.</p>
  <h3>HTML Example</h3>
  <code>
    ${renderHTML(
      `<ccdesign-social-container icon="icon-name" url="url"></ccdesign-social-container>`,
    )}
  </code>
  <h3>Options</h3>
  ${renderTable([
    ["Name", "Attribute", "Type", "Default", "Options"],
    ["Icon", "icon", "string", "-", "any"],
    ["URL", "url", "url", "-", "any"],
  ])}
  <h3>Slots</h3>
  <p>There are no slots used in this component. </p>
`;

const stories = storiesOf("Content|Social Container", module)
  .addDecorator(withKnobs);

stories.add(
  "Default Variant",
  () => {
    const icon = text("Icon name", "envelope");
    const url = text("URL", "/");
    return `
      ${storyStyles}
      ${defaultContainer(icon, url)}
    `;
  },
  {notes},
);
