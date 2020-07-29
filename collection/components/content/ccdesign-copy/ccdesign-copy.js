import { Component, Prop, h } from '@stencil/core';
export class CcdesignCopy {
    /**
     * render
     */
    render() {
        return h("div", { class: 'copy', innerHTML: this.copy });
    }
    static get is() { return "ccdesign-copy"; }
    static get originalStyleUrls() { return {
        "$": ["ccdesign-copy.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["ccdesign-copy.css"]
    }; }
    static get properties() { return {
        "copy": {
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
            "attribute": "copy",
            "reflect": false
        }
    }; }
}
