import { Component, Element, JSX, Prop, State, h } from '@stencil/core';
import environment from '../../../../services/environment/index';

import { NavDataItem } from '../nav-data-item';

@Component({
  tag: 'mobile-nav',
  styleUrl: 'mobile-nav.scss',
})
export class MobileNav {
  @Prop() data: NavDataItem[];
  @State() isNavOpen = false;
  @State() isRootPage = false;
  @State() env: string;

  @Element() el: HTMLElement;

  openNav() {
    this.isNavOpen = true;
  }

  closeNav() {
    this.isNavOpen = false;
  }

  menuRootPage() {
    this.isRootPage = true;
  }

  backRootPage() {
    window.location.href = this.env + 'portfolio';
    this.isRootPage = false;
  }

  componentDidLoad() {
    let urlPathName = window.location.pathname;
    urlPathName = urlPathName.replace('/', '');
    if (urlPathName === '') { urlPathName = 'home'; }
    const UrlArray = ['portfolio/fyp-project', 'portfolio/website-project', 'portfolio/webcomponent-project'];
    if (UrlArray.indexOf(urlPathName) > -1) {
      return this.menuRootPage();
    }
    const elResult: NodeListOf<Element> = this.el.querySelectorAll(`#${urlPathName}`);
    [].forEach.call(elResult, elementResult => {
      elementResult.classList.add('active');
    });
  }

  determineEnvironment() {
    return environment.getEndpoint().dataEndpoint.url;
  }

  constructor() {
    try {
      this.env = this.determineEnvironment().toString();
    } catch (e) {
      this.env = 'http://ccdesign.me.uk/';
    }
  }

  render() {
    const logo = (
      <img src="assets/favicon.svg" height="30" width="30" alt="CCDesigns" />
    );

    const openNav = (
      (!this.isRootPage)
        ? (<ccdesign-button
          text="Menu"
          icon="bars"
          type="text"
          color="light-grey"
          onClick={() => this.openNav()} class={`${this.isNavOpen ? 'visible' : ''}`}
          alt="Menu">
        </ccdesign-button>)
        : ''
    );

    const closeNav = (
      <ccdesign-button
        type="text"
        icon="times"
        color="light-grey"
        onClick={() => this.closeNav()}
        alt="close">
      </ccdesign-button>
    );

    const backNav = (
      (this.isRootPage)
        ? (<ccdesign-button
          icon="chevron-left"
          type="text"
          color="light-grey"
          onClick={() => this.backRootPage()}
          alt="chevron-left">
        </ccdesign-button>)
        : ''
    );

    const navHeader = (
      <div class="navbar__header">
        {!this.isRootPage ? openNav : backNav}
        {logo}
      </div>
    );

    const getNavItems = (): JSX.Element[] => {
      let returnItems: JSX.Element[] = [];

      const navItems: NavDataItem[] = this.data;
      returnItems = navItems.map((item: NavDataItem) => (
        <li id={item.id} class={'navbar__mobile__item'}>
          <a id={item.id} class={'navbar__mobile__link'} href={item.url}>
            {item.name}
          </a>
        </li>
      ));

      return returnItems;
    };

    const getNav = () => (
      <ul class={'navbar__mobile__list'}>{getNavItems()}</ul>
    );

    const navbar = (
      <nav class={`navbar__mobile ${!this.isNavOpen ? 'hide-left' : 'hide-right'}`}>
        <div class="navbar__mobile__sub-header">
          {closeNav}
        </div>
        {[getNav()]}
      </nav>
    );

    return [navHeader, navbar];
  }
}
