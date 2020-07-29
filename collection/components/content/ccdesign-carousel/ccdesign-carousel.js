import { Component, Element, Prop, h } from '@stencil/core';
import { regexFormatter } from '../../../utils/helpers/regexFormatter';
export class CcdesignCarousel {
    constructor() {
        this.timeInterval = 3000;
        this.imageSelected = 1;
    }
    timeTrigger(items) {
        setInterval(() => {
            this.imageSelected >= items.length ? (this.imageSelected = 0) : null;
            [].forEach.call(items, (data, index) => {
                if (data.className === 'slides slide-in-left') {
                    return data.classList.replace('slide-in-left', 'slide-out-right');
                }
                else if (index === this.imageSelected) {
                    return data.classList.replace('slide-from-left', 'slide-in-left');
                }
                else {
                    return data.classList.replace('slide-out-right', 'slide-from-left');
                }
            });
            this.imageSelected++;
        }, this.timeInterval);
    }
    componentLoadImages(items) {
        [].forEach.call(items, (data, index) => {
            if (index === 0) {
                data.classList.replace('slide-out-right', 'slide-in-left');
            }
            else {
                data.classList.replace('slide-out-right', 'slide-from-left');
            }
        });
    }
    getData(carouseData) {
        let returnItems = [];
        const items = carouseData;
        returnItems = items.map((item) => (h("div", { id: item.id, title: item.alt, style: { backgroundImage: `url(${item.image})` }, class: 'slides slide-out-right' })));
        return returnItems;
    }
    componentWillLoad() {
        const formattedData = regexFormatter(this.data, /(\bid|\bimage|\balt+?):/g);
        this.dataElement = this.getData(formattedData);
    }
    componentDidLoad() {
        const items = this.el.querySelectorAll('.slides');
        this.componentLoadImages(items);
        this.timeTrigger(items);
    }
    render() {
        return h("div", { class: 'carousel' }, this.dataElement);
    }
    static get is() { return "ccdesign-carousel"; }
    static get originalStyleUrls() { return {
        "$": ["ccdesign-carousel.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["ccdesign-carousel.css"]
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
        "dataElement": {
            "type": "unknown",
            "mutable": true,
            "complexType": {
                "original": "JSX.Element",
                "resolved": "Element",
                "references": {
                    "JSX": {
                        "location": "import",
                        "path": "@stencil/core"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "timeInterval": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "3000",
                "resolved": "3000",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "time-interval",
            "reflect": false,
            "defaultValue": "3000"
        },
        "imageSelected": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "image-selected",
            "reflect": false,
            "defaultValue": "1"
        }
    }; }
    static get elementRef() { return "el"; }
}
