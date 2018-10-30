import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ccdesign-footer',
  styleUrl: 'ccdesign-footer.scss'
})
export class CcdesignFooter {
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
