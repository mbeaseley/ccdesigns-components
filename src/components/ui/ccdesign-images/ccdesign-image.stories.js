import { storiesOf } from "@storybook/polymer";
import { withKnobs, text , select} from "@storybook/addon-knobs";

import { storyStyles, noteStyles, renderHTML, renderTable } from "../../stories/utils";

const defaultImg = (image, alt) => `
  <div class="border">
    <cc-image
      img="${image}"
      alt="${alt}">
    </cc-image>
  </div>
`;

const notes = `
  ${noteStyles}
  <h2>Image Component</h2>
  <p>This is a UI component used to lazy load images on to a webapp.</p>
  <h3>HTML Example</h3>
  <code>
    ${renderHTML(
      `<ccdesign-image img="Example URL" alt="Example Text" />`,
    )}
  </code>
  <h3>Options</h3>
  ${renderTable([
    ["Name", "Attribute", "Type", "Default", "Options"],
    ["Image", "img", "string", "-", "any"],
    ["Alt", "alt", "string", "-", "any"],
  ])}
  <h3>Slots</h3>
  <p>There are no slots used in this component. </p>
`;

const stories = storiesOf("UI|Image", module)
  .addDecorator(withKnobs);

stories.add(
  "Default Image",
  () => {
    const image = text("Image URL", "https://via.placeholder.com/300");
    const alt = text("Alt Tag", "Example Alt Tag Text");
    return `
      ${storyStyles}
      ${defaultImg(image, alt)}
    `;
  },
  {notes},
);
