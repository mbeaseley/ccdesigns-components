import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'ccdesign-icon',
  styleUrl: 'ccdesign-icon.scss'
})
export class CcdesignIcon {
  @Prop() iconName: string;

  @Element() iconEl: HTMLElement;

  componentDidLoad() {
    let iconResult = this.iconEl.querySelector("use");
    let ajax = new XMLHttpRequest();

    ajax.open("GET",`https://ccdesigns.blob.core.windows.net/icons/${this.iconName}` + ".svg", true);
    // ajax.onload = () => {
    //   // let iconResponse = ajax.responseText;
    //   // iconResponse = iconResponse.replace(
    //   //   `<svg`,
    //   //   `<svg id=${this.iconName}`
    //   // );
    //   iconResult.innerHTML = ajax.responseText;
    // };
    // ajax.send();

    console.log(iconResult);
    debugger;
  }

  render() {
    return (
      <svg>
        <use/>
      </svg>
    );
  }
}
