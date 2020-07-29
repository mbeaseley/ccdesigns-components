import { Component, Prop, h } from '@stencil/core';
import { AnyHTMLElement } from '@stencil/core/internal';

@Component({
  tag: 'ccdesign-image-card',
  styleUrl: 'ccdesign-image-card.scss',
})
export class CcdesignImageCard {
  @Prop() url: string;
  @Prop() imageUrl: string;
  @Prop() imageAlt: string;
  @Prop() description: string;

  /**
   * render
   */
  render(): AnyHTMLElement {
    const image = (
      <div class='image-card__image'>
        <ccdesign-lazy-image
          img-src={`${this.imageUrl}`}
          alt={`${this.imageAlt}`}
        ></ccdesign-lazy-image>
      </div>
    );

    const description = (
      <div class='image-card__description'>
        <p>{this.description}</p>
      </div>
    );

    return (
      <a class='image-card' href={this.url}>
        {this.imageUrl ? image : ''}
        {this.description ? description : ''}
      </a>
    );
  }
}
