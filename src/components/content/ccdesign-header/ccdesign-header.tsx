import { Component, Element, JSX, Listen, Prop, State, h } from '@stencil/core';
import { regexFormatter } from '../../../utils/helpers/regexFormatter';
import environment from '../../../services/environment/index';

export interface NavDataItem {
  id?: string;
  url: string;
  name: string;
}

@Component({
  tag: 'ccdesign-header',
  styleUrl: 'ccdesign-header.scss',
})
export class CcdesignHeader {
  @Prop() data: string;
  @Prop({ mutable: true }) formattedData: any;
  @Prop({ context: 'isClient' }) private isClient: boolean;
  @State() initialized = false;
  @State() isMobileLayout: boolean;
  @State() isRootPage = false;
  @State() env: string;

  @Element() el: HTMLElement;

  headerContent: NavDataItem[];

  formatContent() {
    this.formattedData = regexFormatter(this.data, /([a-z]+?):/g);
  }

  @Listen('resize', { target: 'window' })
  handleLoad() {
    if (this.isClient) {
      this.isMobileLayout = window.innerWidth < 768 ? true : false;
    }
  }

  menuRootPage() {
    this.isRootPage = true;
  }

  backRootPage() {
    window.location.href = this.env + 'portfolio';
    this.isRootPage = false;
  }

  componentWillLoad() {
    this.formatContent();
    this.handleLoad();
  }

  componentDidLoad() {
    let urlPathName = window.location.pathname;
    urlPathName = urlPathName.replace('/', '');
    if (urlPathName === '') { urlPathName = 'home'; }
    const UrlArray = ['portfolio/fyp-project', 'portfolio/website-project', 'portfolio/webcomponent-project', 'portfolio/talktalk-azure', 'portfolio/talktalk-component', 'portfolio/talktalk-sales'];
    if (UrlArray.indexOf(urlPathName) > -1) {
      return this.menuRootPage();
    }
    try {
      const elResult: NodeListOf<Element> = this.el.querySelectorAll(`#${urlPathName}`);
      [].forEach.call(elResult, elementResult => {
        elementResult.classList.add('active');
      });
    } catch (e) {
      return console.warn('Error with header: ', e);
    }
  }

  constructor() {
    try {
      this.env = this.determineEnvironment().toString();
    } catch (e) {
      this.env = 'http://ccdesign.me.uk/';
    }
  }

  determineEnvironment() {
    return environment.getEndpoint().dataEndpoint.url;
  }

  getNav(data: NavDataItem[]): JSX.Element {
    return (
      <ul class={`navbar__list`}>
        <li>
          <a href={this.env}>
            <img src="assets/favicon.svg" height="30" width="30" alt="CCDesigns" />
          </a>
        </li>
        {this.isRootPage
          ? (<ccdesign-button
            icon="chevron-left"
            type="text"
            color="light-grey"
            onClick={() => this.backRootPage()}
            alt="chevron-left">
          </ccdesign-button>)
          : data.map((item: NavDataItem) => (
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
    const mobileNav = (<mobile-nav aria-label="Main Navigation" data={this.formattedData} />);
    const desktopNav = (<nav class="navbar" aria-label="Main Navigation">{this.getNav(this.formattedData)}</nav>);

    return (
      <header class="header">
        {this.isMobileLayout ? mobileNav : desktopNav}
      </header>
    );
  }
}
