import { Component, Prop, h } from '@stencil/core';
export class CcdesignGrid {
    /**
     * render
     */
    render() {
        const header = (h("div", { class: 'grid__header' },
            h("h1", null, this.heading)));
        return (h("div", { class: 'grid' },
            this.heading ? header : '',
            h("div", { class: 'grid__container' },
                h("slot", { name: 'children' }))));
    }
    static get is() { return "ccdesign-grid"; }
    static get originalStyleUrls() { return {
        "$": ["ccdesign-grid.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["ccdesign-grid.css"]
    }; }
    static get properties() { return {
        "heading": {
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
            "attribute": "heading",
            "reflect": false
        }
    }; }
}
