import { r as registerInstance, h, g as getElement } from './index-c6fc5dac.js';
import { r as regexFormatter } from './regexFormatter-7934403d.js';
var ccdesignCarouselCss = "ccdesign-carousel .carousel .slide-from-left,ccdesign-carousel .carousel .slide-in-left,ccdesign-carousel .carousel .slide-out-right{-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-timing-function:cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function:cubic-bezier(0.42, 0, 0.58, 1);-webkit-animation-delay:0s;animation-delay:0s;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-direction:normal;animation-direction:normal;-webkit-animation-fill-mode:none;animation-fill-mode:none;-webkit-animation-play-state:running;animation-play-state:running;-webkit-transition:1s;transition:1s}ccdesign-carousel .carousel{position:relative;display:block;margin:auto;height:100vh;width:100%;overflow:hidden}@media (max-width: 768px){ccdesign-carousel .carousel{height:35vh}}ccdesign-carousel .carousel .slide-out-right{left:100%;z-index:2}ccdesign-carousel .carousel .slide-in-left{left:0;z-index:4}ccdesign-carousel .carousel .slide-from-left{left:-100%;z-index:2}ccdesign-carousel .carousel .slides{position:absolute;top:0;height:100%;width:100%;visibility:visible;opacity:1;display:block}ccdesign-carousel .carousel>div{background-size:cover;background-position:center center;background-repeat:no-repeat}";
var CcdesignCarousel = /** @class */ (function () {
    function CcdesignCarousel(hostRef) {
        registerInstance(this, hostRef);
        this.timeInterval = 3000;
        this.imageSelected = 1;
    }
    CcdesignCarousel.prototype.timeTrigger = function (items) {
        var _this = this;
        setInterval(function () {
            _this.imageSelected >= items.length ? (_this.imageSelected = 0) : null;
            [].forEach.call(items, function (data, index) {
                if (data.className === 'slides slide-in-left') {
                    return data.classList.replace('slide-in-left', 'slide-out-right');
                }
                else if (index === _this.imageSelected) {
                    return data.classList.replace('slide-from-left', 'slide-in-left');
                }
                else {
                    return data.classList.replace('slide-out-right', 'slide-from-left');
                }
            });
            _this.imageSelected++;
        }, this.timeInterval);
    };
    CcdesignCarousel.prototype.componentLoadImages = function (items) {
        [].forEach.call(items, function (data, index) {
            if (index === 0) {
                data.classList.replace('slide-out-right', 'slide-in-left');
            }
            else {
                data.classList.replace('slide-out-right', 'slide-from-left');
            }
        });
    };
    CcdesignCarousel.prototype.getData = function (carouseData) {
        var returnItems = [];
        var items = carouseData;
        returnItems = items.map(function (item) { return (h("div", { id: item.id, title: item.alt, style: { backgroundImage: "url(" + item.image + ")" }, class: 'slides slide-out-right' })); });
        return returnItems;
    };
    CcdesignCarousel.prototype.componentWillLoad = function () {
        var formattedData = regexFormatter(this.data, /(\bid|\bimage|\balt+?):/g);
        this.dataElement = this.getData(formattedData);
    };
    CcdesignCarousel.prototype.componentDidLoad = function () {
        var items = this.el.querySelectorAll('.slides');
        this.componentLoadImages(items);
        this.timeTrigger(items);
    };
    CcdesignCarousel.prototype.render = function () {
        return h("div", { class: 'carousel' }, this.dataElement);
    };
    Object.defineProperty(CcdesignCarousel.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return CcdesignCarousel;
}());
CcdesignCarousel.style = ccdesignCarouselCss;
export { CcdesignCarousel as ccdesign_carousel };
