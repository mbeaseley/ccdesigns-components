import { Component, h, Prop } from '@stencil/core';
import { PlaceholderAlignment, PlaceholderPosition, PlaceholderWidth, PlaceholderHeight, } from '../../../utils/types/placeholder';
export class CcdesignPlaceholder {
    constructor() {
        this.position = PlaceholderPosition.relative;
        this.alignment = PlaceholderAlignment.topLeft;
        this.width = PlaceholderWidth.auto;
        this.height = PlaceholderHeight.auto;
    }
    /**
     * render
     */
    render() {
        const classList = {
            placeholder: true,
            [`placeholder--${this.position}`]: true,
            [`placeholder--${this.alignment}`]: true,
            [`placeholder--width-${this.width}`]: true,
            [`placeholder--height-${this.height}`]: true,
        };
        return (h("div", { class: classList },
            h("slot", null)));
    }
    static get is() { return "ccdesign-placeholder"; }
    static get originalStyleUrls() { return {
        "$": ["ccdesign-placeholder.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["ccdesign-placeholder.css"]
    }; }
    static get properties() { return {
        "position": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "PlaceholderPosition",
                "resolved": "PlaceholderPosition.absolute | PlaceholderPosition.relative",
                "references": {
                    "PlaceholderPosition": {
                        "location": "import",
                        "path": "../../../utils/types/placeholder"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "position",
            "reflect": false,
            "defaultValue": "PlaceholderPosition.relative"
        },
        "alignment": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "PlaceholderAlignment",
                "resolved": "PlaceholderAlignment.TopCenter | PlaceholderAlignment.bottomCenter | PlaceholderAlignment.bottomLeft | PlaceholderAlignment.bottomRight | PlaceholderAlignment.middleCenter | PlaceholderAlignment.middleLeft | PlaceholderAlignment.middleRight | PlaceholderAlignment.topLeft | PlaceholderAlignment.topRight",
                "references": {
                    "PlaceholderAlignment": {
                        "location": "import",
                        "path": "../../../utils/types/placeholder"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "alignment",
            "reflect": false,
            "defaultValue": "PlaceholderAlignment.topLeft"
        },
        "width": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "PlaceholderWidth",
                "resolved": "PlaceholderWidth.auto | PlaceholderWidth.large | PlaceholderWidth.medium | PlaceholderWidth.minSmall | PlaceholderWidth.small",
                "references": {
                    "PlaceholderWidth": {
                        "location": "import",
                        "path": "../../../utils/types/placeholder"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "width",
            "reflect": false,
            "defaultValue": "PlaceholderWidth.auto"
        },
        "height": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "PlaceholderHeight",
                "resolved": "PlaceholderHeight.auto | PlaceholderHeight.large | PlaceholderHeight.medium | PlaceholderHeight.small",
                "references": {
                    "PlaceholderHeight": {
                        "location": "import",
                        "path": "../../../utils/types/placeholder"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "height",
            "reflect": false,
            "defaultValue": "PlaceholderHeight.auto"
        }
    }; }
}
