import { r as registerInstance, h } from './index-c6fc5dac.js';

const ccdesignGridCss = "ccdesign-grid .grid{margin-bottom:30px}ccdesign-grid .grid__header{margin-bottom:20px}ccdesign-grid .grid__container{display:grid;grid-template-columns:1fr 1fr;grid-auto-columns:1fr 1fr;grid-gap:20px 20px}ccdesign-grid .grid__container>*{-ms-flex-item-align:end;align-self:end}";

const CcdesignGrid = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * render
     */
    render() {
        const header = (h("div", { class: 'grid__header' }, h("h1", null, this.heading)));
        return (h("div", { class: 'grid' }, this.heading ? header : '', h("div", { class: 'grid__container' }, h("slot", { name: 'children' }))));
    }
};
CcdesignGrid.style = ccdesignGridCss;

export { CcdesignGrid as ccdesign_grid };
