import { r as registerInstance, h, g as getElement } from './index-c6fc5dac.js';
import { r as regexFormatter } from './regexFormatter-7934403d.js';

const ccdesignCarouselCss = "ccdesign-carousel .carousel .slide-from-left,ccdesign-carousel .carousel .slide-in-left,ccdesign-carousel .carousel .slide-out-right{-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-timing-function:cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function:cubic-bezier(0.42, 0, 0.58, 1);-webkit-animation-delay:0s;animation-delay:0s;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-direction:normal;animation-direction:normal;-webkit-animation-fill-mode:none;animation-fill-mode:none;-webkit-animation-play-state:running;animation-play-state:running;-webkit-transition:1s;transition:1s}ccdesign-carousel .carousel{position:relative;display:block;margin:auto;height:100vh;width:100%;overflow:hidden}@media (max-width: 768px){ccdesign-carousel .carousel{height:35vh}}ccdesign-carousel .carousel .slide-out-right{left:100%;z-index:2}ccdesign-carousel .carousel .slide-in-left{left:0;z-index:4}ccdesign-carousel .carousel .slide-from-left{left:-100%;z-index:2}ccdesign-carousel .carousel .slides{position:absolute;top:0;height:100%;width:100%;visibility:visible;opacity:1;display:block}ccdesign-carousel .carousel>div{background-size:cover;background-position:center center;background-repeat:no-repeat}";

const CcdesignCarousel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get el() { return getElement(this); }
};
CcdesignCarousel.style = ccdesignCarouselCss;

export { CcdesignCarousel as ccdesign_carousel };
