import { Component, Prop, State, Element } from '@stencil/core';
import data from './nav-data-content';

import { NavDataItem } from './nav-data-item';

@Component({
  tag: 'ccdesign-header',
  styleUrl: 'ccdesign-header.scss'
})
export class TalkHeader {
  @Prop() section: string = 'home';
  @Prop({ context: 'isClient' }) private isClient: boolean;

  @State() initialized: boolean = false;
  @State() isMobileLayout: boolean;

  @Element() el: HTMLElement;

  handleLoad() { // wait for window to load so window object can be used
    if (this.isClient) {
      const desktopLayoutQuery: MediaQueryList = window.matchMedia('(min-width: 768px)')
      this.determinHeaderLayout(desktopLayoutQuery);
      desktopLayoutQuery.addListener(this.determinHeaderLayout);
    }
  } 

  componentWillLoad() {
    this.handleLoad();
  }

  componentDidLoad() {
    let urlPathName = window.location.pathname;
    urlPathName = urlPathName.replace('/', '');
    if(urlPathName === '') { urlPathName = 'home' }
    let elResult = this.el.querySelector(`#${urlPathName}`);
    return elResult.classList.add('active');
  }

  constructor() { 
    this.determinHeaderLayout = this.determinHeaderLayout.bind(this);
  }

  determinHeaderLayout(desktopLayoutQuery) {
    this.isMobileLayout = desktopLayoutQuery.matches ? false : true;
  }

  getNav(data: NavDataItem[]): JSX.Element {
    return (
      <ul class={`navbar__list`}>
        <img src='../../../assets/favicon.ico' height='30' width='30' alt='CCDesigns' />
        {data.map((item: NavDataItem) => (
          <li class={`navbar__item`}>
            <a
              id={item.id}
              href={item.url}
              class={`navbar__link`}          
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  render() {

    const mobileNav = (<mobile-nav aria-label='Main Navigation' data={data} />);
    const desktopNav = (<nav class='navbar' aria-label='Main Navigation'>{this.getNav(data)}</nav>);

    return (
      <header class='header'>
        {this.isMobileLayout ? mobileNav : desktopNav}
      </header>
    );
  }
}
