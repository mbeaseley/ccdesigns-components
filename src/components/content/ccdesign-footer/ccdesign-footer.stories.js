import { storiesOf } from "@storybook/polymer";
import { withKnobs, text , select} from "@storybook/addon-knobs";

import { storyStyles, noteStyles, renderHTML, renderTable } from "../../stories/utils";

const defaultFooter = (content, color) => `
  <div class="border">
    <p style="margin: 10px;">Footer is below as it stuck to bottom of viewport!</p>
    <ccdesign-footer data="{ id: 'ccdesign footer', text: '${content}', backgroundColor: '${color}'}"></ccdesign-footer>
  </div>
`;

const notes = `
  ${noteStyles}
  <h2>Footer Component</h2>
  <p>This is a content component that is used at the bottom of a web page to label the creator and/or page.</p>
  <p>Important note, this is used within the template component.</p>
  <h3>HTML Example</h3>
  <code>
    ${renderHTML(
      `<ccdesign-footer data="{id: 'id', text: 'string', backgroundColor: 'color'}"></ccdesign-footer>`,
    )}
  </code>
  <h3>Options</h3>
  ${renderTable([
    ["Name", "Attribute", "Type", "Default", "Options"],
    ["Data", "data", "array", "-", "{ id: 'id', text: 'string', backgroundColor: 'string' }"],
  ])}
  <h3>Slots</h3>
  <p>There are no slots used in this component. </p>
`;

const stories = storiesOf("Content|Footer", module)
  .addDecorator(withKnobs);

stories.add(
  "Default Variant",
  () => {
    const content = text("Footer Content", "© 2019 Copyright: Michael Beaseley");
    const footerColor = {
      "dark-grey": "dark-grey",
      "light-grey": "light-grey",
    };
    const color = select("Colour", footerColor, "dark-grey");
    return `
      ${storyStyles}
      ${defaultFooter(content, color)}
    `;
  },
  {notes},
);
