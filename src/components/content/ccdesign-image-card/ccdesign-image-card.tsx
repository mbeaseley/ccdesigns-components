import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ccdesign-image-card',
  styleUrl: 'ccdesign-image-card.scss'
})
export class CcdesignImageCard {
  @Prop() url: string;
  @Prop() imageUrl: string;
  @Prop() imageAlt: string;
  @Prop() description: string;

  render() {
    const image = (
      <div class="image-card__image">
        <ccdesign-image
          img={`${this.imageUrl}`}
          alt={`${this.imageAlt}`}>
        </ccdesign-image>
      </div>
    );

    const description = (
      <div class="image-card__description">
        <p>{ this.description }</p>
      </div>
    );

    return (
      <a class="image-card" href={ this.url }>
        { this.imageUrl ? image : '' }
        { this.description ? description : '' }
      </a>
    );
  }
}
