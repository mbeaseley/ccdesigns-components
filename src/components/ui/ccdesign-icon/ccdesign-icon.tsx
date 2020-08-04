import { Component, Element, Prop, Watch, h } from '@stencil/core';
import { AnyHTMLElement } from '@stencil/core/internal';

@Component({
  tag: 'ccdesign-icon',
  styleUrl: 'ccdesign-icon.scss',
})
export class CcdesignIcon {
  @Prop() readonly name: string;
  @Prop() readonly size: string = 'xs';
  @Prop() readonly color: string = 'white';
  @Prop({ mutable: true }) svg: string = '';

  @Element() iconEl: HTMLCcdesignIconElement;

  /**
   * gets and sets icon svg to element
   */
  private getSVG(name?: string): Promise<void> {
    const fallbackUrl = `/assets/${name}.svg`;
    const url: string = Boolean(name)
      ? fallbackUrl
      : `https://ccdesigns.blob.core.windows.net/icons/${this.name}.svg`;

    if (this.name === undefined) {
      return Promise.resolve(undefined);
    }

    return fetch(url)
      .then((res) => res.text())
      .then((svg) => {
        this.svg = !svg.includes('<svg') ? '' : svg;
        //  Fetches backup image
        if (this.svg === '') {
          return this.getSVG('fallback');
        }

        const result = this.iconEl.querySelector('div');
        const iconExist = Boolean(result.querySelector('svg'));

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
    if (this.svg === '' || this.svg === undefined) {
      return this.getSVG();
    }
  }

  /**
   * render
   */
  render(): AnyHTMLElement {
    let inputColor: string;
    const backgroundColors = ['white', 'light-grey', 'grey', 'dark-grey', 'black', 'blue', 'green'];
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
