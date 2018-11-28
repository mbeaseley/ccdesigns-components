import { Component, Prop, EventEmitter, Event } from '@stencil/core';

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

  @Event() buttonEvent: EventEmitter;

  onClickEvent(clickEvent) {
    if(this.eventName) {
      clickEvent.preventDefault();
      this.buttonEvent.emit({url: this.url, name: this.eventName});
    }
  }

  render() {
    const TagType = this.url ? 'a' : 'button';

    const attribute = TagType === 'a' ? {href: this.url} : "";

    const classList = {
      btn: true,
      [`btn--${this.color}`]: true,
      [`btn--${this.type}`]: this.type == 'text',
    }

    return (
      <TagType
      {...attribute}
      class={ classList }
      onClick={this.onClickEvent.bind(this)}>
        <slot name="icon"/>
        {this.text}
      </TagType>
    );
  }
}
