System.register(["./p-ef8beeef.system.js"],(function(e){"use strict";var i,a;return{setters:[function(e){i=e.r;a=e.h}],execute:function(){var c="ccdesign-image-card .image-card{text-decoration:none}ccdesign-image-card .image-card__image{width:100%}ccdesign-image-card .image-card__image:hover,ccdesign-image-card .image-card__image:focus{background:#181852}ccdesign-image-card .image-card__image img{width:100%}ccdesign-image-card .image-card__image img:hover,ccdesign-image-card .image-card__image img:focus{opacity:0.1}ccdesign-image-card .image-card__description{border:1px solid #fff;padding:15px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}@media (max-width: 1200px){ccdesign-image-card .image-card__description{-ms-flex-align:center;align-items:center;height:50px}}ccdesign-image-card .image-card__description p{text-align:center;color:#fff;margin:0}";var r=e("ccdesign_image_card",function(){function e(e){i(this,e)}e.prototype.render=function(){var e=a("div",{class:"image-card__image"},a("ccdesign-lazy-image",{"img-src":""+this.imageUrl,alt:""+this.imageAlt}));var i=a("div",{class:"image-card__description"},a("p",null,this.description));return a("a",{class:"image-card",href:this.url},this.imageUrl?e:"",this.description?i:"")};return e}());r.style=c}}}));