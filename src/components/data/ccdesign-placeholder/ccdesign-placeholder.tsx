import { Component, h, Prop } from '@stencil/core';
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
  @Prop() readonly position: PlaceholderPosition = PlaceholderPosition.relative;
  @Prop() readonly alignment: PlaceholderAlignment = PlaceholderAlignment.topLeft;
  @Prop() readonly width: PlaceholderWidth = PlaceholderWidth.auto;
  @Prop() readonly height: PlaceholderHeight = PlaceholderHeight.auto;

  /**
   * render
   */
  render(): JSX.Element {
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
