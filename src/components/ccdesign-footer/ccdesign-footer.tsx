import { Component, Prop } from "@stencil/core";

@Component({
  tag: "ccdesign-footer",
  styleUrl: "ccdesign-footer.scss",
  shadow: false
})
export class CcdesignFooter {
  @Prop() backgroundColor: string;
  @Prop() text: string;

  render() {
    let inputColor;
    const backgroundColors = ["white", "light-grey", "grey", "dark-grey", "black"];
    if (backgroundColors.indexOf(this.backgroundColor) > -1) {
      inputColor = `footer--${this.backgroundColor}`;
    } else {
      console.error(`${this.backgroundColor} is not a defined color. Default color is used.`);
      inputColor = `footer--dark-grey`;
    }

    return (
      <div class={`footer ${inputColor}`} innerHTML={this.text} />
    );
  }
}
