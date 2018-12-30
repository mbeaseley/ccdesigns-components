import { Component, Element, Prop } from '@stencil/core';

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
    // let json = "[ { id: 'profilePicture', image: 'https://images.ctfassets.net/43i5e5k8e66i/3s2QTQy7ryM46G2ewIesO2/98e50163a5281ceda24048302fdb3b6e/profile_new.jpg', alt: 'Image of Michael Beaseley'}, { id: 'profilePicture2', image: 'https://images.ctfassets.net/43i5e5k8e66i/2tbgM7o5Wk6208QeuQM6o0/e40591acca2af7f3eb835a1d3bc57fc2/profile_pic.jpg', alt: 'Image of Michael Beaseley(2)'} ]";

    let newData = this.data.replace(/(\bid|\bimage|\balt+?):/g, '"$1":');
    newData = newData.replace(/'/g, '"');
    const formattedData = JSON.parse(newData);

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
