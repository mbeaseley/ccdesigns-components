import { Component, Element, JSX, Prop, h } from '@stencil/core';

import { regexFormatter } from '../../../utils/helpers/regexFormatter';
import { CarouselItem } from '../../../utils/types/carousel-item';

@Component({
  tag: 'ccdesign-carousel',
  styleUrl: 'ccdesign-carousel.scss',
})
export class CcdesignCarousel {
  @Prop() readonly data: string;
  @Prop({ mutable: true }) dataElement: JSX.Element;
  @Prop() readonly timeInterval = 3000;
  @Prop({ mutable: true }) imageSelected = 1;

  @Element() el: HTMLCcdesignCarouselElement;

  private timeTrigger(items: NodeListOf<Element>) {
    setInterval(() => {
      this.imageSelected >= items.length ? (this.imageSelected = 0) : null;
      [].forEach.call(items, (data: HTMLElement, index: number) => {
        if (data.className === 'slides slide-in-left') {
          return data.classList.replace('slide-in-left', 'slide-out-right');
        } else if (index === this.imageSelected) {
          return data.classList.replace('slide-from-left', 'slide-in-left');
        } else {
          return data.classList.replace('slide-out-right', 'slide-from-left');
        }
      });
      this.imageSelected++;
    }, this.timeInterval);
  }

  private componentLoadImages(items: NodeListOf<Element>) {
    [].forEach.call(items, (data: HTMLElement, index: number) => {
      if (index === 0) {
        data.classList.replace('slide-out-right', 'slide-in-left');
      } else {
        data.classList.replace('slide-out-right', 'slide-from-left');
      }
    });
  }

  private getData(carouseData: any): JSX.Element[] {
    let returnItems: JSX.Element[] = [];

    const items: CarouselItem[] = carouseData;

    returnItems = items.map((item: CarouselItem) => (
      <div
        id={item.id}
        title={item.alt}
        style={{ backgroundImage: `url(${item.image})` }}
        class='slides slide-out-right'
      ></div>
    ));

    return returnItems;
  }

  componentWillLoad() {
    const formattedData = regexFormatter(this.data, /(\bid|\bimage|\balt+?):/g);
    this.dataElement = this.getData(formattedData);
  }

  componentDidLoad() {
    const items: NodeListOf<Element> = this.el.querySelectorAll('.slides');
    this.componentLoadImages(items);
    this.timeTrigger(items);
  }

  render() {
    return <div class='carousel'>{this.dataElement}</div>;
  }
}
