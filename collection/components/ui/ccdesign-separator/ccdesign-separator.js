import { Component, h } from '@stencil/core';
export class CcdesignSeparator {
    /**
     * render
     */
    render() {
        return h("hr", null);
    }
    static get is() { return "ccdesign-separator"; }
    static get originalStyleUrls() { return {
        "$": ["ccdesign-separator.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["ccdesign-separator.css"]
    }; }
}
