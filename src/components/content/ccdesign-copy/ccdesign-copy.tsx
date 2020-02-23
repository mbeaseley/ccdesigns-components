import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ccdesign-copy',
  styleUrl: 'ccdesign-copy.scss',
})
export class CcdesignCopy {
  @Prop() copy: string;

  /**
   * render
   */
  render() {
    return (
      <div class="copy" innerHTML={this.copy} />
    );
  }
}
