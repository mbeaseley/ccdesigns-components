import { Component, Prop, h } from '@stencil/core';
import { regexFormatter } from '../../../utils/helpers/regexFormatter';
export class CcdesignFooter {
    /**
     * component will fully load
     */
    componentWillLoad() {
        if (this.data) {
            this.dataContent = regexFormatter(this.data, /(\bid|\btext|\bbackgroundColor+?):/g);
        }
    }
    /**
     * render
     */
    render() {
        if (this.data) {
            return (h("div", { class: `footer footer--${this.dataContent.backgroundColor}` }, `${this.dataContent.text}`));
        }
    }
    static get is() { return "ccdesign-footer"; }
    static get originalStyleUrls() { return {
        "$": ["ccdesign-footer.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["ccdesign-footer.css"]
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
        "dataContent": {
            "type": "unknown",
            "mutable": true,
            "complexType": {
                "original": "FooterItem",
                "resolved": "FooterItem",
                "references": {
                    "FooterItem": {
                        "location": "import",
                        "path": "../../../utils/modal/footer-item"
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
}
