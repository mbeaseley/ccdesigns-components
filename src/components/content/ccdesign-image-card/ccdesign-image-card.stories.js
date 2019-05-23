import { storiesOf } from "@storybook/polymer";
import { withKnobs, text} from "@storybook/addon-knobs";

import { storyStyles, noteStyles, renderHTML, renderTable } from "../../stories/utils";

const defaultImageCard = (description, imageAlt, imageUrl, url) => `
  ${styles}
  <div class="border">
    <ccdesign-image-card
      description="${description}"
      image-alt="${imageAlt}"
      image-url="${imageUrl}"
      url="${url}">
    </ccdesign-image-card>
  </div>
`;

const styles = `
  <style>
    .border {
      width: 30%;
    }
  </style>
`;

const notes = `
  ${noteStyles}
  <h2>Image Card Component</h2>
  <p>This is a content component that is used to icon button linked to further pages, containing label and image.</p>
  <h3>HTML Example</h3>
  <code>
    ${renderHTML(
      `<ccdesign-image-card description="string" image-alt="string" image-url="url" url="href"></ccdesign-image-card>`,
    )}
  </code>
  <h3>Options</h3>
  ${renderTable([
    ["Name", "Attribute", "Type", "Default", "Options"],
    ["Description", "description", "string", "-", "any"],
    ["Image Alt", "image-alt", "url", "-", "any"],
    ["URL", "url", "string", "-", "any"],
  ])}
  <h3>Slots</h3>
  <p>There are no slots used in this component. </p>
`;

const stories = storiesOf("Content|Image Card", module)
  .addDecorator(withKnobs);

stories.add(
  "Default Variant",
  () => {
    const description = text("Description", "Example Description");
    const imageAlt = text("Image Alt", "Example Alt");
    // tslint:disable-next-line
    const imageUrl = text("Image URL", "https://images.ctfassets.net/43i5e5k8e66i/2bu4HSFHLHGCEuX4epNQ2h/8bf0a45ede95ace2a8d115374405b672/logo.png");
    const url = text("URL", "/");
    return `
      ${storyStyles}
      ${defaultImageCard(description, imageAlt, imageUrl, url)}
    `;
  },
  {notes},
);
