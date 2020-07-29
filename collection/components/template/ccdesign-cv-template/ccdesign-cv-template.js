import { Component, Prop, h } from '@stencil/core';
export class CcdesignCvTemplate {
    /**
     * render
     */
    render() {
        const header = this.header ? h("ccdesign-header", { data: `${this.header}` }) : null;
        const footer = this.footer ? h("ccdesign-footer", { data: `${this.footer}` }) : null;
        return (h("div", null,
            header,
            h("main", { class: 'page' },
                h("content", { class: 'page__body' },
                    h("slot", null),
                    h("slot", { name: 'container' }))),
            footer));
    }
    static get is() { return "ccdesign-cv-template"; }
    static get originalStyleUrls() { return {
        "$": ["ccdesign-cv-template.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["ccdesign-cv-template.css"]
    }; }
    static get properties() { return {
        "header": {
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
            "attribute": "header",
            "reflect": false
        },
        "footer": {
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
            "attribute": "footer",
            "reflect": false
        }
    }; }
}
