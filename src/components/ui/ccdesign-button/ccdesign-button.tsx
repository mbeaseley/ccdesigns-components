import { Component, Element, Prop, h } from '@stencil/core';

@Component({
  tag: 'ccdesign-button',
  styleUrl: 'ccdesign-button.scss',
})
export class CcdesignButton {
  @Prop() readonly url: string;
  @Prop() readonly icon: string;
  @Prop() readonly color: string;
  @Prop() readonly buttonStyle: string;
  @Prop() readonly buttonType: string = 'button';
  @Prop() readonly eventName: Function;
  @Prop() readonly alt: string;

  @Element() el: HTMLCcdesignButtonElement;

  /**
   * component did fully load
   */
  componentDidLoad(): void {
    if (this.color !== undefined) {
      const result = this.el.querySelector('span');
      result.innerHTML ? result.setAttribute('class', `text--${this.color}`) : null;
    }
  }

  /**
   * render
   */
  render(): JSX.Element {
    const TagType = Boolean(this.url) ? 'a' : 'button';

    const attribute =
      TagType === 'button'
        ? { onclick: this.eventName, type: this.buttonType }
        : { href: this.url, alt: this.alt };

    const classList = {
      btn: true,
      [`btn--${this.color}`]: true,
      [`btn--icon`]: this.icon,
      [`btn--${this.buttonStyle}`]: this.buttonStyle,
    };

    const icon =
      this.icon !== undefined ? (
        <ccdesign-icon name={this.icon} color={this.color} size='xs'></ccdesign-icon>
      ) : null;

    return (
      // @ts-ignore
      <TagType class={classList} {...attribute} aria-label={this.alt}>
        {icon}
        <span>
          <slot />
        </span>
      </TagType>
    );
  }
}
