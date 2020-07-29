import { Component, Element, Prop, h } from '@stencil/core';
export class CcdesignButton {
    /**
     * component did fully load
     */
    componentDidLoad() {
        if (this.color !== undefined) {
            const result = this.el.querySelector('span');
            result.innerHTML ? result.setAttribute('class', `text--${this.color}`) : null;
        }
    }
    /**
     * render
     */
    render() {
        const TagType = Boolean(this.url) ? 'a' : 'button';
        const attribute = TagType === 'button' ? { type: this.type } : { href: this.url, alt: this.alt };
        const classList = {
            btn: true,
            [`btn--${this.color}`]: true,
            [`btn--icon`]: this.icon,
            [`btn--${this.type}`]: this.type === 'text',
        };
        const icon = this.icon !== undefined ? (h("ccdesign-icon", { name: this.icon, color: this.color, size: 'xs' })) : null;
        return (
        // @ts-ignore
        h(TagType, Object.assign({ class: classList }, attribute, { "aria-label": this.alt }),
            icon,
            h("span", null,
                h("slot", null))));
    }
    static get is() { return "ccdesign-button"; }
    static get originalStyleUrls() { return {
        "$": ["ccdesign-button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["ccdesign-button.css"]
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
        },
        "color": {
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
            "attribute": "color",
            "reflect": false
        },
        "type": {
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
            "attribute": "type",
            "reflect": false
        },
        "eventName": {
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
            "attribute": "event-name",
            "reflect": false
        },
        "alt": {
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
            "attribute": "alt",
            "reflect": false
        }
    }; }
    static get elementRef() { return "el"; }
}
