import { Component, h } from '@stencil/core';

@Component({
  tag: 'ccdesign-placeholder',
  styleUrl: 'ccdesign-placeholder.scss',
})
export class CcdesignPlaceholder {

  /**
   * render
   */
  render() {
    return (
      <slot />
    );
  }
}
