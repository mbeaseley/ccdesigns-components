import { Component, Element, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'ccdesign-icon',
  styleUrl: 'ccdesign-icon.scss',
})
export class CcdesignIcon {
  @Prop() name: string;
  @Prop() size = 'xs';
  @Prop() color = 'white';
  @Prop({ mutable: true }) url: string;

  @Element() iconEl: HTMLElement;

  getSVG() {
    this.url = `https://ccdesigns.blob.core.windows.net/icons/${this.name}.svg`;
    fetch(this.url)
      .then(res => res.text())
      .then(svg => {
        if (!svg.includes('<svg')) {
          svg = '';
          console.warn(`${this.name} Icon doesn't exist in blob`);
        }
        const result = this.iconEl.querySelector('div');
        const iconExist = Boolean(result.querySelector('svg'));

        if (iconExist) {
          result.querySelector('svg').remove();
        }

        result.insertAdjacentHTML('afterbegin', svg);
      });
  }

  componentDidLoad() {
    this.getSVG();
  }

  @Watch('name')
  componentWillUpdate() {
    this.getSVG();
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
