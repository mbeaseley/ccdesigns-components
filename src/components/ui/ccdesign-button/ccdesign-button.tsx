import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ccdesign-button',
  styleUrl: 'ccdesign-button.scss'
})
export class CcdesignButton {
  @Prop() text: string;
  @Prop() url: string;
  @Prop() color: string;
  @Prop() type: string;
  @Prop() eventName: string;

  render() {
    const TagType = this.url ? 'a' : 'button';

    const attribute = TagType === 'button' ? {type: this.type} : {href: this.url};

    const classList = {
      btn: true,
      [`btn--${this.color}`]: true,
      [`btn--${this.type}`]: this.type == 'text',
    }

    return (
      <TagType
        {...attribute}
        class={ classList }>
          <slot />
          {this.text}
      </TagType>
    );
  }
}
