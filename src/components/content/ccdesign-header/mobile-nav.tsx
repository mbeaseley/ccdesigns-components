import { Component, Prop, State } from "@stencil/core";

import { NavDataItem } from './nav-data-item';
// import data from './nav-data-content';

@Component({
  tag: 'mobile-nav',
  styleUrl: 'mobile-nav.scss'
})
export class MobileNav {
  @Prop() navData: NavDataItem[];

  @State() isNavOpen: boolean = false;

  openMobileNav() {
    this.isNavOpen = true;
  }

  closeMobileNav() {
    this.isNavOpen = false; 
  }

  render() {
    const openMenu = (

      <ccdesign-button
        color="grey"
        type="text"
        event-name={() => this.openMobileNav()}>
        <ccdesign-icon slot="icon" icon-name="bars" icon-color="grey" icon-size="xs" />
      </ccdesign-button>
    );

    const navControls = (
      <div class="">

      </div>
    );

    const navHeader = (
      <div class="header-mobile">
        {openMenu}
        {navControls}
      </div>
    );

    return [ navHeader ]
  }
}