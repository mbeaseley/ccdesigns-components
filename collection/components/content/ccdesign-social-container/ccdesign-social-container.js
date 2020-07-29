import { Component, Prop, h } from '@stencil/core';
export class CcdesignSocialContainer {
    /**
     * render
     */
    render() {
        return (h("div", { class: 'circle circle--outercircle' },
            h("div", { class: 'circle circle--innercircle' },
                h("ccdesign-button", { icon: this.icon, color: 'blue', url: this.url, alt: this.icon }))));
    }
    static get is() { return "ccdesign-social-container"; }
    static get originalStyleUrls() { return {
        "$": ["ccdesign-social-container.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["ccdesign-social-container.css"]
    }; }
    static get properties() { return {
        "url": {
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
            "attribute": "url",
            "reflect": false
        },
        "icon": {
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
            "attribute": "icon",
            "reflect": false
        }
    }; }
}
