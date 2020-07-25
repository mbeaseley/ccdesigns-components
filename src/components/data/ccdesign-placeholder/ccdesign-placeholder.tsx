import { Component, h } from '@stencil/core';
import { AnyHTMLElement, Prop } from '@stencil/core/internal';
import {
  PlaceholderAlignment,
  PlaceholderPosition,
  PlaceholderWidth,
  PlaceholderHeight,
} from '../../../utils/types/placeholder';

@Component({
  tag: 'ccdesign-placeholder',
  styleUrl: 'ccdesign-placeholder.scss',
})
export class CcdesignPlaceholder {
  @Prop() position: PlaceholderPosition = PlaceholderPosition.relative;
  @Prop() alignment: PlaceholderAlignment = PlaceholderAlignment.topLeft;
  @Prop() width: PlaceholderWidth = PlaceholderWidth.auto;
  @Prop() height: PlaceholderHeight = PlaceholderHeight.auto;

  /**
   * render
   */
  render(): AnyHTMLElement {
    const classList = {
      placeholder: true,
      [`placeholder--${this.position}`]: true,
      [`placeholder--${this.alignment}`]: true,
      [`placeholder--width-${this.width}`]: true,
      [`placeholder--height-${this.height}`]: true,
    };

    return (
      <div class={classList}>
        <slot />
      </div>
    );
  }
}
