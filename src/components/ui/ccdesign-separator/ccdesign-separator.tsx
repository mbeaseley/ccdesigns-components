import { Component, h } from '@stencil/core';
import { AnyHTMLElement } from '@stencil/core/internal';

@Component({
  tag: 'ccdesign-separator',
  styleUrl: 'ccdesign-separator.scss',
})
export class CcdesignSeparator {
  /**
   * render
   */
  render(): AnyHTMLElement {
    return <hr />;
  }
}
