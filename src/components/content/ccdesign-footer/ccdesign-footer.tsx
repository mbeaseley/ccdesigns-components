import { Component, Prop, h } from '@stencil/core';

import { regexFormatter } from '../../../utils/helpers/regexFormatter';

import { FooterItem } from './footer-item';

@Component({
  tag: 'ccdesign-footer',
  styleUrl: 'ccdesign-footer.scss',
})
export class CcdesignFooter {
  @Prop() data: string;
  @Prop({ mutable: true }) dataContent: FooterItem;

  componentWillLoad() {
    this.dataContent = regexFormatter(this.data, /(\bid|\btext|\bbackgroundColor+?):/g);
  }

  render() {
    return (
      <div class={`footer footer--${this.dataContent.backgroundColor}`} innerHTML={`${this.dataContent.text}`}></div>
    );
  }
}
