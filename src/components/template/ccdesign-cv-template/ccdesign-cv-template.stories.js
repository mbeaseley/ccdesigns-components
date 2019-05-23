import { storiesOf } from "@storybook/polymer";
import { withKnobs, text} from "@storybook/addon-knobs";

import { storyStyles, noteStyles, renderHTML, renderTable } from "../../stories/utils";

const defaultTemplate = (header, pageMeta, footer) => `
  <div class="border">
    <ccdesign-cv-template
      header="[${header}]"
      page-meta="${pageMeta}"
      footer="${footer}">
    </ccdesign-cv-template>
  </div>
`;

const notes = `
  ${noteStyles}
  <h2>CV Template Component</h2>
  <p>This is a template component used to structure the body of a webapp, including header, footer and meta data.</p>
  <p>Important note, this component used the footer and header components.</p>
  <h3>HTML Example</h3>
  <code>
    ${renderHTML(
      `<ccdesign-cv-template header="[ Object ]" page-meta="[ Object ]" footer="[ Object ]"></ccdesign-cv-template>`,
    )}
  </code>
  <h3>Options</h3>
  ${renderTable([
    ["Name", "Attribute", "Type", "Default", "Options"],
    ["Header", "header", "array", "-", "{ id: 'id', name: 'string', url: 'url' }"],
    ["Page Meta", "page-meta", "object", "-", "{ title: 'string', description: 'string')"],
    ["Footer", "footer", "object", "-", "{ id: 'id', text: 'string', backgroundColor: 'color' }"],
  ])}
  <h3>Slots</h3>
  <p>As mentioned above, this is template component that is container to countless of other components</p>
  ${renderTable([
    ["Name", "Description"],
    ["container", "The default slot is used to render either single and/or multiple components."],
  ])}
`;

const stories = storiesOf("Template|CV Template", module)
  .addDecorator(withKnobs);

stories.add(
  "Default Variant",
  () => {
    // tslint:disable-next-line
    const header = text("Header Content", `{ id: '1', name: 'Link1', url: '/' }, { id: '2', name: 'Link2', url: '/link2'}, { id: '3', name: 'Link3', url: '/link3'}, { id: '4', name: 'Link4', url: '/link4' }`);
    const pageMeta = text("Page Meta", `{ title: 'Example Title', description: 'Example description'}`);
    const footer = text("Footer Content", `{ id: 'id', text: 'Example text', backgroundColor: 'dark-grey'}`);
    return `
      ${storyStyles}
      ${defaultTemplate(header, pageMeta, footer)}
    `;
  },
  {notes},
);
