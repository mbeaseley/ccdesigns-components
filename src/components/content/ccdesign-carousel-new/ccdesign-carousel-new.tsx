import { Component, Element, Prop, h } from '@stencil/core';
import { regexFormatter } from '../../../utils/helpers/regexFormatter';
import { CarouselItem } from '../ccdesign-carousel/carousel-item';

@Component({
  tag: 'ccdesign-carousel-new',
  styleUrl: 'ccdesign-carousel-new.scss'
})
export class CcdesignCarouselNew {
  @Prop() data: string;
  @Prop({ mutable: true }) dataElement: any;
  @Prop() timeInterval = 3000;
  @Prop({ mutable: true }) imageSelected = 1;

  @Element() el: HTMLElement;
  items: NodeListOf<Element>

  getData(carouseData: any): JSX.Element[] {
    let returnItems: JSX.Element[] = [];

    const items: CarouselItem[] = carouseData;

    returnItems = items.map((item: CarouselItem) => (
      <ccdesign-lazy-image
        img-src={item.image}
        classNames="slide-out-right"
        alt={item.alt}>
      </ccdesign-lazy-image>
    ));

    return returnItems;
  }

  componentWillLoad(): void {
    const formattedData = regexFormatter(this.data, /(\bid|\bimage|\balt+?):/g);
    this.dataElement = this.getData(formattedData);
  }

  timeTrigger(items: NodeListOf<Element>) {
    setInterval(() => {
      (this.imageSelected >= items.length) ? this.imageSelected = 0 : null;
      // Loops through each image at set timeInterval to swap classNames
      items.forEach((data: HTMLElement, i: number) => {
        if (data.className === 'slide-in-left blurry-out') {
          return data.classList.replace('slide-in-left', 'slide-out-right');
        } else if (i === this.imageSelected) {
          return data.classList.replace('slide-from-left', 'slide-in-left');
        } else {
          return data.classList.replace('slide-out-right', 'slide-from-left');
        }
      });
      this.imageSelected++;
    }, this.timeInterval);
  }



  componentLoadImages(items: NodeListOf<Element>): any {
    [].forEach.call(items, (data: HTMLElement, index: number) => {
      if (index === 0) {
        data.classList.replace('slide-out-right', 'slide-in-left');
      } else {
        data.classList.replace('slide-out-right', 'slide-from-left');
      }
    });
  }

  componentDidLoad(): void {
    this.items = this.el.querySelectorAll('ccdesign-lazy-image img');

    this.componentLoadImages(this.items);
    this.timeTrigger(this.items);
  }

  render() {
    return (
      <div class="carousel">
        {this.dataElement}
      </div>
    );
  }
}
