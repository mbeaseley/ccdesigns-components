import { Component, Element, Prop, h } from '@stencil/core';
import { regexFormatter } from '../../../utils/helpers/regexFormatter';
export class CcdesignCarouselNew {
    constructor() {
        this.timeInterval = 3000;
        this.imageSelected = 1;
    }
    /**
     * Converts carousel Data into JSX Elements
     * @param carouseData - Formatted carousel data
     */
    getData(carouseData) {
        let returnItems = [];
        const items = carouseData;
        returnItems = items.map((item) => (
        // @ts-ignore
        h("ccdesign-lazy-image", { "img-src": item.image, classNames: 'slide-right', alt: item.alt })));
        return returnItems;
    }
    /**
     * component will fully load
     */
    componentWillLoad() {
        if (this.data) {
            const formattedData = regexFormatter(this.data, /(\bid|\bimage|\balt+?):/g);
            this.dataElement = this.getData(formattedData);
        }
    }
    /**
     * Swap classes between elements
     * @param data - HTML Element
     * @param i - index
     */
    sortClasses(data, i) {
        if (data.className === 'slide-middle blurry-out') {
            return data.classList.replace('slide-middle', 'slide-right');
        }
        else if (i === this.imageSelected) {
            return data.classList.replace('slide-left', 'slide-middle');
        }
        else {
            return data.classList.replace('slide-right', 'slide-left');
        }
    }
    /**
     * Trigger for carousel swapping
     * @param items - HTML elements
     */
    timeTrigger(items) {
        this.items = items;
        setInterval(() => {
            this.imageSelected >= items.length ? (this.imageSelected = 0) : null;
            // Loops through each image at set timeInterval to swap classNames
            this.items.forEach((data, i) => {
                return this.sortClasses(data, i);
            });
            this.imageSelected++;
        }, this.timeInterval);
    }
    /**
     * on component first load
     * @param items - HTML elements
     */
    componentLoadImages(items) {
        this.items = items;
        this.items.forEach((data, i) => {
            if (i === 0) {
                data.classList.replace('slide-right', 'slide-middle');
            }
            else {
                data.classList.replace('slide-right', 'slide-left');
            }
        });
    }
    /**
     * Component fully loaded
     */
    componentDidLoad() {
        if (this.data) {
            this.items = this.el.querySelectorAll('ccdesign-lazy-image img');
            this.componentLoadImages(this.items);
            this.timeTrigger(this.items);
        }
    }
    /**
     * render
     */
    render() {
        return h("div", { class: 'carousel' }, this.data ? this.dataElement : null);
    }
    static get is() { return "ccdesign-carousel-new"; }
    static get originalStyleUrls() { return {
        "$": ["ccdesign-carousel-new.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["ccdesign-carousel-new.css"]
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
            "type": "any",
            "mutable": true,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "data-element",
            "reflect": false
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
