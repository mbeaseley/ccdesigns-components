import { Component, Element, Listen, Prop, State, h } from '@stencil/core';
import { regexFormatter } from '../../../utils/helpers/regexFormatter';
import environment from '../../../services/environment';
export class CcdesignHeader {
    constructor() {
        this.initialized = false;
        this.isRootPage = false;
        try {
            this.env = this.determineEnvironment().toString();
        }
        catch (e) {
            this.env = environment.getEndpoint().dataEndpoint.url;
        }
    }
    /**
     * Formats nav data
     */
    formatContent() {
        if (this.data !== undefined) {
            this.formattedData = regexFormatter(this.data, /([a-z]+?):/g);
        }
    }
    /**
     * Listens on doms window for viewport size
     */
    handleLoad() {
        if (this.isClient) {
            this.isMobileLayout = window.innerWidth < 768 ? true : false;
        }
    }
    /**
     * sets user back to root page
     */
    backRootPage() {
        window.location.href = this.env + 'portfolio';
        this.isRootPage = false;
    }
    /**
     * component will fully load
     */
    componentWillLoad() {
        this.formatContent();
        this.handleLoad();
    }
    /**
     * component did fully load
     */
    componentDidLoad() {
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
            const elResult = this.el.querySelectorAll(`#${urlPathName}`);
            elResult.forEach((elementResult) => {
                elementResult.classList.add('active');
            });
        }
        catch (e) {
            return console.warn('Error with header: ', e);
        }
    }
    /**
     * Checks for environment, dev or prod
     */
    determineEnvironment() {
        return environment.getEndpoint().dataEndpoint.url;
    }
    /**
     * Formats mobile nav bar
     * @param data - nav data items
     */
    getNav(data) {
        return (h("ul", { class: `navbar__list` },
            h("li", null,
                h("a", { href: this.env },
                    h("ccdesign-lazy-image", { "img-src": 'assets/favicon.svg', alt: 'CCDesigns' }))),
            this.isRootPage ? (h("ccdesign-button", { icon: 'chevron-left', type: 'text', color: 'light-grey', 
                // eslint-disable-next-line react/jsx-no-bind
                onClick: () => this.backRootPage(), alt: 'chevron-left' })) : (data.map((item) => (h("li", { class: `navbar__item` },
                h("a", { id: 'desktop' + item.id, href: item.url, class: `navbar__link` }, item.name)))))));
    }
    /**
     * render
     */
    render() {
        const mobileNav = this.formattedData ? (h("mobile-nav", { "aria-label": 'Main Navigation', data: this.formattedData })) : null;
        const desktopNav = this.formattedData ? (h("nav", { class: 'navbar', "aria-label": 'Main Navigation' }, this.getNav(this.formattedData))) : null;
        return h("header", { class: 'header' }, this.isMobileLayout ? mobileNav : desktopNav);
    }
    static get is() { return "ccdesign-header"; }
    static get originalStyleUrls() { return {
        "$": ["ccdesign-header.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["ccdesign-header.css"]
    }; }
    static get properties() { return {
        "data": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "data",
            "reflect": false
        },
        "formattedData": {
            "type": "any",
            "mutable": true,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "formatted-data",
            "reflect": false
        }
    }; }
    static get contextProps() { return [{
            "name": "isClient",
            "context": "isClient"
        }]; }
    static get states() { return {
        "initialized": {},
        "isMobileLayout": {},
        "isRootPage": {},
        "env": {}
    }; }
    static get elementRef() { return "el"; }
    static get listeners() { return [{
            "name": "resize",
            "method": "handleLoad",
            "target": "window",
            "capture": false,
            "passive": true
        }]; }
}
