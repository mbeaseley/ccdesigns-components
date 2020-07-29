import { Component, Element, Prop, Watch, h } from '@stencil/core';
// const fallback = require('../../../assets/fallback.svg');
// import * as fallback from '../../../assets/fallback.svg';
export class CcdesignIcon {
    constructor() {
        this.size = 'xs';
        this.color = 'white';
        this.svg = '';
    }
    /**
     * gets and sets icon svg to element
     */
    getSVG(name) {
        const fallbackUrl = `/assets/${name}.svg`;
        const url = Boolean(name)
            ? fallbackUrl
            : `https://ccdesigns.blob.core.windows.net/icons/${this.name}.svg`;
        if (this.name === undefined) {
            return Promise.resolve(undefined);
        }
        return fetch(url)
            .then((res) => res.text())
            .then((svg) => {
            this.svg = !svg.includes('<svg') ? '' : svg;
            //  Fetches backup image
            if (this.svg === '') {
                return this.getSVG('fallback');
            }
            const result = this.iconEl.querySelector('div');
            const iconExist = Boolean(result.querySelector('svg'));
            if (iconExist) {
                result.querySelector('svg').remove();
            }
            result.insertAdjacentHTML('afterbegin', this.svg);
        });
    }
    /**
     * component did fully load
     */
    componentDidLoad() {
        return this.getSVG();
    }
    /**
     * watches to see if icon name changes so it can update dom
     */
    componentWillUpdate() {
        if (this.svg === '' || this.svg === undefined) {
            return this.getSVG();
        }
    }
    /**
     * render
     */
    render() {
        let inputColor;
        const backgroundColors = ['white', 'light-grey', 'grey', 'dark-grey', 'black', 'blue'];
        if (backgroundColors.indexOf(this.color) > -1) {
            inputColor = `icon--${this.color}`;
        }
        else {
            console.error(`${this.color} is not a defined color. Default color is used.`);
            inputColor = `icon--dark-grey`;
        }
        let inputSize;
        const sizes = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
        if (sizes.indexOf(this.size) > -1) {
            inputSize = `icon--${this.size}`;
        }
        else {
            console.error(`${this.size} is not a defined size for an icon. It has been set to default size of xs`);
            inputSize = 'icon--xs';
        }
        return h("div", { class: `icon ${inputSize} ${inputColor}` });
    }
    static get is() { return "ccdesign-icon"; }
    static get originalStyleUrls() { return {
        "$": ["ccdesign-icon.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["ccdesign-icon.css"]
    }; }
    static get properties() { return {
        "name": {
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
            "attribute": "name",
            "reflect": false
        },
        "size": {
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
            "attribute": "size",
            "reflect": false,
            "defaultValue": "'xs'"
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
            "reflect": false,
            "defaultValue": "'white'"
        },
        "svg": {
            "type": "string",
            "mutable": true,
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
            "attribute": "svg",
            "reflect": false,
            "defaultValue": "''"
        }
    }; }
    static get elementRef() { return "iconEl"; }
    static get watchers() { return [{
            "propName": "name",
            "methodName": "componentWillUpdate"
        }]; }
}
