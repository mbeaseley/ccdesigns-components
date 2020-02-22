import { Component, Element, JSX, Prop, State, h } from '@stencil/core';
import environment from '../../../../services/environment/index';
import 'pure-swipe/src/pure-swipe';

export interface NavDataItem {
  id?: string;
  url: string;
  name: string;
}


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
    this.handleGuestures();
    let urlPathName = window.location.pathname;
    urlPathName = urlPathName.replace('/', '');
    if (urlPathName === '') { urlPathName = 'home'; }
    const UrlArray = ['portfolio/fyp-project', 'portfolio/website-project', 'portfolio/webcomponent-project', 'portfolio/talktalk-azure', 'portfolio/talktalk-component', 'portfolio/talktalk-sales'];
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

  /**
   * Binds querySelector contents to swipe action
   */
  handleGuestures(): void {
    const elRight = this.el.querySelector('.navbar__mobile--interaction');
    elRight.addEventListener('swiped-right', () => {
      this.openNav();
    });
    const elLeft = this.el.querySelector('.navbar__mobile');
    elLeft.addEventListener('swiped-left', () => {
      this.closeNav();
    });
  }

  render() {
    const logo = (
      <ccdesign-lazy-image img-src="assets/favicon.svg" alt="CCDesigns"></ccdesign-lazy-image>
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
            <div>{item.name}</div>
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

    const navbarInteraction = (
      <div class="navbar__mobile--interaction"></div>
    )

    return [navHeader, navbar, navbarInteraction];
  }
}
