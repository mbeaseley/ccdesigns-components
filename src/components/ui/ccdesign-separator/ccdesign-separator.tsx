import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ccdesign-separator',
  styleUrl: 'ccdesign-separator.scss'
})
export class CcdesignSeparator {
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
