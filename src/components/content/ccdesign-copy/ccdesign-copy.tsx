import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ccdesign-copy',
  styleUrl: 'ccdesign-copy.scss',
})
export class CcdesignCopy {
  @Prop() readonly copy: string;

  /**
   * render
   */
  render(): JSX.Element {
    return <div class='copy' innerHTML={this.copy} />;
  }
}
