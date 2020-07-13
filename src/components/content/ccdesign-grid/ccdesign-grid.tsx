import { Component, Prop, h } from '@stencil/core';
import { AnyHTMLElement } from '@stencil/core/internal';

@Component({
  tag: 'ccdesign-grid',
  styleUrl: 'ccdesign-grid.scss',
})
export class CcdesignGrid {
  @Prop() heading: string;

  /**
   * render
   */
  render(): AnyHTMLElement {
    const header = (
      <div class='grid__header'>
        <h1>{this.heading}</h1>
      </div>
    );

    return (
      <div class='grid'>
        {this.heading ? header : ''}
        <div class='grid__container'>
          <slot name='children' />
        </div>
      </div>
    );
  }
}
