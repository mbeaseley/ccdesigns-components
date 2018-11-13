import { Component, Prop, State } from '@stencil/core';
// import { contentfulDataFetch, parseData } from '../../../services/contentful';

import { NavDataItem } from './nav-data-item';
import data from './nav-data-content';
 
@Component({
  tag: 'ccdesign-header',
  styleUrl: 'ccdesign-header.scss'
})
export class CcdesignHeader {
  @Prop() entryId: string;
  @Prop({ mutable: true }) urlNameObject: any = [];
  @Prop({ context: 'isClient' }) private isClient: boolean;
  
  @State() isMobileLayout: boolean;

  constructor() {
    this.headerLayout = this.headerLayout.bind(this);
  }

  handleLoad() {
    if(this.isClient) {
      const layoutQuery: MediaQueryList = window.matchMedia("(min-width: 768px)");
      this.headerLayout(layoutQuery);
      layoutQuery.addListener(this.headerLayout);
    }
  }

  headerLayout(layoutQuery) {
    this.isMobileLayout = layoutQuery.matches ? false : true;
  }
  // loadContent() {
  //   let opts = {}
  //   const keyArr = ['space','field', 'entryId'];

  //   keyArr.forEach(key => {
  //     if(this[key]) opts[key] = this[key];
  //   })

  //   contentfulDataFetch(opts)
  //   .then(parseData)
  //   .then(results => {
  //     let resultsLength = results.Entry.length;
  //     let resultsNew;
  //     for (let i = 0; i < resultsLength; i++) {
  //       resultsNew = {
  //         name: `${results.Entry[i].fields.name}`,
  //         url: `${results.Entry[i].fields.url}`
  //       }
  //       this.urlNameObject.push(resultsNew);
  //     }

  //     console.log(this.urlNameObject);
  //   })
  // }

  componentWillLoad() {
    // if(!this.entryId) return false;

    // this.loadContent();
    this.handleLoad();
  }

  getNav(data: NavDataItem[]): JSX.Element {
    return (
      <ul class="nav__list">
      {data.map((item: NavDataItem) => (
        <li class="nav__item">
          <a class="nav__link" href={item.url}>{item.name}</a>
        </li>
      ))}
      </ul>
    );
  }

  render() {
    const ccdesignLogo = (
      <div class="header__logo">
        <a class="header__logo--container">
          <img src="./assets/favicon.ico" height="30" width="30" alt="CCDesigns" />
        </a>
      </div>
    );

    const mobileNav = (<mobile-nav aria-label="Main Navigation" nav-data={data} />);
    const desktopNav = (
      <nav class="nav" aria-label="Main Navigation">
        {this.getNav(data)}
      </nav>
    );

    return (
      <header class="header">
        {ccdesignLogo}
        {this.isMobileLayout ? mobileNav : desktopNav}
      </header>
    );
  }
}
