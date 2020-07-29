import { Component, Element, Prop, h } from '@stencil/core';
import { AnyHTMLElement } from '@stencil/core/internal';

@Component({
  tag: 'ccdesign-lazy-image',
  styleUrl: 'ccdesign-lazy-image.scss',
})
export class CcdesignLazyImage {
  @Element() el: HTMLCcdesignLazyImageElement;

  @Prop() readonly imgSrc: string;
  @Prop() readonly alt: string;
  @Prop() readonly classNames: string;

  private observer: IntersectionObserver;
  private img: HTMLImageElement;

  /**
   * component did render
   */
  componentDidRender(): void {
    this.img = this.el.querySelector('img');
    this.img.classList.add('blurry-load');
    // Attached onload so images loads in one go
    this.img.onload = () => {
      this.img.removeAttribute('style');
      this.img.classList.remove('blurry-load');
      this.img.classList.add('blurry-out');
    };

    if (this.img) {
      this.observer = new IntersectionObserver(this.onIntersection);
      this.observer.observe(this.img);
    }
  }

  /**
   * asynchronousily swaps data-src to src
   */
  private onIntersection = async (entries: [any]): Promise<void> => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        if (this.observer) {
          this.observer.disconnect();
        }

        if (entry.target.getAttribute('data-src')) {
          entry.target.setAttribute('style', 'opacity: 0');

          entry.target.setAttribute('src', entry.target.getAttribute('data-src'));
          entry.target.removeAttribute('data-src');
        }
      }
    }
  };

  /**
   * render
   */
  render(): AnyHTMLElement {
    return <img class={this.classNames} data-src={this.imgSrc} alt={this.alt} />;
  }
}
