import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ccdesign-button',
  styleUrl: 'ccdesign-button.scss'
})
export class CcdesignButton {
  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, my name is {this.first} {this.last}
      </div>
    );
  }
}
