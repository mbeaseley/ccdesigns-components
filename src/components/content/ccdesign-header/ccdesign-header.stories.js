import { storiesOf } from "@storybook/polymer";
import { withKnobs, text} from "@storybook/addon-knobs";

import { storyStyles, noteStyles, renderHTML, renderTable } from "../../stories/utils";

const defaultHeader = (data) => `
  <ccdesign-header data="[ ${data} ]"></ccdesign-header>
`;

const notes = `
  ${noteStyles}
  <h2>Header Component</h2>
  <p>This is a content component that is a must have, same as footer component, on any webapp.</p>
  <p>Similar to Footer component, this component is also used within the template component.</p>
  <h3>HTML Example</h3>
  <code>
    ${renderHTML(
      `<ccdesign-header data="[ {id: '1', name: 'Link1', url: '/'},... ]"></ccdesign-header>`,
    )}
  </code>
  <h3>Options</h3>
  ${renderTable([
    ["Name", "Attribute", "Type", "Default", "Options"],
    ["Data", "data", "array", "-", "{ id: 'id', name: 'string', url: 'url' }"],
  ])}
  <h3>Slots</h3>
  <p>There are no slots used in this component. </p>
`;

const stories = storiesOf("Content|Header", module)
  .addDecorator(withKnobs);

stories.add(
  "Default Variant",
  () => {
    // tslint:disable-next-line
    const data = text("Nav Content", `{ id: '1', name: 'Link1', url: '/' }, { id: '2', name: 'Link2', url: '/link2'}, { id: '3', name: 'Link3', url: '/link3'}, { id: '4', name: 'Link4', url: '/link4' }`);
    return `
      ${storyStyles}
      ${defaultHeader(data)}
    `;
  },
  {notes},
);
