import { Component } from '@stencil/core';

import data from './carousel-data-content';
import { carouselDataItem } from './carousel-data-item';

@Component({
  tag: 'ccdesign-carousel',
  styleUrl: 'ccdesign-carousel.scss'
})
export class CcdesignCarousel {

  getImage(data: carouselDataItem[]): JSX.Element {
    return (
      <div class='carousel'>
        {data.map((item: carouselDataItem) => (
          <img src={item.url}>{item.id}</img>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>{this.getImage(data)}</div>
    );
  }
}
