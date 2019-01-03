import { Component, Prop, State, Element } from '@stencil/core';

import { NavDataItem } from '../nav-data-item';

@Component({
  tag: 'mobile-nav',
  styleUrl: 'mobile-nav.scss'
})
export class MobileNav {
  @Prop() data: NavDataItem[];
  @State() isNavOpen = false;

  @Element() el: HTMLElement;

  openNav() {
    this.isNavOpen = true;
  }

  closeNav() {
    this.isNavOpen = false;
  }

  componentDidLoad() {
    let urlPathName = window.location.pathname;
    urlPathName = urlPathName.replace('/', '');
    if(urlPathName === '') { urlPathName = 'home' }
    let elResult: NodeListOf<Element> = this.el.querySelectorAll(`#${urlPathName}`);
    [].forEach.call(elResult, (elResult) => {
      elResult.classList.add('active');
    });
  }

  render() { 
    const logo = (
      <img src='assets/favicon.ico' height='30' width='30' alt='CCDesigns' />
    );

    const openNav = (
      <ccdesign-button text='Menu' type='text' color='grey' onClick={()=> this.openNav()} class={`${this.isNavOpen ? 'visible' : ''}`}>
        <ccdesign-icon slot='icon' name='bars' color='grey' size='xs' />
      </ccdesign-button>
    );

    const closeNav = (
      <ccdesign-button type='text' color='grey' onClick={()=> this.closeNav()}>
        <ccdesign-icon slot='icon' name='times' color='grey' size='xs' />
      </ccdesign-button>
    );

    const navHeader = (
      <div class='navbar__header'>
        {openNav}
        {logo}
      </div>
    );

    const getNavItems = (): JSX.Element[] => {
      let returnItems: JSX.Element[] = [];

      const navItems: NavDataItem[] = this.data;
      returnItems = navItems.map((item: NavDataItem) => (
        <li id ={item.id} class={'navbar__mobile__item'}>
            <a id ={item.id} class={'navbar__mobile__link'} href={item.url}>
              {item.name}
            </a>
        </li>
      ));

      return returnItems;
    }
    
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

    return [navHeader, navbar]
  }
}
