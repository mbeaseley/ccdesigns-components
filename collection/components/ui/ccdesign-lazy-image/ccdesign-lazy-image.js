import { Component, Element, Prop, h } from '@stencil/core';
export class CcdesignLazyImage {
    constructor() {
        /**
         * asynchronousily swaps data-src to src
         */
        this.onIntersection = async (entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    if (this.observer) {
                        this.observer.disconnect();
                    }
                    if (entry.target.getAttribute('data-src')) {
                        entry.target.setAttribute('style', 'opacity: 0');
                        entry.target.setAttribute('src', entry.target.getAttribute('data-src'));
                        entry.target.removeAttribute('data-src');
                    }
                }
            }
        };
    }
    /**
     * component did render
     */
    componentDidRender() {
        this.img = this.el.querySelector('img');
        this.img.classList.add('blurry-load');
        // Attached onload so images loads in one go
        this.img.onload = () => {
            this.img.removeAttribute('style');
            this.img.classList.remove('blurry-load');
            this.img.classList.add('blurry-out');
        };
        if (this.img) {
            this.observer = new IntersectionObserver(this.onIntersection);
            this.observer.observe(this.img);
        }
    }
    /**
     * render
     */
    render() {
        return h("img", { class: this.classNames, "data-src": this.imgSrc, alt: this.alt });
    }
    static get is() { return "ccdesign-lazy-image"; }
    static get originalStyleUrls() { return {
        "$": ["ccdesign-lazy-image.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["ccdesign-lazy-image.css"]
    }; }
    static get properties() { return {
        "imgSrc": {
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
            "attribute": "img-src",
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
        },
        "classNames": {
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
            "attribute": "class-names",
            "reflect": false
        }
    }; }
    static get elementRef() { return "el"; }
}
