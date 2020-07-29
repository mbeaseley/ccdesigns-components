import { Component, Prop, h } from '@stencil/core';
export class CcdesignImageCard {
    /**
     * render
     */
    render() {
        const image = (h("div", { class: 'image-card__image' },
            h("ccdesign-lazy-image", { "img-src": `${this.imageUrl}`, alt: `${this.imageAlt}` })));
        const description = (h("div", { class: 'image-card__description' },
            h("p", null, this.description)));
        return (h("a", { class: 'image-card', href: this.url },
            this.imageUrl ? image : '',
            this.description ? description : ''));
    }
    static get is() { return "ccdesign-image-card"; }
    static get originalStyleUrls() { return {
        "$": ["ccdesign-image-card.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["ccdesign-image-card.css"]
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
        "imageUrl": {
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
            "attribute": "image-url",
            "reflect": false
        },
        "imageAlt": {
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
            "attribute": "image-alt",
            "reflect": false
        },
        "description": {
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
            "attribute": "description",
            "reflect": false
        }
    }; }
}
