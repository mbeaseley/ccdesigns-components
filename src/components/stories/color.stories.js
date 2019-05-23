import { storiesOf } from "@storybook/polymer";
import { withKnobs, select } from "@storybook/addon-knobs";

import { storyStyles } from "./utils";

const defaultColor = (color) => {
  let colorChoice;
  const colorsList = [
    {name: "white", color: "#fff"},
    {name: "light-grey", color: "#b4b4b4"},
    {name: "grey", color: "#424242"},
    {name: "dark-grey", color: "#252525"},
    {name: "darker-grey", color: "#1b1b1b"},
    {name: "black", color: "#000"},
    {name: "blue", color: "#007bff"},
  ];

  colorsList.forEach((el) => {
    (el.name === color) ? colorChoice = el.color : colorChoice = colorsList[1].color;
  });
  return `
    <div>
      <div class="border">
        <p>This colour is known as ${color} (${colorChoice}).</p>
        <p>These colours are available to be used on multiple components such as button and Icon</p>
      </div>
      <div class="border" style="background-color: ${colorChoice}; height: 70vh;"></div>
    </div>
  `;
};

const socialColor = (color) => {
  let colorChoice;
  const colorsList = [
    {name: "inner-circle", color: "rgba(128, 227, 255, 1)"},
    {name: "outer-circle", color: "rgba(55, 210, 253, 0.8)"},
    {name: "icons-blue", color: "#007bff"},
    {name: "icons-blue-action", color: "#0056b3"},
  ];
  colorsList.forEach((el) => {
    (el.name === color) ? colorChoice = el.color : colorChoice = colorsList[1].color;
  });
  return `
    <div>
      <div class="border">
        <p>This colour is known as ${color} (${colorChoice}).</p>
        <p>These colours are used for the Social Container Component.</p>
      </div>
      <div class="border" style="background-color: ${colorChoice}; height: 70vh;"></div>
    </div>
  `;
};

const colorStories = storiesOf("Global|Colours", module)
  .addDecorator(withKnobs);

colorStories.add(
  "Base Colours",
  () => {
    const colorArray = [ "white", "light-grey", "grey", "dark-grey", "darker-grey", "black", "blue" ];
    const color = select("Colour", colorArray, "light-grey");
    return `
      ${storyStyles}
      ${defaultColor(color)}
    `;
  },
);

colorStories.add(
  "Social Container Colors",
  () => {
    const colorArray = [ "inner-circle", "outer-circle", "icons-blue", "icons-blue-action" ];
    const color = select("Colour", colorArray, "inner-circle");
    return `
      ${storyStyles}
      ${socialColor(color)}
    `;
  },
);
