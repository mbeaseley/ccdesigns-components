import{r as i,h as e,g as t}from"./p-7694a700.js";import{r as s}from"./p-690225f1.js";const n=class{constructor(e){i(this,e),this.timeInterval=3e3,this.imageSelected=1}timeTrigger(i){setInterval(()=>{this.imageSelected>=i.length&&(this.imageSelected=0),[].forEach.call(i,(i,e)=>"slides slide-in-left"===i.className?i.classList.replace("slide-in-left","slide-out-right"):e===this.imageSelected?i.classList.replace("slide-from-left","slide-in-left"):i.classList.replace("slide-out-right","slide-from-left")),this.imageSelected++},this.timeInterval)}componentLoadImages(i){[].forEach.call(i,(i,e)=>{i.classList.replace("slide-out-right",0===e?"slide-in-left":"slide-from-left")})}getData(i){let t=[];return t=i.map(i=>e("div",{id:i.id,title:i.alt,style:{backgroundImage:`url(${i.image})`},class:"slides slide-out-right"})),t}componentWillLoad(){const i=s(this.data,/(\bid|\bimage|\balt+?):/g);this.dataElement=this.getData(i)}componentDidLoad(){const i=this.el.querySelectorAll(".slides");this.componentLoadImages(i),this.timeTrigger(i)}render(){return e("div",{class:"carousel"},this.dataElement)}get el(){return t(this)}};n.style="ccdesign-carousel .carousel .slide-from-left,ccdesign-carousel .carousel .slide-in-left,ccdesign-carousel .carousel .slide-out-right{-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-timing-function:cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function:cubic-bezier(0.42, 0, 0.58, 1);-webkit-animation-delay:0s;animation-delay:0s;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-direction:normal;animation-direction:normal;-webkit-animation-fill-mode:none;animation-fill-mode:none;-webkit-animation-play-state:running;animation-play-state:running;-webkit-transition:1s;transition:1s}ccdesign-carousel .carousel{position:relative;display:block;margin:auto;height:100vh;width:100%;overflow:hidden}@media (max-width: 768px){ccdesign-carousel .carousel{height:35vh}}ccdesign-carousel .carousel .slide-out-right{left:100%;z-index:2}ccdesign-carousel .carousel .slide-in-left{left:0;z-index:4}ccdesign-carousel .carousel .slide-from-left{left:-100%;z-index:2}ccdesign-carousel .carousel .slides{position:absolute;top:0;height:100%;width:100%;visibility:visible;opacity:1;display:block}ccdesign-carousel .carousel>div{background-size:cover;background-position:center center;background-repeat:no-repeat}";export{n as ccdesign_carousel}