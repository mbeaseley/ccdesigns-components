'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-820888ff.js');

const ccdesignImageCardCss = "ccdesign-image-card .image-card{text-decoration:none}ccdesign-image-card .image-card__image{width:100%}ccdesign-image-card .image-card__image:hover,ccdesign-image-card .image-card__image:focus{background:#181852}ccdesign-image-card .image-card__image img{width:100%}ccdesign-image-card .image-card__image img:hover,ccdesign-image-card .image-card__image img:focus{opacity:0.1}ccdesign-image-card .image-card__description{border:1px solid #fff;padding:15px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}@media (max-width: 1200px){ccdesign-image-card .image-card__description{-ms-flex-align:center;align-items:center;height:50px}}ccdesign-image-card .image-card__description p{text-align:center;color:#fff;margin:0}";

const CcdesignImageCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * render
     */
    render() {
        const image = (index.h("div", { class: 'image-card__image' }, index.h("ccdesign-lazy-image", { "img-src": `${this.imageUrl}`, alt: `${this.imageAlt}` })));
        const description = (index.h("div", { class: 'image-card__description' }, index.h("p", null, this.description)));
        return (index.h("a", { class: 'image-card', href: this.url }, this.imageUrl ? image : '', this.description ? description : ''));
    }
};
CcdesignImageCard.style = ccdesignImageCardCss;

exports.ccdesign_image_card = CcdesignImageCard;
