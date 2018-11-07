import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'ccdesign-icon',
  styleUrl: 'ccdesign-icon.scss'
})
export class CcdesignIcon {
  @Prop() iconName: string;
  @Prop() iconSize: string = "icon--xs";
  @Prop() iconColor: string = "icon--white";

  @Element() iconEl: HTMLElement;

  componentDidLoad() {
    let iconResult = this.iconEl.querySelector("use");
    let ajax = new XMLHttpRequest();

    ajax.open("GET",`https://ccdesigns.blob.core.windows.net/icons/${this.iconName}` + ".svg", true);
    ajax.onload = () => {
      let iconResponse = ajax.responseText;
      iconResponse = iconResponse.replace(
        `layer_1`,
        `${this.iconName}`
      );
      iconResult.innerHTML = iconResponse;
    };
    ajax.send();
  }

  render() {
    let inputColor;
    const backgroundColors = ["white", "light-grey", "grey", "dark-grey", "black"];
    if (backgroundColors.indexOf(this.iconColor) > -1) {
      inputColor = `icon--${this.iconColor}`;
    } else {
      console.error(`${this.iconColor} is not a defined color. Default color is used.`);
      inputColor = `icon--dark-grey`;
    }
    return (
      <svg class={`icon ${inputColor}`}>
        <use xhreflink={`#${this.iconName}`}/>
      </svg>
    );
  }
}
