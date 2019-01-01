import { Component, Element, Prop } from '@stencil/core';
import { regexFormatter } from '../../../utils/helpers/regexFormatter';
import { carouselItem } from './carousel-item';

@Component({
  tag: 'ccdesign-carousel',
  styleUrl: 'ccdesign-carousel.scss'
})
export class CcdesignCarousel {
  @Prop() data: string;
  @Prop({mutable: true}) dataElement: JSX.Element;
  @Prop() timeInterval: number = 3000;
  @Prop({mutable: true}) imageSelected: number = 1;

  @Element() el: HTMLElement;

  timeTrigger(items: NodeListOf<Element>) {
    setInterval(() => {
      (this.imageSelected >= items.length) ? this.imageSelected = 0 : '';
      [].forEach.call(items, (items: HTMLElement, index: number) => {
        if(items.className == 'slides slide-in-left') {
          return items.classList.replace('slide-in-left', 'slide-out-right');
        } else if(index == this.imageSelected) {
          return items.classList.replace('slide-from-left', 'slide-in-left');
        } else {
          return items.classList.replace('slide-out-right', 'slide-from-left');
        }
      })
      this.imageSelected++;
    }, this.timeInterval)
  }

  componentLoadImages(items: NodeListOf<Element>) {
    [].forEach.call(items, (items: HTMLElement, index: number) => {
      if(index == 0) {
        items.classList.replace('slide-out-right', 'slide-in-left');
      } else {
        items.classList.replace('slide-out-right', 'slide-from-left');
      }
    })
  }

  getData (carouseData: any): JSX.Element[] {
    let returnItems: JSX.Element[] = [];

    const items: carouselItem[] = carouseData;

    returnItems = items.map((item: carouselItem) => (
      <div id={item.id} title={item.alt} style={{backgroundImage: `url(${item.image})`, }} class='slides slide-out-right'></div>
    ))

    return returnItems;
  }


  componentWillLoad() {
    const formattedData = regexFormatter(this.data, /(\bid|\bimage|\balt+?):/g);
    this.dataElement = this.getData(formattedData);
  }

  componentDidLoad() {
    let items: NodeListOf<Element> = this.el.querySelectorAll('.slides');
    this.componentLoadImages(items);
    this.timeTrigger(items);
  }

  render() {
    return (
      <div class='carousel'>{this.dataElement}</div>
    );
  }
}
