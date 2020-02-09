import { Component, Element, Prop, h } from '@stencil/core';

@Component({
  tag: 'ccdesign-lazy-image',
  styleUrl: 'ccdesign-lazy-image.scss'
})
export class CcdesignLazyImage {
  @Element() el: HTMLElement;

  @Prop() imgSrc: string;
  @Prop() alt: string;

  private observer: IntersectionObserver;

  componentDidLoad() {
    const img: HTMLImageElement = this.el.querySelector('img');

    if (img) {
      this.observer = new IntersectionObserver(this.onIntersection);
      this.observer.observe(img);
    }
  }

  private onIntersection = async (entries: [any]) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
         if (this.observer) {
             this.observer.disconnect();
         }

         if (entry.target.getAttribute('data-src')) {
             entry.target.setAttribute('src',
                        entry.target.getAttribute('data-src'));
             entry.target.removeAttribute('data-src');
         }
      }
    }
  };

  render() {
    return <img data-src={this.imgSrc} alt={this.alt}/>;
  }
}
