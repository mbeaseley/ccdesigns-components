import { Component, Element, Method, Prop } from '@stencil/core';

@Component({
  tag: 'ccdesign-icon',
  styleUrl: 'ccdesign-icon.scss',
})
export class CcdesignIcon {
  @Prop() name: string;
  @Prop() size = 'xs';
  @Prop() color = 'white';

  @Element() iconEl: HTMLElement;

  @Method()
  componentDidLoad() {
    const url = `https://ccdesigns.blob.core.windows.net/icons/${this.name}.svg`;
    fetch(url)
      .then(res => res.text())
      .then(svg => {
        if (!svg.includes('<svg')) {
          svg = '';
        }
        const result = this.iconEl.querySelector('div');
        result.insertAdjacentHTML('afterbegin', svg);
      });
  }

  render() {
    let inputColor: string;
    const backgroundColors = ['white', 'light-grey', 'grey', 'dark-grey', 'black', 'blue'];
    if (backgroundColors.indexOf(this.color) > -1) {
      inputColor = `icon--${this.color}`;
    } else {
      console.error(`${this.color} is not a defined color. Default color is used.`);
      inputColor = `icon--dark-grey`;
    }

    let inputSize: string;
    const sizes = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
    if (sizes.indexOf(this.size) > -1) {
      inputSize = `icon--${this.size}`;
    } else {
      console.error(`${this.size} is not a defined size for an icon. It has been set to default size of xs`);
      inputSize = 'icon--xs';
    }

    return (
      <div class={`icon ${inputSize} ${inputColor}`}></div>
    );
  }
}
