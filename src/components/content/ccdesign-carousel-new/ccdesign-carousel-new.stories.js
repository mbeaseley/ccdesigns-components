import { storiesOf } from "@storybook/polymer";
import { withKnobs, number, array } from "@storybook/addon-knobs";

import { storyStyles, noteStyles, renderHTML, renderTable } from "../../stories/utils";

const defaultCarousel = (data, timeInterval) => `
  <div class="border">
    <ccdesign-carousel-new
      data="[${data}]"
      time-interval="${timeInterval}">
    </ccdesign-carousel-new>
  </div>
`;

const notes = `
  ${noteStyles}
  <h2>New Carousel Component using lazy loaded Images(ccdesign-lazy-image(s))</h2>
  <p>This is content component which allows the users to place a group of images together.</p>
  <h3>HTML Example</h3>
  <code>
    ${renderHTML(
      `<ccdesign-carousel-new data='[Array Of Object]' time-interval='time'></ccdesign-carousel-new>`,
    )}
    <br/>
    Object Format: { id: 'id', image: 'url', alt: 'text' }
  </code>
  <h3>Options</h3>
  ${renderTable([
    ["Name", "Attribute", "Type", "Default", "Options"],
    ["Data", "data", "array", "-", "{ id: 'id', image: 'url', alt: 'string' }"],
    ["Time Interval", "time-interval", "number", "3000", "any number"],
  ])}
  <h3>Slots</h3>
  <p>There are no slots used in this component. </p>
`;

const stories = storiesOf("Content|New Carousel", module)
  .addDecorator(withKnobs);

stories.add(
  "Default Variant",
  () => {
    // tslint:disable-next-line
    const data = array("Image Data", [`{ id: 'profilePicture', image: 'https://images.ctfassets.net/43i5e5k8e66i/3s2QTQy7ryM46G2ewIesO2/98e50163a5281ceda24048302fdb3b6e/profile_new.jpg', alt: 'Image of Michael Beaseley'}`, `{ id: 'profilePicture2', image: 'https://images.ctfassets.net/43i5e5k8e66i/2tbgM7o5Wk6208QeuQM6o0/e40591acca2af7f3eb835a1d3bc57fc2/profile_pic.jpg', alt: 'Image of Michael Beaseley(2)'}` , `{ id: 'profilePicture3', image: 'https://images.ctfassets.net/43i5e5k8e66i/57QD3oI2tiUMOmwqyOgI42/aa1f6fc07bd425a6a7cba65f84f10710/profile_station2.jpg', alt: 'Image of Michael Beaseley(2)'}`]);
    const timeInterval = number("Time Interval", 3000);
    return `
      ${storyStyles}
      ${defaultCarousel(data, timeInterval)}
    `;
  },
  {notes},
);