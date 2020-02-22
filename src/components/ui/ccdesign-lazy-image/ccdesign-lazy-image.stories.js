import { storiesOf } from "@storybook/polymer";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import { storyStyles, noteStyles, renderHTML, renderTable } from "../../stories/utils";

/* tslint:disable */
const defaultImage = (src, alt, classNames) => {
  try {
    return `
      <div class="border">
        <ccdesign-lazy-image
          img-src="${src}"
          alt="${alt}"
          size="${classNames}">
        </ccdesign-lazy-image>
      </div>
    `;
  } catch (e) {
    return `<p class="error">Following src, ${src}, </p>`;
  }
};

const notes = `
  ${noteStyles}
  <h2>Icon Component</h2>
  <p>This is a UI component that, as name says, adds images. The images are lazy loaded using intersection observers and only loads in once fully loaded.</p>
  <h3>HTML Example</h3>
  <code>
    ${renderHTML(
      `<ccdesign-lazy-image img-src="string" alt="string" class-names="string"></ccdesign-lazy-image>`,
    )}
  </code>
  <h3>Options</h3>
  ${renderTable([
    ["Name", "Attribute", "Type", "Default", "Options"],
    ["Image source", "img-src", "string", "-", "any"],
    ["alt", "alt", "string", "-", "any"],
    ["class Names", "class-names", "string", "-", "any"],
  ])}
  <h3>Slots</h3>
  <p>There are no slots used in this component. </p>
`;

const stories = storiesOf("UI|Lazy Loaded Image", module)
  .addDecorator(withKnobs);

stories.add(
  "Default Variant",
  () => {
    const src = text("Image URL", "https://i.picsum.photos/id/877/300/300.jpg");
    const alt = select("Alt", "");
    return `
      ${storyStyles}
      ${defaultImage(src, alt)}
    `;
  },
  {notes},
);
