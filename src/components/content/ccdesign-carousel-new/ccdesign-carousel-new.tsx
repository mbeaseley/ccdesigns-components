import { Component, Element, Prop, h } from '@stencil/core';
import { regexFormatter } from '../../../utils/helpers/regexFormatter';
import { CarouselItem } from '../../../utils/types/carousel-item';

@Component({
  tag: 'ccdesign-carousel-new',
  styleUrl: 'ccdesign-carousel-new.scss',
})
export class CcdesignCarouselNew {
  @Prop() readonly data: string;
  @Prop({ mutable: true }) dataElement: any;
  @Prop() readonly timeInterval = 3000;
  @Prop({ mutable: true }) imageSelected = 1;

  @Element() el: HTMLCcdesignCarouselNewElement;
  private items: NodeListOf<Element>;

  /**
   * Converts carousel Data into JSX Elements
   * @param carouseData - Formatted carousel data
   */
  private getData(carouseData: any): JSX.Element[] {
    let returnItems: JSX.Element[] = [];

    const items: CarouselItem[] = carouseData;

    returnItems = items.map((item: CarouselItem) => (
      // @ts-ignore
      <ccdesign-lazy-image
        img-src={item.image}
        classNames='slide-right'
        alt={item.alt}
        // @ts-ignore
      ></ccdesign-lazy-image>
    ));

    return returnItems;
  }

  /**
   * component will fully load
   */
  componentWillLoad(): void {
    if (this.data) {
      const formattedData = regexFormatter(this.data, /(\bid|\bimage|\balt+?):/g);
      this.dataElement = this.getData(formattedData);
    }
  }

  /**
   * Swap classes between elements
   * @param data - HTML Element
   * @param i - index
   */
  private sortClasses(data: HTMLElement, i?: number): any {
    if (data.className === 'slide-middle blurry-out') {
      return data.classList.replace('slide-middle', 'slide-right');
    } else if (i === this.imageSelected) {
      return data.classList.replace('slide-left', 'slide-middle');
    } else {
      return data.classList.replace('slide-right', 'slide-left');
    }
  }

  /**
   * Trigger for carousel swapping
   * @param items - HTML elements
   */
  private timeTrigger(items: NodeListOf<Element>): void {
    this.items = items;

    setInterval(() => {
      this.imageSelected >= items.length ? (this.imageSelected = 0) : null;
      // Loops through each image at set timeInterval to swap classNames
      this.items.forEach((data: HTMLElement, i: number) => {
        return this.sortClasses(data, i);
      });
      this.imageSelected++;
    }, this.timeInterval);
  }

  /**
   * on component first load
   * @param items - HTML elements
   */
  private componentLoadImages(items: NodeListOf<Element>): void {
    this.items = items;
    this.items.forEach((data: HTMLElement, i: number) => {
      if (i === 0) {
        data.classList.replace('slide-right', 'slide-middle');
      } else {
        data.classList.replace('slide-right', 'slide-left');
      }
    });
  }

  /**
   * Component fully loaded
   */
  componentDidLoad(): void {
    if (this.data) {
      this.items = this.el.querySelectorAll('ccdesign-lazy-image img');

      this.componentLoadImages(this.items);
      this.timeTrigger(this.items);
    }
  }

  /**
   * render
   */
  render(): JSX.Element {
    return <div class='carousel'>{this.data ? this.dataElement : null}</div>;
  }
}
