import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'ccdesign-icon',
  styleUrl: 'ccdesign-icon.scss'
})
export class CcdesignIcon {
  @Prop() iconName: string;
  @Prop() iconSize: string = 'xs';
  @Prop() iconColor: string = 'white';

  @Element() iconEl: HTMLElement;

  componentDidLoad() {
    this.loadSVGIcon();
  }

  componentWillUpdate() {
    this.loadSVGIcon();
  }

  loadSVGIcon() {
    let iconResult = this.iconEl.querySelector('use');
    let ajax = new XMLHttpRequest();

    ajax.open('GET',`https://ccdesigns.blob.core.windows.net/icons/${this.iconName}` + '.svg', true);
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
    const backgroundColors = ['white', 'light-grey', 'grey', 'dark-grey', 'black', 'blue'];
    if (backgroundColors.indexOf(this.iconColor) > -1) {
      inputColor = `icon--${this.iconColor}`;
    } else {
      console.error(`${this.iconColor} is not a defined color. Default color is used.`);
      inputColor = `icon--dark-grey`;
    }

    let inputSize;
    const sizes = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
    if (sizes.indexOf(this.iconSize) > -1) {
      inputSize = `icon--${this.iconSize}`;
    } else {
      console.error(`${this.iconSize} is not a defined size for an icon. It has been set to default size of xs`);
      inputSize = 'icon--xs';
    }

    return (
      <svg class={`icon ${inputColor} ${inputSize}`}>
        <use xlinkHref={`#${this.iconName}`}/>
      </svg>
    );
  }
}
