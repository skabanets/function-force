!function(){function t(t,n,e,s){Object.defineProperty(t,n,{get:e,set:s,enumerable:!0,configurable:!0})}function n(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},c={},i=e.parcelRequire6ab9;null==i&&((i=function(t){if(t in s)return s[t].exports;if(t in c){var n=c[t];delete c[t];var e={id:t,exports:{}};return s[t]=e,n.call(e.exports,e,e.exports),e.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,n){c[t]=n},e.parcelRequire6ab9=i),i.register("iE7OH",(function(n,e){var s,c;t(n.exports,"register",(function(){return s}),(function(t){return s=t})),t(n.exports,"resolve",(function(){return c}),(function(t){return c=t}));var i={};s=function(t){for(var n=Object.keys(t),e=0;e<n.length;e++)i[n[e]]=t[n[e]]},c=function(t){var n=i[t];if(null==n)throw new Error("Could not resolve bundle with id "+t);return n}})),i.register("aNJCr",(function(n,e){var s;t(n.exports,"getBundleURL",(function(){return s}),(function(t){return s=t}));var c={};function i(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}s=function(t){var n=c[t];return n||(n=function(){try{throw new Error}catch(n){var t=(""+n.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return i(t[2])}return"/"}(),c[t]=n),n}})),i("iE7OH").register(JSON.parse('{"9p9yL":"index.24398d95.js","ee16w":"sprite.901ad050.svg","de1dt":"index.fdc0e086.js"}'));var o,a=i("bpxeT"),r=i("2TvXO"),l=i("b7ONl"),d=i("jzQFI"),u=i("8nrFW"),p=(d=i("jzQFI"),function(t,e,s,c,i){if(t.classList.contains(e)){var o={id:t.closest(s).dataset.id,amount:1},a=(0,d.getItem)("bucket");(0,d.setItem)("bucket",n(u)(a).concat([o]));var r=t.closest(c),l=t.closest(i).lastElementChild;r.classList.toggle("hidden"),l.classList.toggle("hidden")}});o=i("aNJCr").getBundleURL("9p9yL")+i("iE7OH").resolve("ee16w");var g,f=document.querySelector(".js-cart-list"),v=(g=n(a)(n(r).mark((function t(){var e,s,c,i,a=arguments;return n(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,t.prev=1,f.innerHTML='<li class="list-loader"><span class="loader"></span></li>',t.next=5,(0,l.getProducts)({page:e,sort:{field:"byABC",value:!0},limit:m()});case 5:s=t.sent.results,c=(0,d.getItem)("bucket"),i=s.map((function(t){return'\n  <li class="cart" data-id="'.concat(t._id,'">\n  <div class="cart-container">\n  <div class="cart-img-container">\n    <img src="').concat(t.img,'" alt="" class="cart-img">\n    ').concat(t.is10PercentOff?'<svg class="discount-svg" width="60" height="60">\n              <use\n                href="'.concat(n(o),'#icon-discount"\n              ></use>\n            </svg>'):"",'\n  </div>\n    <p class="cart-name">').concat(t.name,'</p>\n    <ul class="info">\n      <li class="info-item">Category: <span class="info-text">').concat(t.category,'</span></li>\n      <li class="info-item">Size: <span class="info-text">').concat(t.size,'</span></li>\n      <li class="info-item">Popularity: <span class="info-text">').concat(t.popularity,'</span></li>\n    </ul>\n    <div class="buy-info">\n      <p class="buy-price">$').concat(t.price,"</p>\n    \n      ").concat(c.some((function(n){return n.id===t._id}))?'<button class="check" type="button" disabled>\n            <svg class="buy-svg" width="18" height="18">\n              <use\n                class="check-svg"\n                href="'.concat(n(o),'#icon-check"\n              ></use>\n            </svg>\n          </button>'):'<button class="buy buy-btn" type="button">\n            <svg class="buy-svg buy-btn" width="18" height="18">\n              <use\n                class="buy-btn"\n                href="'.concat(n(o),'#icon-shopping-cart"\n              ></use>\n            </svg>\n          </button>'),'\n      <button class="check hidden" type="button">\n            <svg class="buy-svg " width="18" height="18">\n              <use\n                class="buy-btn"\n                href="').concat(n(o),'#icon-check"\n              ></use>\n            </svg>\n          </button>\n    </div>\n    </div>\n  </li>\n      ')})),f.innerHTML="",f.insertAdjacentHTML("beforeend",i.join("")),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])}))),function(){return g.apply(this,arguments)});function m(){var t=window.innerWidth;return t>=768&&t<1440?8:t>=1440?9:6}v(),f.addEventListener("click",(function(t){return p(t.target,"buy-btn",".cart",".buy",".buy-info")}));var h=document.querySelectorAll(".dropdown-filter");h.forEach((function(t){t.addEventListener("click",(function(t){t.target.closest(".dropdown-filter").childNodes[5].classList.toggle("menu-open")}))})),document.addEventListener("click",(function(t){h.forEach((function(n){var e=n.closest(".dropdown-filter"),s=e.childNodes[5];e.contains(t.target)||s.contains(t.target)||s.classList.remove("menu-open")}))}));a=i("bpxeT"),r=i("2TvXO"),l=i("b7ONl");function b(t){return' <h2 class="modal-title">'.concat(t.name,'</h2>\n        <div class="modal-box-info">\n          <p class="classification">\n            Category:<span class="modal-info">').concat(t.category,'</span>\n          </p>\n          <p class="classification">\n            Size:<span class="modal-info">').concat(t.size,'</span>\n          </p>\n          <p class="classification">\n            Popularity:<span class="modal-info">').concat(t.popularity,'</span>\n          </p>\n        </div>\n\n        <p class="modal-description">\n        ').concat(t.desc,"\n        </p>\n    ")}var y={openModal:document.querySelector(".js-cart-list"),closeModalBtn:document.querySelector(".popup-modal-close"),modal:document.querySelector(".modal-backdrops"),modalPattern:document.querySelector(".modal-window"),modalContainer:document.querySelector(".modal-main-content-box"),modalPrice:document.querySelector(".modal-price"),modalPicture:document.querySelector(".modal-pic"),modalContent:document.querySelector(".modal-main-content")};function L(t){return w.apply(this,arguments)}function w(){return(w=n(a)(n(r).mark((function t(e){var s,c,i;return n(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e||!e.target.classList.contains("buy-svg")){t.next=2;break}return t.abrupt("return");case 2:if(y.modal.classList.toggle("is-hidden"),y.modal.classList.contains("is-hidden")){t.next=20;break}return t.prev=4,s=e.target.closest("li").dataset.id,t.next=8,(0,l.getProductById)(s);case 8:c=t.sent,i=b(c),y.modalPicture.setAttribute("src",c.img),y.modalContent.innerHTML=i,y.modalPrice.innerHTML="$".concat(c.price),window.addEventListener("keydown",x),t.next=18;break;case 16:t.prev=16,t.t0=t.catch(4);case 18:t.next=21;break;case 20:y.modalPicture.setAttribute("src",""),y.modalContent.innerHTML="",y.modalPrice.innerHTML="",window.removeEventListener("keydown",x);case 21:case"end":return t.stop()}}),t,null,[[4,16]])})))).apply(this,arguments)}function x(t){"Escape"===t.code&&L()}console.log(y.closeModalBtn),y.openModal.addEventListener("click",L),y.closeModalBtn.addEventListener("click",L),y.modal.addEventListener("click",(function(t){t.target===y.modal&&L()}));a=i("bpxeT"),r=i("2TvXO"),l=i("b7ONl");var k=document.querySelector(".js-discount-list");function E(){return(E=n(a)(n(r).mark((function t(){var e,s;return n(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,l.getDiscountedProducts)();case 3:e=t.sent,console.log(e),s=e.slice(0,2).map((function(t){return'\n          <li class="discount-item">\n            <svg class="discount-icon" width="60" height="60">\n              <use href="'.concat(n(o),'#icon-discount"></use>\n            </svg>\n            <div class="discount-container-img">\n              <img\n                src="').concat(t.img,'"\n                alt="').concat(t.name,'-img"\n                class="discount-img"\n              />\n            </div>\n            <div class="discount-order">\n              <h3 class="discount-name">').concat(t.name,'</h3>\n              <p class="discount-price">&#36;').concat(t.price,'</p>\n              <button type="button" class="discount-button">\n                <svg class="discount-shopping-icon" width="18" height="18">\n                  <use href="').concat(n(o),'#icon-shopping-cart"></use>\n                </svg>\n              </button>\n            </div>\n          </li>\n        ')})).join(""),k.insertAdjacentHTML("beforeend",s),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error("Error rendering discount items:",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}!function(){E.apply(this,arguments)}();a=i("bpxeT"),r=i("2TvXO"),l=i("b7ONl");var N=function(){return window.innerWidth<376},S=function(){var t=n(a)(n(r).mark((function t(){var e,s,c,i,o,a,d,u,p,g,f,h,b,y;return n(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y=function(){c.childNodes[1].classList.toggle("dis",1==e),c.childNodes[3].classList.toggle("dis",1==e),i.childNodes[1].classList.toggle("dis",e==o),i.childNodes[3].classList.toggle("dis",e==o),s.childNodes[0].classList.toggle("dis",1==e),N()?s.childNodes[2].classList.toggle("dis",e==o):s.childNodes[4].classList.toggle("dis",e==o)},e=1,s=document.querySelector(".pg-list"),c=document.querySelector(".left-btns"),i=document.querySelector(".right-btns"),t.next=7,(0,l.getProducts)({sort:{field:"byABC",value:!0},limit:m()});case 7:for(o=t.sent.totalPages,a=[],d=0;d<o;d++)u=1===e&&0===d||e===o&&d===o-1,p="pg-item ".concat(e===d+1?"pg-active":""," ").concat(u?"dis":""),a.push('<li class="'.concat(p,'" data-pg="').concat(d+1,'">').concat(d+1,"</li>"));N()?('<li class="pg-item dotDis">...</li>',a.splice(1,o-2,'<li class="pg-item dotDis">...</li>'),console.log(a)):('<li class="pg-item dotDis">...</li>',a.splice(2,o-4,'<li class="pg-item dotDis">...</li>')),s.insertAdjacentHTML("beforeend",a.join("")),y(),g=function(t){t.classList.contains("pg-list")||(document.querySelector(".pg-active").classList.remove("pg-active"),e=t.closest(".pg-item").dataset.pg,t.classList.add("pg-active"),y(),v(e))},f=function(t){1==e||t.classList.contains("left-btns")||(t.closest(".pg-arrow").classList.contains("js-btn-1")?e--:e=1,v(e),y(),b())},h=function(t){e==o||t.classList.contains("right-btns")||(t.closest(".pg-arrow").classList.contains("js-btn-1")?e++:e=o,v(e),y(),b())},b=function(){document.querySelector(".pg-active").classList.remove("pg-active"),N()?e>1&&e<o-1?s.childNodes[1].classList.toggle("pg-active"):s.childNodes[e<2?e-1:e+2-o].classList.add("pg-active"):e>2&&e<o-2?s.childNodes[2].classList.toggle("pg-active"):s.childNodes[e<3?e-1:e+4-o].classList.add("pg-active")},s.addEventListener("click",(function(t){return g(t.target)})),c.addEventListener("click",(function(t){return f(t.target)})),i.addEventListener("click",(function(t){return h(t.target)}));case 21:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();S()}();
//# sourceMappingURL=index.24398d95.js.map
