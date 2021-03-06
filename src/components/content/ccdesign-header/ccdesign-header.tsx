import { Component, Element, JSX, Listen, Prop, State, h } from '@stencil/core';

import { regexFormatter } from '../../../utils/helpers/regexFormatter';
import environment from '../../../services/environment';
import { NavDataItem } from '../../../utils/modal/nav-data-item';

@Component({
  tag: 'ccdesign-header',
  styleUrl: 'ccdesign-header.scss',
})
export class CcdesignHeader {
  @Prop() readonly data: string;
  @Prop({ mutable: true }) formattedData: any;
  @Prop({ context: 'isClient' }) readonly isClient: boolean;
  @State() initialized = false;
  @State() isMobileLayout: boolean;
  @State() isRootPage = false;
  @State() env: string;

  @Element() el: HTMLCcdesignHeaderElement;

  constructor() {
    try {
      this.env = this.determineEnvironment().toString();
    } catch (e) {
      this.env = environment.getEndpoint().dataEndpoint.url;
    }
  }

  /**
   * Formats nav data
   */
  private formatContent(): void {
    if (this.data !== undefined) {
      this.formattedData = regexFormatter(this.data, /([a-z]+?):/g);
    }
  }

  /**
   * Listens on doms window for viewport size
   */
  @Listen('resize', { target: 'window' })
  handleLoad(): void {
    if (this.isClient) {
      this.isMobileLayout = window.innerWidth < 768 ? true : false;
    }
  }

  /**
   * sets user back to root page
   */
  private backRootPage(): void {
    window.location.href = this.env + 'portfolio';
    this.isRootPage = false;
  }

  /**
   * component will fully load
   */
  componentWillLoad(): void {
    this.formatContent();
    this.handleLoad();
  }

  /**
   * component did fully load
   */
  componentDidLoad(): void {
    let urlPathName = window.location.pathname;
    urlPathName = urlPathName.replace('/', '');
    if (urlPathName === '') {
      urlPathName = 'home';
    }
    // Url paths for ccdesign.me.uk
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
    try {
      const elResult: NodeListOf<Element> = this.el.querySelectorAll(`#desktop${urlPathName}`);
      elResult.forEach((elementResult: Element) => {
        elementResult.classList.add('active');
      });
    } catch (e) {
      return console.warn('Error with header: ', e);
    }
  }

  /**
   * Checks for environment, dev or prod
   */
  private determineEnvironment(): string {
    return environment.getEndpoint().dataEndpoint.url;
  }

  /**
   * Formats mobile nav bar
   * @param data - nav data items
   */
  private getNav(data: NavDataItem[]): JSX.Element {
    return (
      <ul class={`navbar__list`}>
        <li>
          <a href={this.env}>
            <ccdesign-lazy-image img-src='assets/favicon.svg' alt='CCDesigns'></ccdesign-lazy-image>
          </a>
        </li>
        {this.isRootPage ? (
          <ccdesign-button
            icon='chevron-left'
            type='text'
            color='light-grey'
            // eslint-disable-next-line react/jsx-no-bind
            onClick={() => this.backRootPage()}
            alt='chevron-left'
          ></ccdesign-button>
        ) : (
          data.map((item: NavDataItem) => (
            <li class={`navbar__item`}>
              <a id={'desktop' + item.id} href={item.url} class={`navbar__link`}>
                {item.name}
              </a>
            </li>
          ))
        )}
      </ul>
    );
  }

  /**
   * render
   */
  render(): JSX.Element {
    const mobileNav = this.formattedData ? (
      <mobile-nav aria-label='Main Navigation' data={this.formattedData} />
    ) : null;
    const desktopNav = this.formattedData ? (
      <nav class='navbar' aria-label='Main Navigation'>
        {this.getNav(this.formattedData)}
      </nav>
    ) : null;

    return <header class='header'>{this.isMobileLayout ? mobileNav : desktopNav}</header>;
  }
}
