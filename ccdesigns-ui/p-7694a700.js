const e="ccdesigns-ui";let t,n,l=!1,o=!1,s=!1,i=!1;const r="undefined"!=typeof window?window:{},c=r.CSS,f=r.document||{head:{}},a={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},u=e=>Promise.resolve(e),d=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),p={},$=(e,t,n)=>{n&&n.map(([n,l,o])=>{const s=h(e,n),i=y(t,o),r=m(n);a.ael(s,l,i,r),(t.o=t.o||[]).push(()=>a.rel(s,l,i,r))})},y=(e,t)=>n=>{256&e.t?e.s[t](n):(e.i=e.i||[]).push([t,n])},h=(e,t)=>8&t?r:e,m=e=>0!=(2&e),b="http://www.w3.org/1999/xlink",w=new WeakMap,g=e=>"sc-"+e.u,v={},k=e=>"object"==(e=typeof e)||"function"===e,j="undefined"!=typeof Deno,S=!(j||"undefined"==typeof global||"function"!=typeof require||!global.process||"string"!=typeof __filename||global.origin&&"string"==typeof global.origin),M=(j&&Deno,S?process:j&&Deno,S?process:j&&Deno,(e,t,...n)=>{let l=null,o=null,s=null,i=!1,r=!1,c=[];const f=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?f(l):null!=l&&"boolean"!=typeof l&&((i="function"!=typeof e&&!k(l))&&(l+=""),i&&r?c[c.length-1].p+=l:c.push(i?_(null,l):l),r=i)};if(f(n),t){t.key&&(o=t.key),t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,c,O);const a=_(e,null);return a.$=t,c.length>0&&(a.h=c),a.m=o,a.g=s,a}),_=(e,t)=>({t:0,v:e,p:t,k:null,h:null,$:null,m:null,g:null}),C={},O={forEach:(e,t)=>e.map(R).forEach(t),map:(e,t)=>e.map(R).map(t).map(x)},R=e=>({vattrs:e.$,vchildren:e.h,vkey:e.m,vname:e.g,vtag:e.v,vtext:e.p}),x=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),M(e.vtag,t,...e.vchildren||[])}const t=_(e.vtag,e.vtext);return t.$=e.vattrs,t.h=e.vchildren,t.m=e.vkey,t.g=e.vname,t},D=(e,t,n,l,o,s)=>{if(n!==l){let c=de(e,t),f=t.toLowerCase();if("class"===t){const t=e.classList,o=U(n),s=U(l);t.remove(...o.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!o.includes(e)))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(c||"o"!==t[0]||"n"!==t[1]){const r=k(l);if((c||r&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let o=null==l?"":l;"list"===t?c=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(i){}let a=!1;f!==(f=f.replace(/^xlink\:?/,""))&&(t=f,a=!0),null==l||!1===l?!1===l&&""!==e.getAttribute(t)||(a?e.removeAttributeNS(b,t):e.removeAttribute(t)):(!c||4&s||o)&&!r&&(l=!0===l?"":l,a?e.setAttributeNS(b,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):de(r,f)?f.slice(2):f[2]+t.slice(3),n&&a.rel(e,t,n,!1),l&&a.ael(e,t,l,!1)}},P=/\s/,U=e=>e?e.split(P):[],L=(e,t,n,l)=>{const o=11===t.k.nodeType&&t.k.host?t.k.host:t.k,s=e&&e.$||v,i=t.$||v;for(l in s)l in i||D(o,l,s[l],void 0,n,t.t);for(l in i)D(o,l,s[l],i[l],n,t.t)},T=(e,o,i)=>{let r,c,a,u=o.h[i],d=0;if(l||(s=!0,"slot"===u.v&&(u.t|=u.h?2:1)),null!==u.p)r=u.k=f.createTextNode(u.p);else if(1&u.t)r=u.k=f.createTextNode("");else if(r=u.k=f.createElement(2&u.t?"slot-fb":u.v),L(null,u,!1),u.h)for(d=0;d<u.h.length;++d)c=T(e,u,d),c&&r.appendChild(c);return r["s-hn"]=n,3&u.t&&(r["s-sr"]=!0,r["s-cr"]=t,r["s-sn"]=u.g||"",a=e&&e.h&&e.h[i],a&&a.v===u.v&&e.k&&E(e.k,!1)),r},E=(e,t)=>{a.t|=1;const l=e.childNodes;for(let o=l.length-1;o>=0;o--){const e=l[o];e["s-hn"]!==n&&e["s-ol"]&&(F(e).insertBefore(e,A(e)),e["s-ol"].remove(),e["s-ol"]=void 0,s=!0),t&&E(e,t)}a.t&=-2},W=(e,t,n,l,o,s)=>{let i,r=e["s-cr"]&&e["s-cr"].parentNode||e;for(;o<=s;++o)l[o]&&(i=T(null,n,o),i&&(l[o].k=i,r.insertBefore(i,A(t))))},q=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.k,I(l),o=!0,s["s-ol"]?s["s-ol"].remove():E(s,!0),s.remove())},N=(e,t)=>e.v===t.v&&("slot"===e.v?e.g===t.g:e.m===t.m),A=e=>e&&e["s-ol"]||e,F=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,H=(e,t)=>{const n=t.k=e.k,l=e.h,o=t.h,s=t.p;let i;null===s?("slot"===t.v||L(e,t,!1),null!==l&&null!==o?((e,t,n,l)=>{let o,s,i=0,r=0,c=0,f=0,a=t.length-1,u=t[0],d=t[a],p=l.length-1,$=l[0],y=l[p];for(;i<=a&&r<=p;)if(null==u)u=t[++i];else if(null==d)d=t[--a];else if(null==$)$=l[++r];else if(null==y)y=l[--p];else if(N(u,$))H(u,$),u=t[++i],$=l[++r];else if(N(d,y))H(d,y),d=t[--a],y=l[--p];else if(N(u,y))"slot"!==u.v&&"slot"!==y.v||E(u.k.parentNode,!1),H(u,y),e.insertBefore(u.k,d.k.nextSibling),u=t[++i],y=l[--p];else if(N(d,$))"slot"!==u.v&&"slot"!==y.v||E(d.k.parentNode,!1),H(d,$),e.insertBefore(d.k,u.k),d=t[--a],$=l[++r];else{for(c=-1,f=i;f<=a;++f)if(t[f]&&null!==t[f].m&&t[f].m===$.m){c=f;break}c>=0?(s=t[c],s.v!==$.v?o=T(t&&t[r],n,c):(H(s,$),t[c]=void 0,o=s.k),$=l[++r]):(o=T(t&&t[r],n,r),$=l[++r]),o&&F(u.k).insertBefore(o,A(u.k))}i>a?W(e,null==l[p+1]?null:l[p+1].k,n,l,r,p):r>p&&q(t,i,a)})(n,l,t,o):null!==o?(null!==e.p&&(n.textContent=""),W(n,null,t,o,0,o.length-1)):null!==l&&q(l,0,l.length-1)):(i=n["s-cr"])?i.parentNode.textContent=s:e.p!==s&&(n.data=s)},V=e=>{let t,n,l,o,s,i,r=e.childNodes;for(n=0,l=r.length;n<l;n++)if(t=r[n],1===t.nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,o=0;o<l;o++)if(r[o]["s-hn"]!==t["s-hn"])if(i=r[o].nodeType,""!==s){if(1===i&&s===r[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===i||3===i&&""!==r[o].textContent.trim()){t.hidden=!0;break}V(t)}},z=[],B=e=>{let t,n,l,s,i,r,c=0,f=e.childNodes,a=f.length;for(;c<a;c++){if(t=f[c],t["s-sr"]&&(n=t["s-cr"]))for(l=n.parentNode.childNodes,s=t["s-sn"],r=l.length-1;r>=0;r--)n=l[r],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(G(n,s)?(i=z.find(e=>e.j===n),o=!0,n["s-sn"]=n["s-sn"]||s,i?i.S=t:z.push({S:t,j:n}),n["s-sr"]&&z.map(e=>{G(e.j,n["s-sn"])&&(i=z.find(e=>e.j===n),i&&!e.S&&(e.S=i.S))})):z.some(e=>e.j===n)||z.push({j:n}));1===t.nodeType&&B(t)}},G=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,I=e=>{e.$&&e.$.ref&&e.$.ref(null),e.h&&e.h.map(I)},J=e=>fe(e).M,K=(e,t)=>{t&&!e._&&t["s-p"]&&t["s-p"].push(new Promise(t=>e._=t))},Q=(e,t)=>{if(e.t|=16,!(4&e.t))return K(e,e.C),Se(()=>X(e,t));e.t|=512},X=(e,t)=>{const n=e.s;let l;return t?(e.t|=256,e.i&&(e.i.map(([e,t])=>ne(n,e,t)),e.i=null),l=ne(n,"componentWillLoad")):l=ne(n,"componentWillUpdate"),le(l,()=>Y(e,n,t))},Y=(e,i,r)=>{const c=e.M,u=c["s-rc"];r&&(e=>{const t=e.O;((e,t)=>{let n=g(t),l=he.get(n);if(e=11===e.nodeType?e:f,l)if("string"==typeof l){let t,o=w.get(e=e.head||e);o||w.set(e,o=new Set),o.has(n)||(t=f.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l])})(e.M.getRootNode(),t)})(e);((e,i)=>{const r=e.M,c=e.O,u=e.R||_(null,null),d=(e=>e&&e.v===C)(i)?i:M(null,null,i);if(n=r.tagName,d.v=null,d.t|=4,e.R=d,d.k=u.k=r,t=r["s-cr"],l=0!=(1&c.t),o=!1,H(u,d),a.t|=1,s){let e,t,n,l,o,s;B(d.k);let i=0;for(;i<z.length;i++)e=z[i],t=e.j,t["s-ol"]||(n=f.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(i=0;i<z.length;i++)if(e=z[i],t=e.j,e.S){for(l=e.S.parentNode,o=e.S.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===t["s-sn"]&&l===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&l!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}o&&V(d.k),a.t&=-2,z.length=0})(e,Z(e,i)),u&&(u.map(e=>e()),c["s-rc"]=void 0);{const t=c["s-p"],n=()=>ee(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},Z=(e,t)=>{try{t=t.render(),e.t&=-17,e.t|=2}catch(n){pe(n)}return t},ee=e=>{const t=e.M,n=e.s,l=e.C;ne(n,"componentDidRender"),64&e.t||(e.t|=64,oe(t),ne(n,"componentDidLoad"),e.D(t),l||te()),e._&&(e._(),e._=void 0),512&e.t&&ke(()=>Q(e,!1)),e.t&=-517},te=()=>{oe(f.documentElement),ke(()=>(e=>{const t=a.ce("appload",{detail:{namespace:"ccdesigns-ui"}});return e.dispatchEvent(t),t})(r))},ne=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){pe(l)}},le=(e,t)=>e&&e.then?e.then(t):t(),oe=e=>e.classList.add("hydrated"),se=(e,t,n)=>{if(t.P){e.watchers&&(t.U=e.watchers);const l=Object.entries(t.P),o=e.prototype;if(l.map(([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,e,{get(){return((e,t)=>fe(this).L.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=fe(e),s=o.L.get(t),i=o.t,r=o.s;if(n=((e,t)=>null==e||k(e)?e:2&t?parseFloat(e):1&t?e+"":e)(n,l.P[t][0]),!(8&i&&void 0!==s||n===s)&&(o.L.set(t,n),r)){if(l.U&&128&i){const e=l.U[t];e&&e.map(e=>{try{r[e](n,s,t)}catch(l){pe(l)}})}2==(18&i)&&Q(o,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0})}),1&n){const t=new Map;o.attributeChangedCallback=function(e,n,l){a.jmp(()=>{const n=t.get(e);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,n])=>{const l=n[1]||e;return t.set(l,e),l})}}return e},ie=(e,t={})=>{const n=[],l=t.exclude||[],o=r.customElements,s=f.head,i=s.querySelector("meta[charset]"),c=f.createElement("style"),u=[];let p,y=!0;Object.assign(a,t),a.l=new URL(t.resourcesUrl||"./",f.baseURI).href,e.map(e=>e[1].map(t=>{const s={t:t[0],u:t[1],P:t[2],T:t[3]};s.P=t[2],s.T=t[3],s.U={};const i=s.u,r=class extends HTMLElement{constructor(e){super(e),ue(e=this,s)}connectedCallback(){p&&(clearTimeout(p),p=null),y?u.push(this):a.jmp(()=>(e=>{if(0==(1&a.t)){const t=fe(e),n=t.O,l=()=>{};if(1&t.t)$(e,t,n.T);else{t.t|=1,12&n.t&&(e=>{const t=e["s-cr"]=f.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){K(t,t.C=n);break}}n.P&&Object.entries(n.P).map(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),ke(()=>(async(e,t,n,l,o)=>{if(0==(32&t.t)){{if(t.t|=32,(o=ye(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.U=o.watchers,se(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(r){pe(r)}t.t&=-9,t.t|=128,e()}if(o.style){let e=o.style;const t=g(n);if(!he.has(t)){const l=()=>{};((e,t,n)=>{let l=he.get(e);d&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,he.set(e,l)})(t,e,!!(1&n.t)),l()}}}const s=t.C,i=()=>Q(t,!0);s&&s["s-rc"]?s["s-rc"].push(i):i()})(0,t,n))}l()}})(this))}disconnectedCallback(){a.jmp(()=>(()=>{if(0==(1&a.t)){const e=fe(this);e.o&&(e.o.map(e=>e()),e.o=void 0)}})())}forceUpdate(){(()=>{{const e=fe(this);e.M.isConnected&&2==(18&e.t)&&Q(e,!1)}})()}componentOnReady(){return fe(this).W}};s.q=e[0],l.includes(i)||o.get(i)||(n.push(i),o.define(i,se(r,s,1)))})),c.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",c.setAttribute("data-styles",""),s.insertBefore(c,i?i.nextSibling:s.firstChild),y=!1,u.length?u.map(e=>e.connectedCallback()):a.jmp(()=>p=setTimeout(te,30))},re=(e,t)=>t in p?p[t]:"window"===t?r:"document"===t?f:"isServer"!==t&&"isPrerender"!==t&&("isClient"===t||("resourcesUrl"===t||"publicPath"===t?(()=>{const e=new URL(".",a.l);return e.origin!==r.location.origin?e.href:e.pathname})():"queue"===t?{write:Se,read:je,tick:{then:e=>ke(e)}}:void 0)),ce=new WeakMap,fe=e=>ce.get(e),ae=(e,t)=>ce.set(t.s=e,t),ue=(e,t)=>{const n={t:0,M:e,O:t,L:new Map};return n.W=new Promise(e=>n.D=e),e["s-p"]=[],e["s-rc"]=[],$(e,n,t.T),ce.set(e,n)},de=(e,t)=>t in e,pe=e=>console.error(e),$e=new Map,ye=e=>{const t=e.u.replace(/-/g,"_"),n=e.q,l=$e.get(n);return l?l[t]:__sc_import_ccdesigns_ui(`./${n}.entry.js`).then(e=>($e.set(n,e),e[t]),pe)},he=new Map,me=[],be=[],we=(e,t)=>n=>{e.push(n),i||(i=!0,t&&4&a.t?ke(ve):a.raf(ve))},ge=e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){pe(t)}e.length=0},ve=()=>{ge(me),ge(be),(i=me.length>0)&&a.raf(ve)},ke=e=>u().then(e),je=we(me,!1),Se=we(be,!0);export{c as C,e as N,u as a,ie as b,re as c,f as d,J as g,M as h,a as p,ae as r,r as w}