!function(){function t(t,n,e,c){Object.defineProperty(t,n,{get:e,set:c,enumerable:!0,configurable:!0})}function n(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},c={},s={},o=e.parcelRequire6ab9;null==o&&((o=function(t){if(t in c)return c[t].exports;if(t in s){var n=s[t];delete s[t];var e={id:t,exports:{}};return c[t]=e,n.call(e.exports,e,e.exports),e.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,n){s[t]=n},e.parcelRequire6ab9=o),o.register("iE7OH",(function(n,e){var c,s;t(n.exports,"register",(function(){return c}),(function(t){return c=t})),t(n.exports,"resolve",(function(){return s}),(function(t){return s=t}));var o={};c=function(t){for(var n=Object.keys(t),e=0;e<n.length;e++)o[n[e]]=t[n[e]]},s=function(t){var n=o[t];if(null==n)throw new Error("Could not resolve bundle with id "+t);return n}})),o.register("aNJCr",(function(n,e){var c;t(n.exports,"getBundleURL",(function(){return c}),(function(t){return c=t}));var s={};function o(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}c=function(t){var n=s[t];return n||(n=function(){try{throw new Error}catch(n){var t=(""+n.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return o(t[2])}return"/"}(),s[t]=n),n}})),o("iE7OH").register(JSON.parse('{"9p9yL":"index.a49fee70.js","ee16w":"sprite.c60bbd42.svg","de1dt":"index.7d52652b.js"}')),o("9TWV9");var a=document.querySelectorAll(".dropdown-filter");a.forEach((function(t){t.addEventListener("click",(function(t){t.target.closest(".dropdown-filter").childNodes[5].classList.toggle("menu-open")}))})),document.addEventListener("click",(function(t){a.forEach((function(n){var e=n.closest(".dropdown-filter"),c=e.childNodes[5];e.contains(t.target)||c.contains(t.target)||c.classList.remove("menu-open")}))}));var i=o("bpxeT"),r=o("2TvXO"),l=o("b7ONl"),d=document.querySelector(".menu-categories-js"),u=(document.querySelector(".categories-js"),function(t){return t.map((function(t){return"<li class='menu-filter-item' data-value='".concat(t,"'>").concat(t,"</li>")})).join("")});function p(){return(p=n(i)(n(r).mark((function t(){var e,c;return n(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="",t.prev=1,d.innerHTML="",t.next=5,(0,l.getProductsCategories)();case 5:c=t.sent,e=u(c),e+='<li class="show-all-categories">Show all</li>',t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),e="<li>Error! Try again</li>";case 13:d.innerHTML=e;case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))).apply(this,arguments)}!function(){p.apply(this,arguments)}();i=o("bpxeT"),r=o("2TvXO"),l=o("b7ONl");var g,v=o("jzQFI"),f=o("8nrFW"),b=(v=o("jzQFI"),o("9TWV9")),h=function(t,e,c,s,o){if(t.classList.contains(e)){var a={id:t.closest(c).dataset.id,amount:1,price:t.closest(c).dataset.price},i=(0,v.getItem)("bucket");(0,v.setItem)("bucket",n(f)(i).concat([a]));var r=t.closest(s),l=t.closest(o).lastElementChild;r.classList.toggle("hidden"),l.classList.toggle("hidden"),(0,b.renderQuantityOrders)()}};g=o("aNJCr").getBundleURL("9p9yL")+o("iE7OH").resolve("ee16w");var m,y=document.querySelector(".js-cart-list"),w=(m=n(i)(n(r).mark((function t(){var e,c,s,o,a=arguments;return n(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,t.prev=1,y.innerHTML='<li class="list-loader"><span class="loader"></span></li>',t.next=5,(0,l.getProducts)({page:e,sort:{field:"byABC",value:!0},limit:L()});case 5:c=t.sent.results,s=(0,v.getItem)("bucket"),o=c.map((function(t){return'\n  <li class="cart" data-id="'.concat(t._id,'" data-price="').concat(t.price,'"">\n  <div class="cart-container">\n  <div class="cart-img-container">\n    <img src="').concat(t.img,'" alt="" class="cart-img">\n    ').concat(t.is10PercentOff?'<svg class="discount-svg" width="60" height="60">\n              <use\n                href="'.concat(n(g),'#icon-discount"\n              ></use>\n            </svg>'):"",'\n  </div>\n    <p class="cart-name">').concat(t.name,'</p>\n    <ul class="info">\n      <li class="info-item">Category: <span class="info-text">').concat(t.category,'</span></li>\n      <li class="info-item">Size: <span class="info-text">').concat(t.size,'</span></li>\n      <li class="info-item">Popularity: <span class="info-text">').concat(t.popularity,'</span></li>\n    </ul>\n    <div class="buy-info">\n      <p class="buy-price">$').concat(t.price,"</p>\n    \n      ").concat(s.some((function(n){return n.id===t._id}))?'<button class="check" type="button" disabled>\n            <svg class="buy-svg" width="18" height="18">\n              <use\n                class="check-svg"\n                href="'.concat(n(g),'#icon-check"\n              ></use>\n            </svg>\n          </button>'):'<button class="buy buy-btn js-buy-button" type="button">\n            <svg class="buy-svg buy-btn" width="18" height="18">\n              <use\n                class="buy-btn"\n                href="'.concat(n(g),'#icon-shopping-cart"\n              ></use>\n            </svg>\n          </button>'),'\n      <button class="check hidden" type="button">\n            <svg class="buy-svg " width="18" height="18">\n              <use\n                class="buy-btn"\n                href="').concat(n(g),'#icon-check"\n              ></use>\n            </svg>\n          </button>\n    </div>\n    </div>\n  </li>\n      ')})),y.innerHTML="",y.insertAdjacentHTML("beforeend",o.join("")),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])}))),function(){return m.apply(this,arguments)});function L(){var t=window.innerWidth;return t>=768&&t<1440?8:t>=1440?9:6}w(),y.addEventListener("click",(function(t){return h(t.target,"buy-btn",".cart",".buy",".buy-info")}));i=o("bpxeT"),r=o("2TvXO"),l=o("b7ONl");var k=function(){return window.innerWidth<376},x=function(){var t=n(i)(n(r).mark((function t(){var e,c,s,o,a,i,d,u,p,g,v,f,b,h;return n(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return h=function(){s.childNodes[1].classList.toggle("dis",1==e),s.childNodes[3].classList.toggle("dis",1==e),o.childNodes[1].classList.toggle("dis",e==a),o.childNodes[3].classList.toggle("dis",e==a),c.childNodes[0].classList.toggle("dis",1==e),k()?c.childNodes[2].classList.toggle("dis",e==a):c.childNodes[4].classList.toggle("dis",e==a)},e=1,c=document.querySelector(".pg-list"),s=document.querySelector(".left-btns"),o=document.querySelector(".right-btns"),t.next=7,(0,l.getProducts)({sort:{field:"byABC",value:!0},limit:L()});case 7:for(a=t.sent.totalPages,i=[],d=0;d<a;d++)u=1===e&&0===d||e===a&&d===a-1,p="pg-item ".concat(e===d+1?"pg-active":""," ").concat(u?"dis":""),i.push('<li class="'.concat(p,'" data-pg="').concat(d+1,'">').concat(d+1,"</li>"));k()?('<li class="pg-item dotDis">...</li>',i.splice(1,a-2,'<li class="pg-item dotDis">...</li>'),console.log(i)):('<li class="pg-item dotDis">...</li>',i.splice(2,a-4,'<li class="pg-item dotDis">...</li>')),c.insertAdjacentHTML("beforeend",i.join("")),h(),g=function(t){t.classList.contains("pg-list")||(document.querySelector(".pg-active").classList.remove("pg-active"),e=t.closest(".pg-item").dataset.pg,t.classList.add("pg-active"),h(),w(e))},v=function(t){1==e||t.classList.contains("left-btns")||(t.closest(".pg-arrow").classList.contains("js-btn-1")?e--:e=1,w(e),h(),b())},f=function(t){e==a||t.classList.contains("right-btns")||(t.closest(".pg-arrow").classList.contains("js-btn-1")?e++:e=a,w(e),h(),b())},b=function(){document.querySelector(".pg-active").classList.remove("pg-active"),k()?e>1&&e<a-1?c.childNodes[1].classList.toggle("pg-active"):c.childNodes[e<2?e-1:e+2-a].classList.add("pg-active"):e>2&&e<a-2?c.childNodes[2].classList.toggle("pg-active"):c.childNodes[e<3?e-1:e+4-a].classList.add("pg-active")},c.addEventListener("click",(function(t){return g(t.target)})),s.addEventListener("click",(function(t){return v(t.target)})),o.addEventListener("click",(function(t){return f(t.target)}));case 21:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();x();i=o("bpxeT"),r=o("2TvXO"),l=o("b7ONl"),v=o("jzQFI");var j=document.querySelector(".popular-product-list"),E=function(){var t=n(i)(n(r).mark((function t(){var e,c,s;return n(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,5,j.innerHTML="",t.next=5,(0,l.getPopularProducts)(5);case 5:e=t.sent,c=(0,v.getItem)("bucket"),e.sort(S),s=e.map((function(t){return'\n  <li class="popular-product-item" data-id="'.concat(t._id,'" data-price="').concat(t.price,'"">\n      <div class="product-image-container">\n        <img\n          src="').concat(t.img,'"\n          alt="#"\n          width="56"\n          height="56"\n        />\n      </div>\n      <div class="product-description">\n        <p class="product-name">').concat(t.name,'</p>\n          <p class="info-item">\n            Category:<span class="info-text">').concat(t.category,'</span>\n          </p>\n          <div class="product-info">\n          <p class="info-item">Size:<span class="info-text">').concat(t.size,'</span></p>\n          <p class="info-item">Popularity:<span class="info-text">').concat(t.popularity,'</span></p>\n        </div>\n      </div>\n      <div class="btn-wrapper">\n      ').concat(c.some((function(n){return n.id===t._id}))?'<button class="check-popular" type="button" disabled>\n            <svg class="buy-svg-popular" width="12" height="12">\n              <use\n                class="check-svg-popular"\n                href="'.concat(n(g),'#icon-check"\n              ></use>\n            </svg>\n          </button>'):'<button class="popular-product-button btn-js js-buy-button" type="button">\n            <svg class="icon-popular-btn btn-js" width="12" height="12">\n              <use\n                class="btn-js"\n                href="'.concat(n(g),'#icon-shopping-cart"\n              ></use>\n            </svg>\n          </button>'),'\n      <button class="check-popular hidden" type="button">\n            <svg class="buy-svg-popular" width="12" height="12">\n              <use\n                class="btn-js"\n                href="').concat(n(g),'#icon-check"\n              ></use>\n            </svg>\n          </button>\n      </div>\n    </li>\n      ')})),j.insertAdjacentHTML("beforeend",s.join("")),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}();function S(t,n){return t.popularity<n.popularity?1:t.popularity>n.popularity?-1:0}E(),j.addEventListener("click",(function(t){return h(t.target,"btn-js",".popular-product-item",".popular-product-button",".btn-wrapper")}));i=o("bpxeT"),r=o("2TvXO"),l=o("b7ONl");var T=(0,(v=o("jzQFI")).getItem)("bucket"),q=document.querySelector(".js-discount-list");function N(){return(N=n(i)(n(r).mark((function t(){var e,c;return n(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,l.getDiscountedProducts)();case 3:e=t.sent,c=e.slice(0,2).map((function(t){return'\n          <li class="discount-item" data-id="'.concat(t._id,'" data-price="').concat(t.price,'"">\n            <svg class="discount-icon" width="60" height="60">\n              <use href="').concat(n(g),'#icon-discount"></use>\n            </svg>\n            <div class="discount-container-img">\n              <img\n                src="').concat(t.img,'"\n                alt="').concat(t.name,'-img"\n                class="discount-img"\n              />\n            </div>\n            <div class="discount-order">\n              <h3 class="discount-name">').concat(t.name,'</h3>\n              <p class="discount-price">&#36;').concat(t.price,'</p>\n              <div class="btn-wrapper-discount">\n              ').concat(T.some((function(n){return n.id===t._id}))?'<button class="check-discount" type="button" disabled>\n            <svg class="buy-svg-discount" width="18" height="18">\n              <use\n                class="check-svg-discount"\n                href="'.concat(n(g),'#icon-check"\n              ></use>\n            </svg>\n          </button>'):'<button class="discount-product-button btn-js js-buy-button" type="button">\n            <svg class="icon-discount-btn btn-js" width="18" height="18">\n              <use\n                class="btn-js"\n                href="'.concat(n(g),'#icon-shopping-cart"\n              ></use>\n            </svg>\n          </button>'),'\n      <button class="check-discount hidden" type="button">\n            <svg class="buy-svg-discount" width="18" height="18">\n              <use\n                class="btn-js"\n                href="').concat(n(g),'#icon-check"\n              ></use>\n            </svg>\n          </button>\n            </div>\n            </div>\n          </li>\n        ')})).join(""),q.insertAdjacentHTML("beforeend",c),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error("Error rendering discount items:",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){N.apply(this,arguments)}(),q.addEventListener("click",(function(t){console.log(t.target),h(t.target,"btn-js",".discount-item",".discount-product-button",".btn-wrapper-discount")}));i=o("bpxeT"),r=o("2TvXO"),l=o("b7ONl"),v=o("jzQFI");function O(t){var e=(0,v.getItem)("bucket");return' \n    <div class="modal-window" data-id="'.concat(t._id,'" data-price="').concat(t.price,'">\n      <button type="button" class="modal-close-btn popup-modal-close">\n      <svg class="modal-close-icon">\n        <use href="').concat(n(g),'#close"></use>\n      </svg>\n    </button>\n\n    <div class="modal-main-content-box">\n      <div class="modal-picture-box-container">\n        <img class="modal-pic" src="').concat(t.img,'" alt="picture of the vegetable" />\n      </div>\n      <div class="modal-main-content">\n        <h2 class="modal-title">').concat(t.name,'</h2>\n        <div class="modal-box-info">\n          <p class="classification">\n            Category:<span class="modal-info">').concat(t.category,'</span>\n          </p>\n          <p class="classification">\n            Size:<span class="modal-info">').concat(t.size,'</span>\n          </p>\n          <p class="classification">\n            Popularity:<span class="modal-info">').concat(t.popularity,'</span>\n          </p>\n        </div>\n\n        <p class="modal-description">\n        ').concat(t.desc,'\n        </p>\n      </div>\n    </div>\n\n    <div class="modal-box-bottom">\n      <p class="modal-price">$').concat(t.price,"</p>\n\n\n  \n      ").concat(e.some((function(n){return n.id===t._id}))?'      <button\n        type="button"\n        class="added-to"\n        data-modal-added-to\n      >\n        Added to<svg class="modal-shopping-cart" width="18" height="18">\n          <use href="'.concat(n(g),'#icon-shopping-cart"></use>\n        </svg>\n      </button>'):'<button type="button" class="add-to js-buy-btn" data-modal-add-to>\n        Add to<svg class="modal-shopping-cart js-buy-btn" width="18" height="18">\n          <use href="'.concat(n(g),'#icon-shopping-cart"></use>\n        </svg>\n      </button>'),'\n            <button\n        type="button"\n        class="added-to hidden"\n        data-modal-added-to\n      >\n        Added to<svg class="modal-shopping-cart" width="18" height="18">\n          <use href="').concat(n(g),'#icon-shopping-cart"></use>\n        </svg>\n      </button>\n    </div>\n    </div>\n    ')}var H={popular:document.querySelector(".popular-product-list"),products:document.querySelector(".js-cart-list"),discount:document.querySelector(".js-discount-list"),modal:document.querySelector(".modal-backdrops")};function _(t){return M.apply(this,arguments)}function M(){return(M=n(i)(n(r).mark((function t(e){var c,s,o,a;return n(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!(null==e?void 0:e.target.closest(".js-buy-button"))){t.next=3;break}return t.abrupt("return");case 3:if(H.modal.classList.toggle("is-hidden"),H.modal.classList.contains("is-hidden")){t.next=20;break}return c=e.target.closest("li").dataset.id,t.next=8,(0,l.getProductById)(c);case 8:s=t.sent,o=O(s),document.querySelector(".modal-backdrops").insertAdjacentHTML("beforeend",o),document.querySelector(".modal-window").addEventListener("click",(function(t){return h(t.target,"js-buy-btn",".modal-window",".add-to",".modal-box-bottom")})),a=document.querySelector(".popup-modal-close"),H.modal.addEventListener("click",z),a.addEventListener("click",_),window.addEventListener("keydown",A),t.next=21;break;case 20:H.modal.innerHTML="",window.removeEventListener("keydown",A);case 21:t.next=26;break;case 23:t.prev=23,t.t0=t.catch(0),console.log(t.t0);case 26:case"end":return t.stop()}}),t,null,[[0,23]])})))).apply(this,arguments)}function A(t){"Escape"===t.code&&_()}function z(t){t.target===H.modal&&_()}H.popular.addEventListener("click",_),H.products.addEventListener("click",_),H.discount.addEventListener("click",_);i=o("bpxeT"),r=o("2TvXO"),l=o("b7ONl");var P=document.querySelector(".js-footer-form"),I=document.querySelector("[data-modal]"),C=document.querySelector("[data-popup-email]"),F=function(t,n,e){t.classList.contains(n)&&t.classList.toggle(e)},B=function(){var t=n(i)(n(r).mark((function t(e){var c;return n(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.preventDefault(),c=document.querySelector(".js-email").value,t.next=5,(0,l.createSubscription)(c);case 5:P.reset(),I.classList.toggle("is-hidden-success"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),document.querySelector("[data-popup-email]").classList.toggle("is-hidden");case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(n){return t.apply(this,arguments)}}();C.addEventListener("click",(function(t){return F(t.target,"popup-email-backdrops","is-hidden")})),I.addEventListener("click",(function(t){return F(t.target,"backdrop-success","is-hidden-success")})),P.addEventListener("submit",(function(t){return B(t)}));var D={closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};D.closeModalBtn.addEventListener("click",(function(){D.modal.classList.toggle("is-hidden-success")}));var R={closeModalBtn:document.querySelector("[data-popup-close]"),modal:document.querySelector("[data-popup-email]")};R.closeModalBtn.addEventListener("click",(function(){R.modal.classList.toggle("is-hidden")}))}();
//# sourceMappingURL=index.a49fee70.js.map
