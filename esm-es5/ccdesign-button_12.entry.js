var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, h, g as getElement, c as getContext } from './index-c6fc5dac.js';
import { r as regexFormatter } from './regexFormatter-7934403d.js';
var ccdesignButtonCss = "ccdesign-button span{font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif}.text--white{color:#fff}.text--light-grey{color:#b4b4b4}.text--grey{color:#424242}.text--dark-grey{color:#252525}.text--black{color:#000}.text--blue{color:#007bff}ccdesign-button .btn{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:0 10px;text-align:center;text-decoration:none;cursor:pointer}ccdesign-button .btn:focus,ccdesign-button .btn:focus-within{outline:none}ccdesign-button .btn:hover .icon--blue{color:#0056b3}ccdesign-button .btn.btn--text{background-color:transparent;border-color:transparent}ccdesign-button .btn.btn--text:active{-webkit-box-shadow:none;box-shadow:none}ccdesign-button .btn.btn--icon{padding-left:5px}ccdesign-button span{font-size:16px}";
var CcdesignButton = /** @class */ (function () {
    function CcdesignButton(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * component did fully load
     */
    CcdesignButton.prototype.componentDidLoad = function () {
        if (this.color !== undefined) {
            var result = this.el.querySelector('span');
            result.innerHTML ? result.setAttribute('class', "text--" + this.color) : null;
        }
    };
    /**
     * render
     */
    CcdesignButton.prototype.render = function () {
        var _a;
        var TagType = Boolean(this.url) ? 'a' : 'button';
        var attribute = TagType === 'button' ? { type: this.type } : { href: this.url, alt: this.alt };
        var classList = (_a = {
                btn: true
            },
            _a["btn--" + this.color] = true,
            _a["btn--icon"] = this.icon,
            _a["btn--" + this.type] = this.type === 'text',
            _a);
        var icon = this.icon !== undefined ? (h("ccdesign-icon", { name: this.icon, color: this.color, size: 'xs' })) : null;
        return (
        // @ts-ignore
        h(TagType, Object.assign({ class: classList }, attribute, { "aria-label": this.alt }), icon, h("span", null, h("slot", null))));
    };
    Object.defineProperty(CcdesignButton.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return CcdesignButton;
}());
CcdesignButton.style = ccdesignButtonCss;
var ccdesignCarouselNewCss = "ccdesign-carousel-new .carousel .slide-left,ccdesign-carousel-new .carousel .slide-middle,ccdesign-carousel-new .carousel .slide-right{-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-timing-function:cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function:cubic-bezier(0.42, 0, 0.58, 1);-webkit-animation-delay:0s;animation-delay:0s;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-direction:normal;animation-direction:normal;-webkit-animation-fill-mode:none;animation-fill-mode:none;-webkit-animation-play-state:running;animation-play-state:running;-webkit-transition:1s;transition:1s}ccdesign-carousel-new .carousel{position:relative;display:block;margin:auto;height:97vh;width:100%;overflow:hidden;background-color:#b4b4b4}@media (max-width: 768px){ccdesign-carousel-new .carousel{height:35vh}}ccdesign-carousel-new .carousel .slide-right{left:100%;z-index:2}ccdesign-carousel-new .carousel .slide-middle{left:0;z-index:4}ccdesign-carousel-new .carousel .slide-left{left:-100%;z-index:2}ccdesign-carousel-new .carousel>ccdesign-lazy-image{position:absolute;display:-ms-flexbox;display:flex}ccdesign-carousel-new .carousel>ccdesign-lazy-image img{position:relative;display:block;height:100vh;min-width:50vw;-o-object-fit:cover;object-fit:cover}@media (max-width: 768px){ccdesign-carousel-new .carousel>ccdesign-lazy-image img{top:-9vh;width:100vw;min-height:35vh;height:unset;-o-object-fit:unset;object-fit:unset}}";
var CcdesignCarouselNew = /** @class */ (function () {
    function CcdesignCarouselNew(hostRef) {
        registerInstance(this, hostRef);
        this.timeInterval = 3000;
        this.imageSelected = 1;
    }
    /**
     * Converts carousel Data into JSX Elements
     * @param carouseData - Formatted carousel data
     */
    CcdesignCarouselNew.prototype.getData = function (carouseData) {
        var returnItems = [];
        var items = carouseData;
        returnItems = items.map(function (item) { return (
        // @ts-ignore
        h("ccdesign-lazy-image", { "img-src": item.image, classNames: 'slide-right', alt: item.alt })); });
        return returnItems;
    };
    /**
     * component will fully load
     */
    CcdesignCarouselNew.prototype.componentWillLoad = function () {
        if (this.data) {
            var formattedData = regexFormatter(this.data, /(\bid|\bimage|\balt+?):/g);
            this.dataElement = this.getData(formattedData);
        }
    };
    /**
     * Swap classes between elements
     * @param data - HTML Element
     * @param i - index
     */
    CcdesignCarouselNew.prototype.sortClasses = function (data, i) {
        if (data.className === 'slide-middle blurry-out') {
            return data.classList.replace('slide-middle', 'slide-right');
        }
        else if (i === this.imageSelected) {
            return data.classList.replace('slide-left', 'slide-middle');
        }
        else {
            return data.classList.replace('slide-right', 'slide-left');
        }
    };
    /**
     * Trigger for carousel swapping
     * @param items - HTML elements
     */
    CcdesignCarouselNew.prototype.timeTrigger = function (items) {
        var _this = this;
        this.items = items;
        setInterval(function () {
            _this.imageSelected >= items.length ? (_this.imageSelected = 0) : null;
            // Loops through each image at set timeInterval to swap classNames
            _this.items.forEach(function (data, i) {
                return _this.sortClasses(data, i);
            });
            _this.imageSelected++;
        }, this.timeInterval);
    };
    /**
     * on component first load
     * @param items - HTML elements
     */
    CcdesignCarouselNew.prototype.componentLoadImages = function (items) {
        this.items = items;
        this.items.forEach(function (data, i) {
            if (i === 0) {
                data.classList.replace('slide-right', 'slide-middle');
            }
            else {
                data.classList.replace('slide-right', 'slide-left');
            }
        });
    };
    /**
     * Component fully loaded
     */
    CcdesignCarouselNew.prototype.componentDidLoad = function () {
        if (this.data) {
            this.items = this.el.querySelectorAll('ccdesign-lazy-image img');
            this.componentLoadImages(this.items);
            this.timeTrigger(this.items);
        }
    };
    /**
     * render
     */
    CcdesignCarouselNew.prototype.render = function () {
        return h("div", { class: 'carousel' }, this.data ? this.dataElement : null);
    };
    Object.defineProperty(CcdesignCarouselNew.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return CcdesignCarouselNew;
}());
CcdesignCarouselNew.style = ccdesignCarouselNewCss;
var ccdesignCopyCss = "ccdesign-copy{display:block}ccdesign-copy .copy{line-height:24px;margin-top:0}";
var CcdesignCopy = /** @class */ (function () {
    function CcdesignCopy(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * render
     */
    CcdesignCopy.prototype.render = function () {
        return h("div", { class: 'copy', innerHTML: this.copy });
    };
    return CcdesignCopy;
}());
CcdesignCopy.style = ccdesignCopyCss;
var ccdesignCvTemplateCss = "body{background-color:#000;margin:0}@media (max-width: 992px){ccdesign-cv-template ccdesign-header .navbar{margin-left:20px !important}}ccdesign-cv-template .page{overflow:hidden;background-color:#000}ccdesign-cv-template .page__body{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100vw;height:97vh}ccdesign-cv-template .page__body>app-home,ccdesign-cv-template .page__body app-portfolio,ccdesign-cv-template .page__body app-contact,ccdesign-cv-template .page__body app-fyp-project,ccdesign-cv-template .page__body app-website-project,ccdesign-cv-template .page__body app-webcomponent-project,ccdesign-cv-template .page__body app-talktalk-azure,ccdesign-cv-template .page__body app-talktalk-component,ccdesign-cv-template .page__body app-talktalk-sales{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100vw;height:97vh}ccdesign-cv-template .page__body--left::-webkit-scrollbar{display:none}ccdesign-cv-template .page__body--left{padding-bottom:10px;margin-top:55px;-ms-flex:1 1 50vw;flex:1 1 50vw;-ms-flex-order:1;order:1;overflow:auto;overflow-x:hidden}@media screen and (max-width: 768px){ccdesign-cv-template .page__body--left{margin-top:0}}ccdesign-cv-template .page__body--left>*{text-align:left;margin-left:100px;margin-right:60px}@media (max-width: 992px){ccdesign-cv-template .page__body--left>*{margin-left:20px}}@media (max-width: 400px){ccdesign-cv-template .page__body--left>*{margin-left:20px;margin-right:35px}}ccdesign-cv-template .page__body--right{height:97vh;-ms-flex:2 2 50vw;flex:2 2 50vw;-ms-flex-order:2;order:2;min-width:387px}@media screen and (max-width: 768px){ccdesign-cv-template .page__body{position:relative;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:92vh}ccdesign-cv-template .page__body>app-home,ccdesign-cv-template .page__body app-portfolio,ccdesign-cv-template .page__body app-contact,ccdesign-cv-template .page__body app-fyp-project,ccdesign-cv-template .page__body app-website-project,ccdesign-cv-template .page__body app-webcomponent-project,ccdesign-cv-template .page__body app-talktalk-azure,ccdesign-cv-template .page__body app-talktalk-component,ccdesign-cv-template .page__body app-talktalk-sales{position:relative;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:92vh}ccdesign-cv-template .page__body--left{-ms-flex-order:2;order:2;-ms-flex:1 1 140vw;flex:1 1 140vw}ccdesign-cv-template .page__body--right{-ms-flex-order:1;order:1;min-height:35vh;max-height:35vh;margin-bottom:45px}}";
var CcdesignCvTemplate = /** @class */ (function () {
    function CcdesignCvTemplate(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * render
     */
    CcdesignCvTemplate.prototype.render = function () {
        var header = this.header ? h("ccdesign-header", { data: "" + this.header }) : null;
        var footer = this.footer ? h("ccdesign-footer", { data: "" + this.footer }) : null;
        return (h("div", null, header, h("main", { class: 'page' }, h("content", { class: 'page__body' }, h("slot", null), h("slot", { name: 'container' }))), footer));
    };
    return CcdesignCvTemplate;
}());
CcdesignCvTemplate.style = ccdesignCvTemplateCss;
var ccdesignFooterCss = "ccdesign-footer .footer{font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif}.footer--white{background-color:#fff;color:#b4b4b4}.footer--light-grey{background-color:#b4b4b4;color:#252525}.footer--grey{background-color:#424242;color:#b4b4b4}.footer--dark-grey{background-color:#252525;color:#b4b4b4}.footer--black{background-color:#000;color:#b4b4b4}.footer--blue{background-color:#007bff;color:#b4b4b4}ccdesign-footer .footer{position:fixed;bottom:0;left:0;right:0;padding:8px 0 8px 0;text-align:center;font-size:12px;z-index:5}";
var CcdesignFooter = /** @class */ (function () {
    function CcdesignFooter(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * component will fully load
     */
    CcdesignFooter.prototype.componentWillLoad = function () {
        if (this.data) {
            this.dataContent = regexFormatter(this.data, /(\bid|\btext|\bbackgroundColor+?):/g);
        }
    };
    /**
     * render
     */
    CcdesignFooter.prototype.render = function () {
        if (this.data) {
            return (h("div", { class: "footer footer--" + this.dataContent.backgroundColor }, "" + this.dataContent.text));
        }
    };
    return CcdesignFooter;
}());
CcdesignFooter.style = ccdesignFooterCss;
// Can be used for getting local storage items/ cookies in future
var envType = (function () {
    function getEnv() {
        {
            return true;
        }
    }
    return {
        isProd: getEnv(),
        isDev: !getEnv(),
    };
});
// Production Data Needed
var prod = {
    dataEndpoint: {
        url: 'http://ccdesign.me.uk/'
    }
};
// Development Data Needed
var dev = {
    dataEndpoint: {
        url: 'http://localhost:4200/'
    }
};
var Environment = /** @class */ (function () {
    function Environment() {
    }
    Environment.prototype.getEndpoint = function () {
        if (envType) {
            return prod;
        }
        else {
            return dev;
        }
    };
    return Environment;
}());
var environment = new Environment();
var ccdesignHeaderCss = "@media (min-width: 768px){ccdesign-header .header{position:fixed;width:50vw;z-index:1}ccdesign-header .header .navbar{position:relative;padding:12px 4px 5px 0;margin-left:100px;-webkit-box-shadow:none;box-shadow:none}ccdesign-header .header .navbar__list{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;list-style:none;padding:0;margin:0}ccdesign-header .header .navbar__list ccdesign-lazy-image>img{width:30px;height:30px}ccdesign-header .header .navbar__list ccdesign-button{position:absolute;right:0}ccdesign-header .header .navbar__list img{margin-right:16px}ccdesign-header .header .navbar__item{display:inline-block}ccdesign-header .header .navbar__link{color:#b4b4b4;padding:1px 7px;text-decoration:none}ccdesign-header .header .navbar__link.active{color:#80e3ff}ccdesign-header .header .navbar__link:hover{color:#fff}}";
var CcdesignHeader = /** @class */ (function () {
    function CcdesignHeader(hostRef) {
        registerInstance(this, hostRef);
        this.initialized = false;
        this.isRootPage = false;
        try {
            this.env = this.determineEnvironment().toString();
        }
        catch (e) {
            this.env = environment.getEndpoint().dataEndpoint.url;
        }
        this.isClient = getContext(this, "isClient");
    }
    /**
     * Formats nav data
     */
    CcdesignHeader.prototype.formatContent = function () {
        if (this.data !== undefined) {
            this.formattedData = regexFormatter(this.data, /([a-z]+?):/g);
        }
    };
    /**
     * Listens on doms window for viewport size
     */
    CcdesignHeader.prototype.handleLoad = function () {
        if (this.isClient) {
            this.isMobileLayout = window.innerWidth < 768 ? true : false;
        }
    };
    /**
     * sets user back to root page
     */
    CcdesignHeader.prototype.backRootPage = function () {
        window.location.href = this.env + 'portfolio';
        this.isRootPage = false;
    };
    /**
     * component will fully load
     */
    CcdesignHeader.prototype.componentWillLoad = function () {
        this.formatContent();
        this.handleLoad();
    };
    /**
     * component did fully load
     */
    CcdesignHeader.prototype.componentDidLoad = function () {
        var urlPathName = window.location.pathname;
        urlPathName = urlPathName.replace('/', '');
        if (urlPathName === '') {
            urlPathName = 'home';
        }
        // Url paths for ccdesign.me.uk
        var UrlArray = [
            'portfolio/fyp-project',
            'portfolio/website-project',
            'portfolio/webcomponent-project',
            'portfolio/talktalk-azure',
            'portfolio/talktalk-component',
            'portfolio/talktalk-sales',
        ];
        if (UrlArray.indexOf(urlPathName) > -1) {
            this.isRootPage = true;
            return;
        }
        try {
            var elResult = this.el.querySelectorAll("#" + urlPathName);
            elResult.forEach(function (elementResult) {
                elementResult.classList.add('active');
            });
        }
        catch (e) {
            return console.warn('Error with header: ', e);
        }
    };
    /**
     * Checks for environment, dev or prod
     */
    CcdesignHeader.prototype.determineEnvironment = function () {
        return environment.getEndpoint().dataEndpoint.url;
    };
    /**
     * Formats mobile nav bar
     * @param data - nav data items
     */
    CcdesignHeader.prototype.getNav = function (data) {
        var _this = this;
        return (h("ul", { class: "navbar__list" }, h("li", null, h("a", { href: this.env }, h("ccdesign-lazy-image", { "img-src": 'assets/favicon.svg', alt: 'CCDesigns' }))), this.isRootPage ? (h("ccdesign-button", { icon: 'chevron-left', type: 'text', color: 'light-grey', 
            // eslint-disable-next-line react/jsx-no-bind
            onClick: function () { return _this.backRootPage(); }, alt: 'chevron-left' })) : (data.map(function (item) { return (h("li", { class: "navbar__item" }, h("a", { id: 'desktop' + item.id, href: item.url, class: "navbar__link" }, item.name))); }))));
    };
    /**
     * render
     */
    CcdesignHeader.prototype.render = function () {
        var mobileNav = this.formattedData ? (h("mobile-nav", { "aria-label": 'Main Navigation', data: this.formattedData })) : null;
        var desktopNav = this.formattedData ? (h("nav", { class: 'navbar', "aria-label": 'Main Navigation' }, this.getNav(this.formattedData))) : null;
        return h("header", { class: 'header' }, this.isMobileLayout ? mobileNav : desktopNav);
    };
    Object.defineProperty(CcdesignHeader.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return CcdesignHeader;
}());
CcdesignHeader.style = ccdesignHeaderCss;
var ccdesignIconCss = ".icon--white{color:#fff}.icon--light-grey{color:#b4b4b4}.icon--grey{color:#424242}.icon--dark-grey{color:#252525}.icon--black{color:#000}.icon--blue{color:#007bff}ccdesign-icon .icon{fill:currentColor}ccdesign-icon .icon--xxs svg{width:25px;height:25px}ccdesign-icon .icon--xs svg{width:30px;height:30px}ccdesign-icon .icon--sm svg{width:40px;height:40px}ccdesign-icon .icon--md svg{width:48px;height:48px}@media (min-width: 1200px){ccdesign-icon .icon--md svg{width:60px;height:60px}}@media (min-width: 992px){ccdesign-icon .icon--md svg{width:52px;height:52px}}ccdesign-icon .icon--lg svg{width:60px;height:60px}@media (min-width: 1200px){ccdesign-icon .icon--lg svg{width:80px;height:80px}}@media (min-width: 992px){ccdesign-icon .icon--lg svg{width:68px;height:68px}}ccdesign-icon .icon--xl svg{width:80px;height:80px}@media (min-width: 1200px){ccdesign-icon .icon--xl svg{width:112px;height:112px}}@media (min-width: 992px){ccdesign-icon .icon--xl svg{width:96px;height:96px}}ccdesign-icon .icon--xxl{width:100px;height:100px}@media (min-width: 1200px){ccdesign-icon .icon--xxl{width:144px;height:144px}}@media (min-width: 992px){ccdesign-icon .icon--xxl{width:112px;height:112px}}";
var CcdesignIcon = /** @class */ (function () {
    function CcdesignIcon(hostRef) {
        registerInstance(this, hostRef);
        this.size = 'xs';
        this.color = 'white';
        this.svg = '';
    }
    /**
     * gets and sets icon svg to element
     */
    CcdesignIcon.prototype.getSVG = function (name) {
        var _this = this;
        var fallbackUrl = "/assets/" + name + ".svg";
        var url = Boolean(name)
            ? fallbackUrl
            : "https://ccdesigns.blob.core.windows.net/icons/" + this.name + ".svg";
        if (this.name === undefined) {
            return Promise.resolve(undefined);
        }
        return fetch(url)
            .then(function (res) { return res.text(); })
            .then(function (svg) {
            _this.svg = !svg.includes('<svg') ? '' : svg;
            //  Fetches backup image
            if (_this.svg === '') {
                return _this.getSVG('fallback');
            }
            var result = _this.iconEl.querySelector('div');
            var iconExist = Boolean(result.querySelector('svg'));
            if (iconExist) {
                result.querySelector('svg').remove();
            }
            result.insertAdjacentHTML('afterbegin', _this.svg);
        });
    };
    /**
     * component did fully load
     */
    CcdesignIcon.prototype.componentDidLoad = function () {
        return this.getSVG();
    };
    /**
     * watches to see if icon name changes so it can update dom
     */
    CcdesignIcon.prototype.componentWillUpdate = function () {
        if (this.svg === '' || this.svg === undefined) {
            return this.getSVG();
        }
    };
    /**
     * render
     */
    CcdesignIcon.prototype.render = function () {
        var inputColor;
        var backgroundColors = ['white', 'light-grey', 'grey', 'dark-grey', 'black', 'blue'];
        if (backgroundColors.indexOf(this.color) > -1) {
            inputColor = "icon--" + this.color;
        }
        else {
            console.error(this.color + " is not a defined color. Default color is used.");
            inputColor = "icon--dark-grey";
        }
        var inputSize;
        var sizes = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
        if (sizes.indexOf(this.size) > -1) {
            inputSize = "icon--" + this.size;
        }
        else {
            console.error(this.size + " is not a defined size for an icon. It has been set to default size of xs");
            inputSize = 'icon--xs';
        }
        return h("div", { class: "icon " + inputSize + " " + inputColor });
    };
    Object.defineProperty(CcdesignIcon.prototype, "iconEl", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CcdesignIcon, "watchers", {
        get: function () {
            return {
                "name": ["componentWillUpdate"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return CcdesignIcon;
}());
CcdesignIcon.style = ccdesignIconCss;
var ccdesignLazyImageCss = ".blurry-load{-webkit-filter:blur(8px);filter:blur(8px)}@-webkit-keyframes blurOut{0%{-webkit-filter:blur(20px);filter:blur(20px)}50%{-webkit-filter:blur(10px);filter:blur(10px)}100%{-webkit-filter:blur(0px);filter:blur(0px)}}@keyframes blurOut{0%{-webkit-filter:blur(20px);filter:blur(20px)}50%{-webkit-filter:blur(10px);filter:blur(10px)}100%{-webkit-filter:blur(0px);filter:blur(0px)}}.blur-out{-webkit-animation:blurOut 0.5s ease-out;animation:blurOut 0.5s ease-out}ccdesign-lazy-image>img{display:block;width:100%}";
var CcdesignLazyImage = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        /**
         * asynchronousily swaps data-src to src
         */
        this.onIntersection = function (entries) { return __awaiter(_this, void 0, void 0, function () {
            var _i, entries_1, entry;
            return __generator(this, function (_a) {
                for (_i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                    entry = entries_1[_i];
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
                return [2 /*return*/];
            });
        }); };
    }
    /**
     * component did render
     */
    class_1.prototype.componentDidRender = function () {
        var _this = this;
        this.img = this.el.querySelector('img');
        this.img.classList.add('blurry-load');
        // Attached onload so images loads in one go
        this.img.onload = function () {
            _this.img.removeAttribute('style');
            _this.img.classList.remove('blurry-load');
            _this.img.classList.add('blurry-out');
        };
        if (this.img) {
            this.observer = new IntersectionObserver(this.onIntersection);
            this.observer.observe(this.img);
        }
    };
    /**
     * render
     */
    class_1.prototype.render = function () {
        return h("img", { class: this.classNames, "data-src": this.imgSrc, alt: this.alt });
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return class_1;
}());
CcdesignLazyImage.style = ccdesignLazyImageCss;
var PlaceholderPosition;
(function (PlaceholderPosition) {
    PlaceholderPosition["relative"] = "relative";
    PlaceholderPosition["absolute"] = "absolute";
})(PlaceholderPosition || (PlaceholderPosition = {}));
var PlaceholderAlignment;
(function (PlaceholderAlignment) {
    PlaceholderAlignment["topLeft"] = "top-left";
    PlaceholderAlignment["topRight"] = "top-right";
    PlaceholderAlignment["TopCenter"] = "top-center";
    PlaceholderAlignment["middleLeft"] = "middle-left";
    PlaceholderAlignment["middleRight"] = "middle-right";
    PlaceholderAlignment["middleCenter"] = "middle-center";
    PlaceholderAlignment["bottomLeft"] = "bottom-left";
    PlaceholderAlignment["bottomRight"] = "bottom-right";
    PlaceholderAlignment["bottomCenter"] = "bottom-center";
})(PlaceholderAlignment || (PlaceholderAlignment = {}));
var PlaceholderWidth;
(function (PlaceholderWidth) {
    PlaceholderWidth["auto"] = "auto";
    PlaceholderWidth["minSmall"] = "min-small";
    PlaceholderWidth["small"] = "small";
    PlaceholderWidth["medium"] = "medium";
    PlaceholderWidth["large"] = "large";
})(PlaceholderWidth || (PlaceholderWidth = {}));
var PlaceholderHeight;
(function (PlaceholderHeight) {
    PlaceholderHeight["auto"] = "auto";
    PlaceholderHeight["small"] = "small";
    PlaceholderHeight["medium"] = "medium";
    PlaceholderHeight["large"] = "large";
})(PlaceholderHeight || (PlaceholderHeight = {}));
var ccdesignPlaceholderCss = "ccdesign-placeholder .placeholder{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:auto;z-index:5}ccdesign-placeholder .placeholder--relative{position:relative}ccdesign-placeholder .placeholder--relative.placeholder--top-left{-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:start;align-items:flex-start}ccdesign-placeholder .placeholder--relative.placeholder--top-right{-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:end;align-items:flex-end}ccdesign-placeholder .placeholder--relative.placeholder--top-center{-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center}ccdesign-placeholder .placeholder--relative.placeholder--middle-left{-ms-flex-pack:center;justify-content:center;-ms-flex-align:start;align-items:flex-start}ccdesign-placeholder .placeholder--relative.placeholder--middle-right{-ms-flex-pack:center;justify-content:center;-ms-flex-align:end;align-items:flex-end}ccdesign-placeholder .placeholder--relative.placeholder--middle-center{-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}ccdesign-placeholder .placeholder--relative.placeholder--bottom-left{-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:start;align-items:flex-start}ccdesign-placeholder .placeholder--relative.placeholder--bottom-right{-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:end;align-items:flex-end}ccdesign-placeholder .placeholder--relative.placeholder--bottom-center{-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center}ccdesign-placeholder .placeholder--absolute{position:absolute}ccdesign-placeholder .placeholder--absolute.placeholder--top-left{top:0vh;left:0vw;-ms-flex-align:start;align-items:flex-start}ccdesign-placeholder .placeholder--absolute.placeholder--top-right{top:0vh;right:0vw;-ms-flex-align:end;align-items:flex-end}ccdesign-placeholder .placeholder--absolute.placeholder--top-center{top:0vh;left:50vw}ccdesign-placeholder .placeholder--absolute.placeholder--middle-left{top:50vh;left:0vw;-ms-flex-align:start;align-items:flex-start}ccdesign-placeholder .placeholder--absolute.placeholder--middle-right{top:50vh;right:0vw;-ms-flex-align:end;align-items:flex-end}ccdesign-placeholder .placeholder--absolute.placeholder--middle-center{top:50vh;left:50vw;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}@media screen and (max-width: 768px){ccdesign-placeholder .placeholder--absolute.placeholder--middle-center{-ms-flex-direction:row;flex-direction:row;top:35vh}}ccdesign-placeholder .placeholder--absolute.placeholder--bottom-left{bottom:0vh;left:0vw;-ms-flex-align:start;align-items:flex-start}ccdesign-placeholder .placeholder--absolute.placeholder--bottom-right{bottom:0vh;right:0vw;-ms-flex-align:end;align-items:flex-end}ccdesign-placeholder .placeholder--absolute.placeholder--bottom-center{bottom:0vh;left:50vw}ccdesign-placeholder .placeholder--width-auto{width:auto}ccdesign-placeholder .placeholder--width-min-small{min-width:75px}ccdesign-placeholder .placeholder--width-small{width:75px}ccdesign-placeholder .placeholder--width-medium{width:500px}ccdesign-placeholder .placeholder--width-large{width:700px}ccdesign-placeholder .placeholder--height-auto{height:auto}ccdesign-placeholder .placeholder--height-small{height:100px}ccdesign-placeholder .placeholder--height-medium{height:500px}ccdesign-placeholder .placeholder--height-large{height:700px}";
var CcdesignPlaceholder = /** @class */ (function () {
    function CcdesignPlaceholder(hostRef) {
        registerInstance(this, hostRef);
        this.position = PlaceholderPosition.relative;
        this.alignment = PlaceholderAlignment.topLeft;
        this.width = PlaceholderWidth.auto;
        this.height = PlaceholderHeight.auto;
    }
    /**
     * render
     */
    CcdesignPlaceholder.prototype.render = function () {
        var _a;
        var classList = (_a = {
                placeholder: true
            },
            _a["placeholder--" + this.position] = true,
            _a["placeholder--" + this.alignment] = true,
            _a["placeholder--width-" + this.width] = true,
            _a["placeholder--height-" + this.height] = true,
            _a);
        return (h("div", { class: classList }, h("slot", null)));
    };
    return CcdesignPlaceholder;
}());
CcdesignPlaceholder.style = ccdesignPlaceholderCss;
var ccdesignSeparatorCss = "ccdesign-separator{display:block;position:relative}ccdesign-separator hr{border-top:1px solid #b4b4b4}";
var CcdesignSeparator = /** @class */ (function () {
    function CcdesignSeparator(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * render
     */
    CcdesignSeparator.prototype.render = function () {
        return h("hr", null);
    };
    return CcdesignSeparator;
}());
CcdesignSeparator.style = ccdesignSeparatorCss;
var ccdesignSocialContainerCss = "ccdesign-social-container{display:block}@media screen and (min-width: 768px){ccdesign-social-container{margin-bottom:30px}}@media screen and (max-height: 500px){ccdesign-social-container{margin-bottom:15px}}@media screen and (max-width: 768px){ccdesign-social-container:not(:last-child){margin-right:20px}}ccdesign-social-container .circle{width:75px;height:75px;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}@media screen and (max-width: 400px){ccdesign-social-container .circle{width:60px;height:60px}}@media screen and (max-height: 500px){ccdesign-social-container .circle{width:60px;height:60px}}ccdesign-social-container .circle--outercircle{background-color:rgba(55, 210, 253, 0.8)}ccdesign-social-container .circle--innercircle{height:70%;width:70%;background-color:#80e3ff;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}ccdesign-social-container .circle--innercircle ccdesign-button a{display:grid}";
var CcdesignSocialContainer = /** @class */ (function () {
    function CcdesignSocialContainer(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * render
     */
    CcdesignSocialContainer.prototype.render = function () {
        return (h("div", { class: 'circle circle--outercircle' }, h("div", { class: 'circle circle--innercircle' }, h("ccdesign-button", { icon: this.icon, color: 'blue', url: this.url, alt: this.icon }))));
    };
    return CcdesignSocialContainer;
}());
CcdesignSocialContainer.style = ccdesignSocialContainerCss;
/*!
 * pure-swipe.js - v@version@
 * Pure JavaScript swipe events
 * https://github.com/john-doherty/pure-swipe
 * @inspiration https://stackoverflow.com/questions/16348031/disable-scrolling-when-touch-moving-certain-element
 * @author John Doherty <www.johndoherty.info>
 * @license MIT
 */
(function (window, document) {
    // patch CustomEvent to allow constructor creation (IE/Chrome) - resolved once initCustomEvent no longer exists
    if ('initCustomEvent' in document.createEvent('CustomEvent')) {
        window.CustomEvent = function (event, params) {
            params = params || { bubbles: false, cancelable: false, detail: undefined };
            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        };
        window.CustomEvent.prototype = window.Event.prototype;
    }
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);
    document.addEventListener('touchend', handleTouchEnd, false);
    var xDown = null;
    var yDown = null;
    var xDiff = null;
    var yDiff = null;
    var timeDown = null;
    var startEl = null;
    function handleTouchEnd(e) {
        // if the user released on a different target, cancel!
        if (startEl !== e.target)
            return;
        var swipeThreshold = parseInt(startEl.getAttribute('data-swipe-threshold') || '20', 10); // default 10px
        var swipeTimeout = parseInt(startEl.getAttribute('data-swipe-timeout') || '500', 10); // default 1000ms
        var timeDiff = Date.now() - timeDown;
        var eventType = '';
        if (Math.abs(xDiff) > Math.abs(yDiff)) { // most significant
            if (Math.abs(xDiff) > swipeThreshold && timeDiff < swipeTimeout) {
                if (xDiff > 0) {
                    eventType = 'swiped-left';
                }
                else {
                    eventType = 'swiped-right';
                }
            }
        }
        else {
            if (Math.abs(yDiff) > swipeThreshold && timeDiff < swipeTimeout) {
                if (yDiff > 0) {
                    eventType = 'swiped-up';
                }
                else {
                    eventType = 'swiped-down';
                }
            }
        }
        if (eventType !== '') {
            // fire event on the element that started the swipe
            startEl.dispatchEvent(new CustomEvent(eventType, { bubbles: true, cancelable: true }));
            // if (console && console.log) console.log(eventType + ' fired on ' + startEl.tagName);
        }
        // reset values
        xDown = null;
        yDown = null;
        timeDown = null;
    }
    function handleTouchStart(e) {
        // if the element has data-swipe-ignore="true" we stop listening for swipe events
        if (e.target.getAttribute('data-swipe-ignore') === 'true')
            return;
        startEl = e.target;
        timeDown = Date.now();
        xDown = e.touches[0].clientX;
        yDown = e.touches[0].clientY;
        xDiff = 0;
        yDiff = 0;
    }
    function handleTouchMove(e) {
        if (!xDown || !yDown)
            return;
        var xUp = e.touches[0].clientX;
        var yUp = e.touches[0].clientY;
        xDiff = xDown - xUp;
        yDiff = yDown - yUp;
    }
}(window, document));
var mobileNavCss = "mobile-nav .hide-left{left:-280px;-webkit-transition-duration:0.5s;transition-duration:0.5s}mobile-nav .hide-left.navbar__mobile::before{display:none}mobile-nav .hide-right{left:0;-webkit-transition-duration:0.5s;transition-duration:0.5s}mobile-nav .hide-right.navbar__mobile::before{display:block}mobile-nav .visible{visibility:hidden}mobile-nav .navbar__header{padding:12px 4px 12px 0;background-color:#000;min-height:30px;text-align:center}mobile-nav .navbar__header ccdesign-lazy-image>img{width:30px;height:30px}mobile-nav .navbar__header ccdesign-button{float:left}mobile-nav .navbar__header img{position:absolute;z-index:1;left:47vw}mobile-nav .navbar__mobile{position:fixed;top:0;z-index:6;width:280px;height:100vh;background-color:#1b1b1b}mobile-nav .navbar__mobile--interaction{position:absolute;height:100vh;width:30px;z-index:5}mobile-nav .navbar__mobile::before{content:\"\";position:absolute;z-index:-1;left:280px;width:100vw;height:100vh;background-color:#000;opacity:0.5}mobile-nav .navbar__mobile-sub-header{min-height:30px;padding:12px 4px 10px 0;background-color:#000}mobile-nav .navbar__mobile-sub-header img{margin-left:12px}mobile-nav .navbar__mobile-sub-header ccdesign-button{float:right}mobile-nav .navbar__mobile-list{list-style:none;padding:0;margin:0}mobile-nav .navbar__mobile-item{display:block;border-bottom:2px solid #424242}mobile-nav .navbar__mobile-item.active{background-color:#000}mobile-nav .navbar__mobile-item:focus,mobile-nav .navbar__mobile-item:focus-within{outline:none}mobile-nav .navbar__mobile-link{cursor:pointer;color:#b4b4b4;padding:1px 0;text-decoration:none}mobile-nav .navbar__mobile-link.active{color:#80e3ff}mobile-nav .navbar__mobile-link:focus,mobile-nav .navbar__mobile-link:focus-within{outline:none}mobile-nav .navbar__mobile-link:hover{color:#fff;text-decoration:none}mobile-nav .navbar__mobile-link>div{padding:17px 40px 17px 17px}";
var MobileNav = /** @class */ (function () {
    function MobileNav(hostRef) {
        registerInstance(this, hostRef);
        this.isNavOpen = false;
        this.isRootPage = false;
        try {
            this.env = this.determineEnvironment().toString();
        }
        catch (e) {
            this.env = environment.getEndpoint().dataEndpoint.url;
        }
    }
    /**
     * sets nav to open
     */
    MobileNav.prototype.openNav = function () {
        this.isNavOpen = true;
    };
    /**
     * sets nav to close
     */
    MobileNav.prototype.closeNav = function () {
        this.isNavOpen = false;
    };
    /**
     * sets user back to root page
     */
    MobileNav.prototype.backRootPage = function () {
        window.location.href = this.env + 'portfolio';
        this.isRootPage = false;
    };
    /**
     * component did fully load
     */
    MobileNav.prototype.componentDidLoad = function () {
        this.handleGuestures();
        var urlPathName = window.location.pathname;
        urlPathName = urlPathName.replace('/', '');
        if (urlPathName === '') {
            urlPathName = 'home';
        }
        var UrlArray = [
            'portfolio/fyp-project',
            'portfolio/website-project',
            'portfolio/webcomponent-project',
            'portfolio/talktalk-azure',
            'portfolio/talktalk-component',
            'portfolio/talktalk-sales',
        ];
        if (UrlArray.indexOf(urlPathName) > -1) {
            this.isRootPage = true;
            return;
        }
        var elResult = this.el.querySelectorAll("#" + urlPathName);
        elResult.forEach(function (elementResult) {
            elementResult.classList.add('active');
        });
    };
    /**
     * Checks for environment, dev or prod
     */
    MobileNav.prototype.determineEnvironment = function () {
        return environment.getEndpoint().dataEndpoint.url;
    };
    /**
     * Binds querySelector contents to swipe action
     */
    MobileNav.prototype.handleGuestures = function () {
        var _this = this;
        var elRight = this.el.querySelector('.navbar__mobile--interaction');
        elRight.addEventListener('swiped-right', function () {
            _this.openNav();
        });
        var elLeft = this.el.querySelector('.navbar__mobile');
        elLeft.addEventListener('swiped-left', function () {
            _this.closeNav();
        });
    };
    /**
     * render
     */
    MobileNav.prototype.render = function () {
        var _this = this;
        var logo = (h("ccdesign-lazy-image", { "img-src": 'assets/favicon.svg', alt: 'CCDesigns' }));
        var openNav = !this.isRootPage ? (h("ccdesign-button", { icon: 'bars', type: 'text', color: 'light-grey', onClick: function () { return _this.openNav(); }, class: "" + (this.isNavOpen ? 'visible' : ''), alt: 'Menu' }, "Menu")) : ('');
        var closeNav = (h("ccdesign-button", { type: 'text', icon: 'times', color: 'light-grey', onClick: function () { return _this.closeNav(); }, alt: 'close' }));
        var backNav = this.isRootPage ? (h("ccdesign-button", { icon: 'chevron-left', type: 'text', color: 'light-grey', onClick: function () { return _this.backRootPage(); }, alt: 'chevron-left' })) : ('');
        var navHeader = (h("div", { class: 'navbar__header' }, !this.isRootPage ? openNav : backNav, logo));
        var getNavItems = function () {
            if (_this.data === undefined) {
                return;
            }
            var returnItems = [];
            var navItems = _this.data;
            returnItems = navItems.map(function (item) { return (h("li", { id: 'mobile' + item.id, class: 'navbar__mobile-item' }, h("a", { id: item.id, class: 'navbar__mobile-link', href: item.url }, h("div", null, item.name)))); });
            // eslint-disable-next-line @stencil/render-returns-host
            return returnItems;
        };
        var getNav = function () { return h("ul", { class: 'navbar__mobile-list' }, getNavItems()); };
        var navbar = (h("nav", { class: "navbar__mobile " + (!this.isNavOpen ? 'hide-left' : 'hide-right') }, h("div", { class: 'navbar__mobile-sub-header' }, closeNav), [getNav()]));
        var navbarInteraction = h("div", { class: 'navbar__mobile--interaction' });
        // eslint-disable-next-line @stencil/render-returns-host
        return [navHeader, navbar, navbarInteraction];
    };
    Object.defineProperty(MobileNav.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return MobileNav;
}());
MobileNav.style = mobileNavCss;
export { CcdesignButton as ccdesign_button, CcdesignCarouselNew as ccdesign_carousel_new, CcdesignCopy as ccdesign_copy, CcdesignCvTemplate as ccdesign_cv_template, CcdesignFooter as ccdesign_footer, CcdesignHeader as ccdesign_header, CcdesignIcon as ccdesign_icon, CcdesignLazyImage as ccdesign_lazy_image, CcdesignPlaceholder as ccdesign_placeholder, CcdesignSeparator as ccdesign_separator, CcdesignSocialContainer as ccdesign_social_container, MobileNav as mobile_nav };