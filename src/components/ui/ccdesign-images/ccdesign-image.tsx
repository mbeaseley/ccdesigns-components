import { Component, Element, Prop, State } from '@stencil/core';

@Component({
  tag: 'ccdesign-image',
  styleUrl: 'ccdesign-image.scss'
})
export class CcImages {
  @Prop() img: string;
  @Prop() alt: string;
  @State() oldImg: string;
  @Element() el: HTMLElement;

  io: IntersectionObserver;

  componentDidLoad() {
    this.addIntersectionObserver();
  }

  componentWillUpdate() {
    if (this.img !== this.oldImg) {
      this.addIntersectionObserver();
    }
    this.oldImg = this.img;
  }

  handleImage() {
    const image: HTMLImageElement = this.el.querySelector('img');
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
      image.removeAttribute('data-src');
    };
  }

  addIntersectionObserver() {
    if (!this.img) {
      return;
    }
    if ('IntersectionObserver' in window) {
      this.io = new IntersectionObserver((data: any) => {
        if (data[0].isIntersecting) {
          this.handleImage();
          this.removeIntersectionObserver();
        }
      });

      this.io.observe(this.el.querySelector('img'));
    } else {
      setTimeout(() => {
        this.handleImage();
      }, 300);
    }
  }

  removeIntersectionObserver() {
    if (this.io) {
      this.io.disconnect();
      this.io = null;
    }
  }

  render() {
    return (
      <img data-src={this.img} alt={this.alt}></img>
    );
  }
}
