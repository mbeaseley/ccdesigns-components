import { Component, Element, Prop, h } from '@stencil/core';

@Component({
  tag: 'ccdesign-button',
  styleUrl: 'ccdesign-button.scss',
})
export class CcdesignButton {
  @Prop() text: string;
  @Prop() url: string;
  @Prop() icon: string;
  @Prop() color: string;
  @Prop() type: string;
  @Prop() eventName: string;

  @Element() el: HTMLElement;

  componentDidLoad() {
    const result = this.el.querySelector('span');
    (result.innerHTML) ? result.setAttribute('class', `text--${this.color}`) : null;
  }

  render() {
    const TagType = this.url ? 'a' : 'button';

    const attribute = TagType === 'button' ? { type: this.type } : { href: this.url };

    const classList = {
      btn: true,
      [`btn--${this.color}`]: true,
      [`btn--${this.type}`]: this.type === 'text',
    };

    const icon =
      <ccdesign-icon name={this.icon} color={this.color} size="xs"></ccdesign-icon>;

    return (
      // @ts-ignore
      <TagType
        {...attribute}
        class={ classList }>
          {icon}
          <span class="">{this.text}</span>
      </TagType>
    );
  }
}
