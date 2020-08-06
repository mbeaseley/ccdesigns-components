import { Component, Element, JSX, Prop, State, h } from '@stencil/core';

import environment from '../../../../services/environment/index';
import { NavDataItem } from '../../../../utils/modal/nav-data-item';
import 'pure-swipe/src/pure-swipe';
import { AnyHTMLElement } from '@stencil/core/internal';

@Component({
  tag: 'mobile-nav',
  styleUrl: 'mobile-nav.scss',
})
export class MobileNav {
  @Prop() readonly data: NavDataItem[];
  @State() isNavOpen = false;
  @State() isRootPage = false;
  @State() env: string;

  @Element() el: HTMLMobileNavElement;

  /**
   * sets nav to open
   */
  private openNav(): void {
    this.isNavOpen = true;
  }

  /**
   * sets nav to close
   */
  private closeNav(): void {
    this.isNavOpen = false;
  }

  /**
   * sets user back to root page
   */
  private backRootPage(): void {
    window.location.href = this.env + 'portfolio';
    this.isRootPage = false;
  }

  /**
   * component did fully load
   */
  componentDidLoad(): void {
    this.handleGuestures();
    let urlPathName = window.location.pathname;
    urlPathName = urlPathName.replace('/', '');
    if (urlPathName === '') {
      urlPathName = 'home';
    }
    const UrlArray = [
      'portfolio/fyp-project',
      'portfolio/website-project',
      'portfolio/webcomponent-project',
      'portfolio/talktalk-azure',
      'portfolio/talktalk-component',
      'portfolio/talktalk-sales',
    ];
    if (UrlArray.indexOf(urlPathName) > -1) {
      this.isRootPage = true;
      return;
    }
    const elResult: NodeListOf<Element> = this.el.querySelectorAll(`#${urlPathName}`);
    elResult.forEach((elementResult: Element) => {
      elementResult.classList.add('active');
    });
  }

  constructor() {
    try {
      this.env = this.determineEnvironment().toString();
    } catch (e) {
      this.env = environment.getEndpoint().dataEndpoint.url;
    }
  }

  /**
   * Checks for environment, dev or prod
   */
  private determineEnvironment(): string {
    return environment.getEndpoint().dataEndpoint.url;
  }

  /**
   * Binds querySelector contents to swipe action
   */
  private handleGuestures(): void {
    const elRight = this.el.querySelector('.navbar__mobile--interaction');
    elRight.addEventListener('swiped-right', () => {
      this.openNav();
    });
    const elLeft = this.el.querySelector('.navbar__mobile');
    elLeft.addEventListener('swiped-left', () => {
      this.closeNav();
    });
  }

  /**
   * render
   */
  render(): AnyHTMLElement[] {
    const logo = (
      <ccdesign-lazy-image img-src='assets/favicon.svg' alt='CCDesigns'></ccdesign-lazy-image>
    );

    const openNav = !this.isRootPage ? (
      <ccdesign-button
        icon='bars'
        buttonStyle='text'
        buttonType='button'
        color='light-grey'
        onClick={() => this.openNav()}
        class={`${this.isNavOpen ? 'visible' : ''}`}
        alt='Menu'
      >
        Menu
      </ccdesign-button>
    ) : (
      ''
    );

    const closeNav = (
      <ccdesign-button
        buttonStyle='text'
        buttonType='button'
        icon='times'
        color='light-grey'
        onClick={() => this.closeNav()}
        alt='close'
      ></ccdesign-button>
    );

    const backNav = this.isRootPage ? (
      <ccdesign-button
        icon='chevron-left'
        buttonStyle='text'
        buttonType='button'
        color='light-grey'
        onClick={() => this.backRootPage()}
        alt='chevron-left'
      ></ccdesign-button>
    ) : (
      ''
    );

    const navHeader = (
      <div class='navbar__header'>
        {!this.isRootPage ? openNav : backNav}
        {logo}
      </div>
    );

    const getNavItems = (): JSX.Element[] => {
      if (this.data === undefined) {
        return;
      }

      let returnItems: JSX.Element[] = [];

      const navItems: NavDataItem[] = this.data;
      returnItems = navItems.map((item: NavDataItem) => (
        <li id={'mobile' + item.id} class={'navbar__mobile-item'}>
          <a id={item.id} class={'navbar__mobile-link'} href={item.url}>
            <div>{item.name}</div>
          </a>
        </li>
      ));

      // eslint-disable-next-line @stencil/render-returns-host
      return returnItems;
    };

    const getNav = () => <ul class={'navbar__mobile-list'}>{getNavItems()}</ul>;

    const navbar = (
      <nav class={`navbar__mobile ${!this.isNavOpen ? 'hide-left' : 'hide-right'}`}>
        <div class='navbar__mobile-sub-header'>{closeNav}</div>
        {[getNav()]}
      </nav>
    );

    const navbarInteraction = <div class='navbar__mobile--interaction'></div>;

    // eslint-disable-next-line @stencil/render-returns-host
    return [navHeader, navbar, navbarInteraction];
  }
}
