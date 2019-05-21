import { storiesOf } from "@storybook/polymer";
import { withKnobs, text , select} from "@storybook/addon-knobs";

import { storyStyles, noteStyles, renderHTML, renderTable } from "../../stories/utils";

const defaultPlaceholder = () => `
  <div class="border">
    <p style="margin: 10px;">Placeholder component places container in center of webpage!</p>
    <ccdesign-placeholder>
      <div class="boxContainer">
        <ccdesign-copy
          copy="<p style='margin: 0;'>Container is here!</p>"
        </ccdesign-copy>
      </div>
    </ccdesign-placeholder>
  </border>
`;

const notes = `
  ${noteStyles}
  <h2>Placeholder Component</h2>
  <p>This is a data component that is a container for other components through slots.</p>
  <h3>HTML Example</h3>
  <code>
    ${renderHTML(
      ` <ccdesign-placeholder>...</ccdesign-placeholder>`,
    )}
  </code>
  <h3>Options</h3>
  <p>There are no options/atributes used in this component. </p>
  <h3>Slots</h3>
  <p style="margin-bottom: 0;">This component has no specific references with any slot names.</p>
  <p style="margin: 0;">Just place anything within this component and it will be contained inside.</p>
`;

const stories = storiesOf("Data|Placeholder", module);

stories.add(
  "Default Variant",
  () => {
    return `
      ${storyStyles}
      ${defaultPlaceholder()}
    `;
  },
  {notes},
);
