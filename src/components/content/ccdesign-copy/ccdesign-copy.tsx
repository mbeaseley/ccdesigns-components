import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ccdesign-copy',
  styleUrl: 'ccdesign-copy.scss'
})
export class CcdesignCopy {
  @Prop() copy: string;

  render() {
    return (
      <div class='copy' innerHTML={this.copy} />
    );
  }
}
