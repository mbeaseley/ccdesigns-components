import { Component, h } from '@stencil/core';
import { AnyHTMLElement } from '@stencil/core/internal';

@Component({
  tag: 'ccdesign-placeholder',
  styleUrl: 'ccdesign-placeholder.scss',
})
export class CcdesignPlaceholder {
  /**
   * render
   */
  render(): AnyHTMLElement {
    return <slot />;
  }
}
