'use strict';

const index = require('./index-820888ff.js');
const patch = require('./patch-0d47ae56.js');

patch.patchBrowser().then(options => {
  return index.bootstrapLazy([["ccdesign-image-card.cjs",[[0,"ccdesign-image-card",{"url":[1],"imageUrl":[1,"image-url"],"imageAlt":[1,"image-alt"],"description":[1]}]]],["ccdesign-carousel.cjs",[[0,"ccdesign-carousel",{"data":[1],"dataElement":[1040],"timeInterval":[2,"time-interval"],"imageSelected":[1026,"image-selected"]}]]],["ccdesign-grid.cjs",[[4,"ccdesign-grid",{"heading":[1]}]]],["ccdesign-button_12.cjs",[[4,"ccdesign-cv-template",{"header":[1],"footer":[1]}],[0,"ccdesign-social-container",{"url":[1],"icon":[1]}],[0,"ccdesign-carousel-new",{"data":[1],"dataElement":[1032,"data-element"],"timeInterval":[2,"time-interval"],"imageSelected":[1026,"image-selected"]}],[0,"ccdesign-copy",{"copy":[1]}],[4,"ccdesign-placeholder",{"position":[1],"alignment":[1],"width":[1],"height":[1]}],[0,"ccdesign-separator"],[0,"ccdesign-header",{"data":[1],"formattedData":[1032,"formatted-data"],"initialized":[32],"isMobileLayout":[32],"isRootPage":[32],"env":[32]},[[9,"resize","handleLoad"]]],[0,"ccdesign-footer",{"data":[1],"dataContent":[1040]}],[0,"mobile-nav",{"data":[16],"isNavOpen":[32],"isRootPage":[32],"env":[32]}],[4,"ccdesign-button",{"url":[1],"icon":[1],"color":[1],"type":[1],"eventName":[1,"event-name"],"alt":[1]}],[0,"ccdesign-icon",{"name":[1],"size":[1],"color":[1],"svg":[1025]}],[0,"ccdesign-lazy-image",{"imgSrc":[1,"img-src"],"alt":[1],"classNames":[1,"class-names"]}]]]], options);
});
