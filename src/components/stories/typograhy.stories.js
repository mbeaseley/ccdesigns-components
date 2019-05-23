import { storiesOf } from "@storybook/polymer";
import { withKnobs, text } from "@storybook/addon-knobs";

import { storyStyles } from "./utils";

const defaultTypo = (h1, h2, h3, p, a, li) => `
  <div class="border">
    <ccdesign-copy copy="<h1>${h1}</h1>"></ccdesign-copy>
    <ccdesign-copy copy="<h2>${h2}</h2>"></ccdesign-copy>
    <ccdesign-copy copy="<h3>${h3}</h3>"></ccdesign-copy>
    <ccdesign-copy copy="<p>${p}</p>"></ccdesign-copy>
    <ccdesign-copy copy="<a href=''>Example Link Text</a>"></ccdesign-copy>
    <ccdesign-copy copy="<li>${li}</li>"></ccdesign-copy>
  </div>
`;

storiesOf("Global|Typograhy", module)
  .addDecorator(withKnobs)
  .add(
    "Default Typograhy",
    () => {
      const h1 = text("H1", "Example Header");
      const h2 = text("H2", "Example Header");
      const h3 = text("H3", "Example Header");
      const p = text("P", "Example Text");
      const a = text("A", "Example Link Text");
      const li = text("Li", "Example bullet Text");
      return `
        ${storyStyles}
        ${defaultTypo(h1, h2, h3, p, a, li)}
      `;
    },
  );
