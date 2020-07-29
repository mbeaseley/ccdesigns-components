import { Component, Element, Prop, State, h } from '@stencil/core';
import environment from '../../../../services/environment/index';
import 'pure-swipe/src/pure-swipe';
export class MobileNav {
    constructor() {
        this.isNavOpen = false;
        this.isRootPage = false;
        try {
            this.env = this.determineEnvironment().toString();
        }
        catch (e) {
            this.env = environment.getEndpoint().dataEndpoint.url;
        }
    }
    /**
     * sets nav to open
     */
    openNav() {
        this.isNavOpen = true;
    }
    /**
     * sets nav to close
     */
    closeNav() {
        this.isNavOpen = false;
    }
    /**
     * sets user back to root page
     */
    backRootPage() {
        window.location.href = this.env + 'portfolio';
        this.isRootPage = false;
    }
    /**
     * component did fully load
     */
    componentDidLoad() {
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
        const elResult = this.el.querySelectorAll(`#${urlPathName}`);
        elResult.forEach((elementResult) => {
            elementResult.classList.add('active');
        });
    }
    /**
     * Checks for environment, dev or prod
     */
    determineEnvironment() {
        return environment.getEndpoint().dataEndpoint.url;
    }
    /**
     * Binds querySelector contents to swipe action
     */
    handleGuestures() {
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
    render() {
        const logo = (h("ccdesign-lazy-image", { "img-src": 'assets/favicon.svg', alt: 'CCDesigns' }));
        const openNav = !this.isRootPage ? (h("ccdesign-button", { icon: 'bars', type: 'text', color: 'light-grey', onClick: () => this.openNav(), class: `${this.isNavOpen ? 'visible' : ''}`, alt: 'Menu' }, "Menu")) : ('');
        const closeNav = (h("ccdesign-button", { type: 'text', icon: 'times', color: 'light-grey', onClick: () => this.closeNav(), alt: 'close' }));
        const backNav = this.isRootPage ? (h("ccdesign-button", { icon: 'chevron-left', type: 'text', color: 'light-grey', onClick: () => this.backRootPage(), alt: 'chevron-left' })) : ('');
        const navHeader = (h("div", { class: 'navbar__header' },
            !this.isRootPage ? openNav : backNav,
            logo));
        const getNavItems = () => {
            if (this.data === undefined) {
                return;
            }
            let returnItems = [];
            const navItems = this.data;
            returnItems = navItems.map((item) => (h("li", { id: 'mobile' + item.id, class: 'navbar__mobile-item' },
                h("a", { id: item.id, class: 'navbar__mobile-link', href: item.url },
                    h("div", null, item.name)))));
            // eslint-disable-next-line @stencil/render-returns-host
            return returnItems;
        };
        const getNav = () => h("ul", { class: 'navbar__mobile-list' }, getNavItems());
        const navbar = (h("nav", { class: `navbar__mobile ${!this.isNavOpen ? 'hide-left' : 'hide-right'}` },
            h("div", { class: 'navbar__mobile-sub-header' }, closeNav),
            [getNav()]));
        const navbarInteraction = h("div", { class: 'navbar__mobile--interaction' });
        // eslint-disable-next-line @stencil/render-returns-host
        return [navHeader, navbar, navbarInteraction];
    }
    static get is() { return "mobile-nav"; }
    static get originalStyleUrls() { return {
        "$": ["mobile-nav.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["mobile-nav.css"]
    }; }
    static get properties() { return {
        "data": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "NavDataItem[]",
                "resolved": "NavDataItem[]",
                "references": {
                    "NavDataItem": {
                        "location": "import",
                        "path": "../../../../utils/modal/nav-data-item"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        }
    }; }
    static get states() { return {
        "isNavOpen": {},
        "isRootPage": {},
        "env": {}
    }; }
    static get elementRef() { return "el"; }
}
