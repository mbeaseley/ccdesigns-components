import { Component } from '@stencil/core';

@Component({
  tag: 'ccdesign-placeholder',
  styleUrl: 'ccdesign-placeholder.scss'
})
export class CcdesignPlaceholder {

  render() {
    return (
      <slot />
    );
  }
}
