(()=>{var A={114:()=>{document.addEventListener("DOMContentLoaded",(()=>{const A=document.getElementById("burgerMenu"),e=document.getElementById("dropdownMenu");A&&e?A.addEventListener("click",(()=>{e.classList.toggle("show")})):console.error("Elements not found"),console.log("Burger Menu:",A),console.log("Dropdown Menu:",e)}))},696:()=>{document.querySelector(".header-nav");let A=0;const e=document.querySelector(".header");window.addEventListener("scroll",(()=>{let t=window.pageYOffset||document.documentElement.scrollTop;t>A?e.classList.add("hidden"):e.classList.remove("hidden"),A=t<=0?0:t}))},391:(A,e,t)=>{const o=[t(680),t(851),t(346),t(69),t(588),t(55),t(510),t(377),t(248),t(58),t(603),t(40),t(241),t(270),t(71),t(796),t(37),t(154),t(987),t(307)];document.addEventListener("DOMContentLoaded",(()=>{const A=document.querySelector(".sponsor-logos");o.forEach((e=>{const t=(A=>{const e=document.createElement("img");return e.src=A,e.classList.add("sponsor-logo"),e.alt="Sponsor Logo",e})(e);A.appendChild(t)}))}))},386:(A,e,t)=>{"use strict";t.d(e,{A:()=>r});var o=t(354),n=t.n(o),i=t(314),s=t.n(i)()(n());s.push([A.id,'.header{background-color:#000;color:#fff;display:flex;position:relative;top:0;width:100%;height:250px;z-index:10;padding:0 20px;transition:top .3s}.header.hidden{top:-250px}.header-content{display:flex;justify-content:space-between;width:100%;align-items:center;padding:20px 0;margin-bottom:100px}.header-left{flex:1}.header-logo{max-width:100px;height:auto}.header-content img{margin-left:70px}.header-right{display:flex;justify-content:flex-end;align-items:center;flex-direction:column;flex:2;gap:20px;margin-left:120px}.social-icons{display:flex;gap:10px;margin-left:20px}.social-icon{font-size:15px;color:#fff;text-decoration:none;transition:color .3s}.search-bar{display:flex;align-items:center;position:relative;margin-left:100px;z-index:1000}.search-input{background-color:rgba(0,0,0,0);border:none;border-bottom:1px solid #fff;color:#fff;padding:5px;width:150px;margin-right:5px;outline:none}.search-input::placeholder{color:#fff}.search-icon{font-size:18px;color:#fff;cursor:pointer;margin-right:10px}.search-results{display:none;position:absolute;background-color:#000;border:1px solid #707070;box-shadow:0 4px 6px rgba(0,0,0,.1);width:100%;z-index:2000;max-height:200px;overflow-y:auto;margin-top:120px;padding:20px}.search-results .dropdown-item{padding:10px;font-size:14px;cursor:pointer;border-bottom:1px solid #707070;z-index:2015}.search-results .dropdown-item:hover{background-color:#f0f0f0}.search-results .no-results{padding:10px;font-size:14px;color:#999;text-align:center}.header-nav ul{list-style:none;display:flex;gap:20px}.header-nav ul li{display:inline}.header-nav a{color:#fff;text-decoration:none;font-size:14px;transition:color .3s}.nav-and-icons{display:flex;margin-top:40px}.burger-menu{display:none;cursor:pointer}.burger-menu span{display:block;width:25px;height:3px;background-color:#fff;margin:5px 0;transition:all .3s ease}.dropdown-menu{display:none;background-color:#000;color:#fff;padding:10px 15px;border-radius:5px;box-shadow:0px 4px 6px rgba(0,0,0,.2);position:absolute;top:60px;right:10px;z-index:2000}.dropdown-menu a{color:#fff;text-decoration:none;margin:10px 0;font-size:16px}.dropdown-menu a:hover{color:#ddd}.dropdown-menu.show{display:block}@media(max-width: 768px){.header-content{flex-direction:column;align-items:flex-start;padding:20px 0}.header-nav{display:none}.header-nav.active{display:block;position:absolute;top:100px;left:0;width:100%;background-color:#000;padding:20px}.header-nav.active ul{flex-direction:column;gap:15px}.header-nav.active ul li a{font-size:18px}.header-right{display:flex;justify-content:flex-end;align-items:center}.header-right .search-bar{display:flex;align-items:center;position:relative;margin-top:-170px}.header-right .search-results{position:absolute;top:50px;left:0;width:100%;background-color:#000;z-index:1000}.header-right .search-results.active{display:block}.burger-menu{display:block}.dropdown-menu{position:absolute;top:50px;right:20px;background-color:#000;padding:15px;border-radius:5px;box-shadow:0 4px 6px rgba(0,0,0,.1);z-index:1000}.dropdown-menu a{display:block;color:#fff;text-decoration:none;font-size:16px;margin-bottom:10px}.dropdown-menu a:hover{color:#ddd}.dropdown-menu.show{display:block}}@media(max-width: 375px){.header-content{display:flex;flex-direction:column;align-items:space-between;padding:20px 0}.header-content .logo-login{width:200px;margin-left:25px;margin-top:20px}.header-nav{display:none}.burger-menu{display:block;margin-left:280px;margin-bottom:40px}.dropdown-menu{position:absolute;top:50px;right:20px;background-color:#000;padding:15px;border-radius:5px;box-shadow:0 4px 6px rgba(0,0,0,.1);z-index:1000}.dropdown-menu a{display:block;color:#fff;text-decoration:none;font-size:16px;margin-bottom:10px}.dropdown-menu a:hover{color:#ddd}.dropdown-menu.show{display:block}}.footer-container{background-color:#fff;padding:0 100px;width:100%}.footer{background-color:#000;color:#fff;padding:40px 20px;margin-bottom:40px}.footer-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}.footer-logo{height:50px;width:auto}.footer-logo-container{flex:0 1 auto}.social-icons{display:flex;gap:15px;margin:20px}.social-icon{color:#fff;font-size:20px;text-decoration:none;transition:color .3s ease}.social-icon:hover{color:#888}.footer-divider{height:1px;background-color:gray;margin:20px 0}.footer-bottom{display:flex;justify-content:space-between;gap:20px}.footer-section{flex:1}.about-section h1,.instagram-section h1,.contact-section h1{font-size:20px;margin-bottom:10px}.about-section{text-align:center;margin:20px}.about-section .vision{color:gray;font-size:14px;margin-bottom:10px}.about-section .description{color:#fff;font-size:14px}.instagram-grid{display:grid;grid-template-columns:repeat(3, 1fr);gap:10px;margin-top:10px}.instagram-image{width:100%;height:auto;cursor:pointer;transition:transform .2s ease}.instagram-image:hover{transform:scale(1.05)}.contact-section{margin:20px}.contact-section .contact-name{font-size:18px;font-weight:bold;margin-bottom:10px}.contact-section .contact-details{font-size:14px;color:gray;line-height:1.6;white-space:pre-line}@media(max-width: 375px){.footer-container{padding:0 20px}.footer-top{flex-direction:column;align-items:flex-start;text-align:center}.footer-logo{height:40px}.social-icons{margin-top:15px;justify-content:center;gap:10px}.footer-bottom{flex-direction:column;align-items:center;gap:30px}.footer-section{width:100%;text-align:center}.footer .instagram-grid{display:grid;grid-template-columns:repeat(3, 1fr);gap:10px;margin-top:10px}.footer .instagram-grid .instagram-image{width:100%;height:auto;cursor:pointer;transition:transform .2s ease}.footer .instagram-grid .instagram-image:hover{transform:scale(1.05)}.about-section h1,.instagram-section h1,.contact-section h1{font-size:18px}.about-section .vision{font-size:13px}.about-section .description{font-size:13px}}@media(min-width: 1200px){.footer-container{padding:0 100px}.footer-top{flex-direction:row;justify-content:space-between;align-items:center}.footer-bottom{flex-direction:row;justify-content:space-between;gap:20px}.footer-section{flex:1}.instagram-grid{grid-template-columns:repeat(3, 1fr)}.about-section h1,.instagram-section h1,.contact-section h1{font-size:20px}.about-section .vision{font-size:14px}.about-section .description{font-size:14px}}.popup{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.7);display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:1000;overflow:auto;padding:20px}.popup .close-btn{position:absolute;top:0;right:230px;font-size:30px;color:#fff;cursor:pointer;background-color:#000;padding:5px;z-index:1100}.popup .popup-image{width:800px;height:200px;object-fit:cover}.popup .popup-content{background-color:#fff;padding:50px;max-width:800px;max-height:80vh;overflow-y:auto;box-shadow:0 4px 8px rgba(0,0,0,.2);position:relative;z-index:100}.popup .popup-content h1{font-size:2rem;margin:0 0 10px;color:#333}.popup .popup-content .published{color:gray;font-size:.9rem;margin:0 0 15px}.popup .popup-content .article-content{font-size:1rem;color:#333;line-height:1.6;margin-bottom:20px}.no-results{font-size:10px;color:red;text-align:center;margin-top:20px;display:none}@media(max-width: 768px){.popup-content{padding:15px;max-width:95%}.popup-image{max-width:100%;height:auto}.popup-content h1{font-size:1.6rem}.popup-content .article-content{font-size:.9rem}.close-btn{top:10px;right:10px}}@media(max-width: 375px){.popup-content{padding:10px;max-width:90%}.popup-image{max-width:100%;height:auto}.popup-content h1{font-size:1.4rem}.popup-content .article-content{font-size:.8rem}.close-btn{top:5px;right:5px}}*{margin:0;padding:0;box-sizing:border-box}body{font-family:"Times New Roman",Times,serif,inherit}.hero{position:relative;width:100%;height:500px;z-index:20}.hero .hero-img{width:100%;height:100%;object-fit:cover;position:absolute;top:0;left:0;z-index:5;margin-top:-50px;padding-right:100px;padding-left:100px;transition:opacity .5s ease-in-out;z-index:20}.hero .hero-text-box{position:absolute;bottom:30px;left:50%;transform:translateX(-50%);background-color:#000;color:#fff;padding:50px 100px;text-align:center;font-size:18px;font-weight:400;z-index:20;margin-bottom:-100px}.hero button{position:absolute;top:450px;color:#ddd;background:none;border:none;font-size:24px;cursor:pointer;padding:10px 15px;z-index:20;transition:background-color .3s ease}.hero button:hover{background-color:rgba(0,0,0,.3)}.hero button.left-arrow{right:110px}.hero button.right-arrow{right:80px}.main-section{display:grid;grid-template-columns:2fr 1fr;gap:20px;padding:20px;margin-top:100px}.main-section .left-section{display:flex;flex-direction:column;gap:20px}.main-section .box{display:flex;align-items:center;padding:20px;border-radius:8px}.main-section .box img{width:200px;height:auto;margin-right:20px}.main-section .box .content{flex:1;margin:10px}.main-section .box .content h1{font-size:20px;color:#333;padding:10px}.main-section .box .content .published{color:#666;font-size:14px;padding:10px}.main-section .box .content p{color:#555;font-size:16px;padding:10px}.main-section .box .content button{background-color:#fff;color:#000;border:1px solid #000;padding:10px;cursor:pointer;font-size:16px;margin:10px}.main-section .box .content button:hover{background-color:#000;color:#fff;border:1px solid #fff}.main-section .right-section{display:flex;flex-direction:column;gap:20px}.main-section .right-section .shop,.main-section .right-section .next-event,.main-section .right-section .scoreboard{padding:15px;border-radius:8px}.main-section .right-section .shop h1,.main-section .right-section .next-event h1,.main-section .right-section .scoreboard h1{font-size:20px;margin-bottom:10px}.main-section .right-section .shop p,.main-section .right-section .next-event p,.main-section .right-section .scoreboard p{margin:10px 0}.main-section .right-section .shop button,.main-section .right-section .next-event button,.main-section .right-section .scoreboard button{background-color:#fff;color:#000;border:1px solid #000;padding:10px;cursor:pointer;font-size:16px;margin:10px}.main-section .right-section .shop button:hover,.main-section .right-section .next-event button:hover,.main-section .right-section .scoreboard button:hover{background-color:#000;color:#fff;border:1px solid #fff}.main-section .right-section .shop hr,.main-section .right-section .next-event hr,.main-section .right-section .scoreboard hr{border:0;border-top:1px solid #ddd;margin:20px 0}.main-section .right-section .shop ul,.main-section .right-section .next-event ul,.main-section .right-section .scoreboard ul{list-style-type:none;padding:0}.main-section .right-section .shop ul li,.main-section .right-section .next-event ul li,.main-section .right-section .scoreboard ul li{margin:5px 0}.pagination{display:flex;justify-content:space-between;align-items:center;padding:20px 0;border-top:1px solid #ddd}.pagination button{background-color:#fff;color:#000;border:1px solid #000;padding:10px;cursor:pointer;font-size:16px;margin:10px}.pagination button:hover{background-color:#000;color:#fff;border:1px solid #fff}.pagination .page-info{color:#ddd;font-size:14px}.sponsors-section{padding:40px 100px;text-align:center;margin-right:50px;margin-left:50px}.sponsors-section .grey-line{border:0;border-top:1px solid #ddd;margin:20px 0}.sponsors-section h1{font-size:24px;margin-bottom:20px;color:#000}.sponsors-section .sponsor-logos{display:grid;grid-template-columns:repeat(5, 1fr);gap:20px;justify-items:center;margin-top:20px}.sponsors-section .sponsor-logos .sponsor-logo{max-width:50px;height:auto;object-fit:contain}@media(max-width: 768px){.hero{height:400px}.hero .hero-img{top:-60px;padding-right:50px;padding-left:50px}.hero .hero-text-box{padding:30px 50px;font-size:16px;bottom:120px;z-index:100}.main-section{display:grid;grid-template-columns:1fr;gap:30px}.main-section .left-section{gap:15px}.main-section .box{flex-direction:column;padding:15px}.main-section .box img{width:150px;margin-bottom:15px}.main-section .box .content{margin:5px}.main-section .box button{margin:5px 0}.main-section .right-section{gap:15px}.pagination{flex-direction:column;align-items:center;gap:10px}.sponsors-section{padding:40px 20px;margin-right:20px;margin-left:20px}.sponsors-section .sponsor-logos{grid-template-columns:repeat(3, 1fr)}}@media(max-width: 375px){.hero{height:300px}.hero .hero-img{width:375px;padding:0;position:relative}.hero .hero-text-box{padding:20px 30px;font-size:14px}.main-section{display:grid;grid-template-columns:1fr;margin-top:10px}.main-section .left-section{gap:10px}.main-section .box{flex-direction:column;padding:10px}.main-section .box img{width:120px;margin-bottom:10px}.main-section .box .content{margin:5px}.main-section .box button{margin:5px 0}.main-section .right-section{gap:10px}.slider-arrow{flex-direction:column;align-items:center}.left-arrow{margin-top:-450px;margin-right:200px}.right-arrow{margin-top:-200px;margin-right:-20px}}.sponsors-section{padding:40px 10px;margin-right:10px;margin-left:10px}',"",{version:3,sources:["webpack://./src/scss/header.scss","webpack://./src/scss/footer.scss","webpack://./src/scss/pop-up.scss","webpack://./src/scss/main.scss"],names:[],mappings:"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",sourceRoot:""}]);const r=s},314:A=>{"use strict";A.exports=function(A){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=A(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(A,t,o,n,i){"string"==typeof A&&(A=[[null,A,void 0]]);var s={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(s[a]=!0)}for(var C=0;C<A.length;C++){var c=[].concat(A[C]);o&&s[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),n&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=n):c[4]="".concat(n)),e.push(c))}},e}},354:A=>{"use strict";A.exports=function(A){var e=A[1],t=A[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),i="/*# ".concat(n," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},72:A=>{"use strict";var e=[];function t(A){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===A){t=o;break}return t}function o(A,o){for(var i={},s=[],r=0;r<A.length;r++){var a=A[r],C=o.base?a[0]+o.base:a[0],c=i[C]||0,p="".concat(C," ").concat(c);i[C]=c+1;var d=t(p),l={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==d)e[d].references++,e[d].updater(l);else{var u=n(l,o);o.byIndex=r,e.splice(r,0,{identifier:p,updater:u,references:1})}s.push(p)}return s}function n(A,e){var t=e.domAPI(e);return t.update(A),function(e){if(e){if(e.css===A.css&&e.media===A.media&&e.sourceMap===A.sourceMap&&e.supports===A.supports&&e.layer===A.layer)return;t.update(A=e)}else t.remove()}}A.exports=function(A,n){var i=o(A=A||[],n=n||{});return function(A){A=A||[];for(var s=0;s<i.length;s++){var r=t(i[s]);e[r].references--}for(var a=o(A,n),C=0;C<i.length;C++){var c=t(i[C]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}i=a}}},659:A=>{"use strict";var e={};A.exports=function(A,t){var o=function(A){if(void 0===e[A]){var t=document.querySelector(A);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(A){t=null}e[A]=t}return e[A]}(A);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:A=>{"use strict";A.exports=function(A){var e=document.createElement("style");return A.setAttributes(e,A.attributes),A.insert(e,A.options),e}},56:(A,e,t)=>{"use strict";A.exports=function(A){var e=t.nc;e&&A.setAttribute("nonce",e)}},825:A=>{"use strict";A.exports=function(A){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=A.insertStyleElement(A);return{update:function(t){!function(A,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var n=void 0!==t.layer;n&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,n&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,A,e.options)}(e,A,t)},remove:function(){!function(A){if(null===A.parentNode)return!1;A.parentNode.removeChild(A)}(e)}}}},113:A=>{"use strict";A.exports=function(A,e){if(e.styleSheet)e.styleSheet.cssText=A;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(A))}}},730:(A,e,t)=>{"use strict";A.exports=t.p+"assets/images/coffe.png"},252:(A,e,t)=>{"use strict";A.exports=t.p+"assets/images/heroimg.png"},966:(A,e,t)=>{"use strict";A.exports=t.p+"assets/images/instagram-image-1.png"},973:(A,e,t)=>{"use strict";A.exports=t.p+"assets/images/instagram-image-2.png"},84:(A,e,t)=>{"use strict";A.exports=t.p+"assets/images/instagram-image-3.png"},955:(A,e,t)=>{"use strict";A.exports=t.p+"assets/images/instagram-image-4.png"},98:(A,e,t)=>{"use strict";A.exports=t.p+"assets/images/instagram-image-5.png"},681:(A,e,t)=>{"use strict";A.exports=t.p+"assets/images/instagram-image-6.png"},200:(A,e,t)=>{"use strict";A.exports=t.p+"assets/images/instagram-image-7.png"},503:(A,e,t)=>{"use strict";A.exports=t.p+"assets/images/instagram-image-8.png"},486:(A,e,t)=>{"use strict";A.exports=t.p+"assets/images/instagram-image-9.png"},680:(A,e,t)=>{"use strict";A.exports=t.p+"assets/images/sponsor-1.png"},58:(A,e,t)=>{"use strict";A.exports=t.p+"assets/images/sponsor-10.png"},603:(A,e,t)=>{"use strict";A.exports=t.p+"assets/images/sponsor-11.png"},40:(A,e,t)=>{"use strict";A.exports=t.p+"assets/images/sponsor-12.png"},241:(A,e,t)=>{"use strict";A.exports=t.p+"assets/images/sponsor-13.png"},270:(A,e,t)=>{"use strict";A.exports=t.p+"assets/images/sponsor-14.png"},71:(A,e,t)=>{"use strict";A.exports=t.p+"assets/images/sponsor-15.png"},796:(A,e,t)=>{"use strict";A.exports=t.p+"assets/images/sponsor-16.png"},37:(A,e,t)=>{"use strict";A.exports=t.p+"assets/images/sponsor-17.png"},154:(A,e,t)=>{"use strict";A.exports=t.p+"assets/images/sponsor-18.png"},987:(A,e,t)=>{"use strict";A.exports=t.p+"assets/images/sponsor-19.png"},851:(A,e,t)=>{"use strict";A.exports=t.p+"assets/images/sponsor-2.png"},307:(A,e,t)=>{"use strict";A.exports=t.p+"assets/images/sponsor-20.png"},346:(A,e,t)=>{"use strict";A.exports=t.p+"assets/images/sponsor-3.png"},69:(A,e,t)=>{"use strict";A.exports=t.p+"assets/images/sponsor-4.png"},588:(A,e,t)=>{"use strict";A.exports=t.p+"assets/images/sponsor-5.png"},55:(A,e,t)=>{"use strict";A.exports=t.p+"assets/images/sponsor-6.png"},510:(A,e,t)=>{"use strict";A.exports=t.p+"assets/images/sponsor-7.png"},377:(A,e,t)=>{"use strict";A.exports=t.p+"assets/images/sponsor-8.png"},248:(A,e,t)=>{"use strict";A.exports=t.p+"assets/images/sponsor-9.png"},143:(A,e,t)=>{"use strict";A.exports=t.p+"assets/images/pour.png"}},e={};function t(o){var n=e[o];if(void 0!==n)return n.exports;var i=e[o]={id:o,exports:{}};return A[o](i,i.exports,t),i.exports}t.n=A=>{var e=A&&A.__esModule?()=>A.default:()=>A;return t.d(e,{a:e}),e},t.d=(A,e)=>{for(var o in e)t.o(e,o)&&!t.o(A,o)&&Object.defineProperty(A,o,{enumerable:!0,get:e[o]})},t.o=(A,e)=>Object.prototype.hasOwnProperty.call(A,e),t.p="/Coffeeshop/",t.nc=void 0,(()=>{"use strict";var A=t(72),e=t.n(A),o=t(825),n=t.n(o),i=t(659),s=t.n(i),r=t(56),a=t.n(r),C=t(540),c=t.n(C),p=t(113),d=t.n(p),l=t(386),u={};u.styleTagTransform=d(),u.setAttributes=a(),u.insert=s().bind(null,"head"),u.domAPI=n(),u.insertStyleElement=c(),e()(l.A,u),l.A&&l.A.locals&&l.A.locals;const g=t.p+"assets/images/logo-white.png";t(252),t(730),t(143),t(696),t(391),document.addEventListener("DOMContentLoaded",(()=>{const A=document.querySelector(".footer-logo-container"),e=document.createElement("img");e.src=g,e.classList.add("footer-logo"),e.alt="World Barista Cup Logo",A.appendChild(e)}));const m=[t(966),t(973),t(84),t(955),t(98),t(681),t(200),t(503),t(486)];document.addEventListener("DOMContentLoaded",(()=>{const A=document.querySelector(".instagram-grid");m.forEach((e=>{const t=(A=>{const e=document.createElement("img");return e.src=A,e.alt="Instagram Feed Image",e.classList.add("instagram-image"),e})(e);A.appendChild(t)}))}));const x=document.querySelector(".left-section"),f=document.querySelector(".previous"),h=document.querySelector(".next"),B=document.querySelector(".page-info");let E=1,b=0,v=[];const y=A=>`/assets/posts/${A}`,w=()=>{x.scrollIntoView({behavior:"smooth",block:"start"})},k=A=>{x.innerHTML="";const e=4*(A-1),t=4*A;v.slice(e,t).forEach((A=>{const e=y(A.image),t=((A,e,t,o)=>{const n=document.createElement("div");n.classList.add("box");const i=document.createElement("div"),s=document.createElement("img");s.src=A,s.alt="Post Thumbnail",i.appendChild(s);const r=document.createElement("div");r.classList.add("content");const a=document.createElement("h1");a.textContent=e;const C=document.createElement("p");C.classList.add("published"),C.textContent=`Published: ${t}`;const c=document.createElement("p");c.textContent=o;const p=document.createElement("button");return p.textContent="Read More",r.appendChild(a),r.appendChild(C),r.appendChild(c),r.appendChild(p),n.appendChild(i),n.appendChild(r),n})(e,A.title,A.published,A.content);x.appendChild(t),t.querySelector("button").addEventListener("click",(()=>{const t=F(e,A.title,A.published,A.content);document.body.appendChild(t),t.style.display="flex"}))})),B.textContent=`Page ${A} of ${b}`};f.addEventListener("click",(()=>{E>1&&(E--,k(E),w())})),h.addEventListener("click",(()=>{E<b&&(E++,k(E),w())})),(async()=>{try{const A=await fetch("./articles.json");if(!A.ok)throw new Error("Failed to fetch posts");const e=await A.json();v=e,b=Math.ceil(v.length/4),k(E)}catch(A){console.error("Error fetching posts:",A)}})();const F=(A,e,t)=>{const o=document.createElement("div");o.classList.add("popup"),o.style.display="none";const n=document.createElement("div");n.classList.add("popup-overlay"),n.addEventListener("click",(()=>{q(o)}));const i=document.createElement("div");i.classList.add("close-btn"),i.textContent="×",i.addEventListener("click",(()=>{q(o)}));const s=document.createElement("img");s.src=A,s.alt="Post Thumbnail",s.classList.add("popup-image");const r=document.createElement("div");r.classList.add("popup-content");const a=document.createElement("h1");a.textContent=e;const C=document.createElement("p");C.classList.add("published"),C.textContent=`Published: ${t}`;const c=document.createElement("p");return c.classList.add("article-content"),c.innerHTML="\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum \n    vehicula, lacus a malesuada ultrices, ligula erat tincidunt erat, id \n    vulputate sapien enim a felis. Curabitur ac libero auctor, posuere elit \n    nec, dictum eros. Praesent nec ultricies nulla. Fusce in nisl id nunc \n    rhoncus tempus nec a lorem. Mauris vitae neque at ligula volutpat \n    consectetur.\n    <br/><br/>\n    Pellentesque in massa nec lacus fermentum tincidunt. Quisque non ornare \n    orci, et sagittis magna. Suspendisse nec nulla id neque porttitor \n    volutpat. Vivamus tincidunt, sapien ut tristique porttitor, felis \n    sapien ultricies ligula, id vestibulum purus neque vitae sapien. Ut id \n    turpis convallis, sollicitudin augue sed, dictum risus.\n    <br/><br/>\n    Curabitur tempus, felis quis iaculis sollicitudin, lorem justo malesuada \n    sapien, sit amet ornare turpis ligula in turpis. Donec id risus vitae \n    justo consequat laoreet. Praesent in nisi at ligula suscipit feugiat. \n    Aliquam scelerisque lorem a magna malesuada mollis.\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum \n    vehicula, lacus a malesuada ultrices, ligula erat tincidunt erat, id \n    vulputate sapien enim a felis. Curabitur ac libero auctor, posuere elit \n    nec, dictum eros. Praesent nec ultricies nulla. Fusce in nisl id nunc \n    rhoncus tempus nec a lorem. Mauris vitae neque at ligula volutpat \n    consectetur.\n    <br/><br/>\n    Pellentesque in massa nec lacus fermentum tincidunt. Quisque non ornare \n    orci, et sagittis magna. Suspendisse nec nulla id neque porttitor \n    volutpat. Vivamus tincidunt, sapien ut tristique porttitor, felis \n    sapien ultricies ligula, id vestibulum purus neque vitae sapien. Ut id \n    turpis convallis, sollicitudin augue sed, dictum risus.\n    <br/><br/>\n    Curabitur tempus, felis quis iaculis sollicitudin, lorem justo malesuada \n    sapien, sit amet ornare turpis ligula in turpis. Donec id risus vitae \n    justo consequat laoreet. Praesent in nisi at ligula suscipit feugiat. \n    Aliquam scelerisque lorem a magna malesuada mollis.\n  ",r.appendChild(a),r.appendChild(C),r.appendChild(c),o.appendChild(n),o.appendChild(i),o.appendChild(s),o.appendChild(r),o},q=A=>{document.body.removeChild(A),document.body.style.overflow=""},Y=document.querySelector(".search-input"),G=document.querySelector(".search-icon"),U=document.querySelector(".search-results"),z=document.querySelector(".search-bar"),L=A=>{U.innerHTML="";const e=v.filter((e=>e.title.toLowerCase().includes(A.toLowerCase())));if(e.length>0)e.forEach((A=>{const e=document.createElement("div");e.classList.add("dropdown-item"),e.textContent=A.title,e.addEventListener("click",(()=>{const e=y(A.image),t=F(e,A.title,A.published,A.content);document.body.appendChild(t),t.style.display="flex",U.style.display="none",Y.value=""})),U.appendChild(e)})),U.style.display="block";else{const A=document.createElement("div");A.classList.add("no-results"),A.textContent="No results found",U.appendChild(A),U.style.display="block"}};Y.addEventListener("input",(()=>{const A=Y.value.trim();A?L(A):U.style.display="none"})),G.addEventListener("click",(()=>{const A=Y.value.trim();A&&L(A)})),document.addEventListener("click",(A=>{z.contains(A.target)||(U.style.display="none")})),t(114);const I=document.querySelector(".header-left");document.addEventListener("DOMContentLoaded",(()=>{const A=document.createElement("img");A.src=g,A.classList.add("logo-login"),A.alt="Newsify Logo",I.prepend(A)}));const M=document.querySelector(".hero"),Q=[{image:t(252),text:"To create an environment in which knowledge about coffee and its sphere can be obtained."},{image:t(730),text:"This is a great introduction to the coffee industry's best beans on the planet."},{image:t(143),text:"Coffee in code out, this is the way of eternal life and empowerment of the soul."}];let S=0;const W=document.createElement("img");W.src=Q[S].image,W.alt="Hero Image",W.classList.add("hero-img"),M.appendChild(W);const J=document.createElement("div");J.classList.add("hero-text-box"),J.textContent=Q[S].text,M.appendChild(J);const j=document.createElement("button");j.classList.add("slider-arrow","left-arrow"),j.textContent="<",M.appendChild(j);const P=document.createElement("button");function T(A){S=(A+Q.length)%Q.length,W.src=Q[S].image,J.textContent=Q[S].text}P.classList.add("slider-arrow","right-arrow"),P.textContent=">",M.appendChild(P),j.addEventListener("click",(()=>T(S-1))),P.addEventListener("click",(()=>T(S+1)))})()})();
//# sourceMappingURL=index.bundle.js.map