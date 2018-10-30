import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ccdesign-header',
  styleUrl: 'ccdesign-header.scss'
})
export class CcdesignHeader {
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
