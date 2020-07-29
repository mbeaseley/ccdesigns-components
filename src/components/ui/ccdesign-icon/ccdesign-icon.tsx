import { Component, Element, Prop, Watch, h } from '@stencil/core';
import { AnyHTMLElement } from '@stencil/core/internal';
// const fallback = require('../../../assets/fallback.svg');
// import * as fallback from '../../../assets/fallback.svg';

@Component({
  tag: 'ccdesign-icon',
  styleUrl: 'ccdesign-icon.scss',
})
export class CcdesignIcon {
  @Prop() name: string;
  @Prop() size = 'xs';
  @Prop() color = 'white';
  @Prop({ mutable: true })
  @Prop({ mutable: true })
  svg: string = '';

  @Element() iconEl: HTMLElement;

  /**
   * gets and sets icon svg to element
   */
  getSVG(name?: string): Promise<void> {
    const fallbackUrl = `/assets/${name}.svg`;
    const url: string = name
      ? fallbackUrl
      : `https://ccdesigns.blob.core.windows.net/icons/${this.name}.svg`;

    if (!this.name) {
      return Promise.resolve(undefined);
    }

    return fetch(url)
      .then((res) => res.text())
      .then((svg) => {
        this.svg = !svg.includes('<svg') ? '' : svg;
        //  Fetches backup image
        if (!this.svg) {
          return this.getSVG('fallback');
        }

        const result = this.iconEl.querySelector('div');
        const iconExist = !!result.querySelector('svg');

        if (iconExist) {
          result.querySelector('svg').remove();
        }

        result.insertAdjacentHTML('afterbegin', this.svg);
      });
  }

  /**
   * component did fully load
   */
  componentDidLoad(): Promise<void> {
    return this.getSVG();
  }

  /**
   * watches to see if icon name changes so it can update dom
   */
  @Watch('name')
  componentWillUpdate(): Promise<void> {
    if (!this.svg) {
      return this.getSVG();
    }
  }

  /**
   * render
   */
  render(): AnyHTMLElement {
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
      console.error(
        `${this.size} is not a defined size for an icon. It has been set to default size of xs`,
      );
      inputSize = 'icon--xs';
    }

    return <div class={`icon ${inputSize} ${inputColor}`}></div>;
  }
}
