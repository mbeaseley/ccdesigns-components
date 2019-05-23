import { storiesOf } from "@storybook/polymer";
import { withKnobs, text , number} from "@storybook/addon-knobs";

import { storyStyles, noteStyles, renderHTML, renderTable } from "../../stories/utils";

const defaultGrid = (heading, column) => `
  <div class="border">
    <ccdesign-grid heading="${heading}" columns="${column}">
      <div slot="children" ${style}>1</div>
      <div slot="children" ${style}>2</div>
      <div slot="children" ${style}>3</div>
      <div slot="children" ${style}>4</div>
      <div slot="children" ${style}>5</div>
      <div slot="children" ${style}>6</div>
      <div slot="children" ${style}>7</div>
    </ccdesign-grid>
  </div>
`;

const style = `style="background-color: red; padding: 30px; font-size: 18px"`;

const notes = `
  ${noteStyles}
  <h2>Grid Component</h2>
  <p>This is a content component that is used to hold and structure other content components on the webpage.</p>
  <p>Please refer to slot sections to see what can be done with this component.</p>
  <h3>HTML Example</h3>
  <code>
    ${renderHTML(
      `<ccdesign-grid heading="Heading" columns="number">
        <div slot="children"></div>
        ...
      </ccdesign-grid>`,
    )}
  </code>
  <h3>Options</h3>
  ${renderTable([
    ["Name", "Attribute", "Type", "Default", "Options"],
    ["Heading", "heading", "string", "-", "any"],
    ["Columns", "columns", "number", "-", "number"],
  ])}
  <h3>Slots</h3>
  <p>As mentioned above, this is content component that can be a container to countless of other components</p>
  ${renderTable([
    ["Name", "Description"],
    ["children", "The default slot is used to render the content which is layed out in the columns."],
  ])}
`;

const stories = storiesOf("Content|Grid", module)
  .addDecorator(withKnobs);

stories.add(
  "Default Variant",
  () => {
    const heading = text("heading", "HEADING");
    const column = number("Column", 2, { range: true, min: 1, max: 6, step: 1 });
    return `
      ${storyStyles}
      ${defaultGrid(heading, column)}
    `;
  },
  {notes},
);
