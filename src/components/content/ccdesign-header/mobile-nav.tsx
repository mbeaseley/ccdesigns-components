import { Component, Prop } from "@stencil/core";

import { NavDataItem } from './nav-data-item';
// import data from './nav-data-content';

@Component({
  tag: 'mobile-nav',
  styleUrl: 'mobile-nav.scss'
})
export class MobileNav {
  @Prop() navData: NavDataItem[];
  
  render() {
    // const openMenu = (
    //   <ccdesign-icon icon-name="bars" icon-size="xxs" icon-color="grey"></ccdesign-icon>

    //   // <button
    //   // class="nav-header__open-button unbutton"
    //   // onClick={() => this.openMobileNav()}
    //   // title="Menu"
    //   // >
    //   // <icon class="tt_icon-menu" />
    //   // <span>Menu</span>
    //   // </button>
    // );

    return (
      <ccdesign-icon icon-name="bars" icon-size="xxs" icon-color="grey"></ccdesign-icon>
    )
  }
}