import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ccdesign-footer',
  styleUrl: 'ccdesign-footer.scss',
  shadow: false
})
export class CcdesignFooter {
  @Prop() backgroundColor: string;
  @Prop() text: string;

  render() {
    return (
      <div class="footer" innerHTML={this.text} />
    );
  }
}
