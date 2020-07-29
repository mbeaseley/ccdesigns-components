'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-820888ff.js');

const ccdesignGridCss = "ccdesign-grid .grid{margin-bottom:30px}ccdesign-grid .grid__header{margin-bottom:20px}ccdesign-grid .grid__container{display:grid;grid-template-columns:1fr 1fr;grid-auto-columns:1fr 1fr;grid-gap:20px 20px}ccdesign-grid .grid__container>*{-ms-flex-item-align:end;align-self:end}";

const CcdesignGrid = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * render
     */
    render() {
        const header = (index.h("div", { class: 'grid__header' }, index.h("h1", null, this.heading)));
        return (index.h("div", { class: 'grid' }, this.heading ? header : '', index.h("div", { class: 'grid__container' }, index.h("slot", { name: 'children' }))));
    }
};
CcdesignGrid.style = ccdesignGridCss;

exports.ccdesign_grid = CcdesignGrid;
