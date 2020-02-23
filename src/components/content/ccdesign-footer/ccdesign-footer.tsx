import { Component, Prop, h } from '@stencil/core';

import { regexFormatter } from '../../../utils/helpers/regexFormatter';
import { FooterItem } from '../../../utils/modal/footer-item';

@Component({
  tag: 'ccdesign-footer',
  styleUrl: 'ccdesign-footer.scss',
})
export class CcdesignFooter {
  @Prop() data: string;
  @Prop({ mutable: true }) dataContent: FooterItem;

  /**
   * component will fully load
   */
  componentWillLoad() {
    this.dataContent = regexFormatter(this.data, /(\bid|\btext|\bbackgroundColor+?):/g);
  }

  /**
   * render
   */
  render() {
    return (
      <div class={`footer footer--${this.dataContent.backgroundColor}`} innerHTML={`${this.dataContent.text}`}></div>
    );
  }
}
