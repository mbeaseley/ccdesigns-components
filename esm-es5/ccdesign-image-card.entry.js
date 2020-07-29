import { r as registerInstance, h } from './index-c6fc5dac.js';
var ccdesignImageCardCss = "ccdesign-image-card .image-card{text-decoration:none}ccdesign-image-card .image-card__image{width:100%}ccdesign-image-card .image-card__image:hover,ccdesign-image-card .image-card__image:focus{background:#181852}ccdesign-image-card .image-card__image img{width:100%}ccdesign-image-card .image-card__image img:hover,ccdesign-image-card .image-card__image img:focus{opacity:0.1}ccdesign-image-card .image-card__description{border:1px solid #fff;padding:15px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}@media (max-width: 1200px){ccdesign-image-card .image-card__description{-ms-flex-align:center;align-items:center;height:50px}}ccdesign-image-card .image-card__description p{text-align:center;color:#fff;margin:0}";
var CcdesignImageCard = /** @class */ (function () {
    function CcdesignImageCard(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * render
     */
    CcdesignImageCard.prototype.render = function () {
        var image = (h("div", { class: 'image-card__image' }, h("ccdesign-lazy-image", { "img-src": "" + this.imageUrl, alt: "" + this.imageAlt })));
        var description = (h("div", { class: 'image-card__description' }, h("p", null, this.description)));
        return (h("a", { class: 'image-card', href: this.url }, this.imageUrl ? image : '', this.description ? description : ''));
    };
    return CcdesignImageCard;
}());
CcdesignImageCard.style = ccdesignImageCardCss;
export { CcdesignImageCard as ccdesign_image_card };
