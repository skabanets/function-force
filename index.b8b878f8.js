!function(){function t(t,n,e,s){Object.defineProperty(t,n,{get:e,set:s,enumerable:!0,configurable:!0})}function n(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},c={},a=e.parcelRequire6ab9;function o(t){var n=document.querySelector(".menu-open");t.target.closest(".dropdown-filter")||(null==n||n.classList.toggle("menu-open"),document.removeEventListener("click",o))}null==a&&((a=function(t){if(t in s)return s[t].exports;if(t in c){var n=c[t];delete c[t];var e={id:t,exports:{}};return s[t]=e,n.call(e.exports,e,e.exports),e.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,n){c[t]=n},e.parcelRequire6ab9=a),a.register("iE7OH",(function(n,e){var s,c;t(n.exports,"register",(function(){return s}),(function(t){return s=t})),t(n.exports,"resolve",(function(){return c}),(function(t){return c=t}));var a={};s=function(t){for(var n=Object.keys(t),e=0;e<n.length;e++)a[n[e]]=t[n[e]]},c=function(t){var n=a[t];if(null==n)throw new Error("Could not resolve bundle with id "+t);return n}})),a.register("aNJCr",(function(n,e){var s;t(n.exports,"getBundleURL",(function(){return s}),(function(t){return s=t}));var c={};function a(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}s=function(t){var n=c[t];return n||(n=function(){try{throw new Error}catch(n){var t=(""+n.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return a(t[2])}return"/"}(),c[t]=n),n}})),a("iE7OH").register(JSON.parse('{"9p9yL":"index.b8b878f8.js","ee16w":"sprite.f1a06e51.svg","de1dt":"index.75edf01d.js"}')),a("9TWV9"),document.querySelectorAll(".dropdown-filter").forEach((function(t){t.addEventListener("click",(function(t){return t.target.closest(".dropdown-filter").childNodes[5].classList.toggle("menu-open"),void document.addEventListener("click",o)}))}));var i,r=a("bpxeT"),l=a("dDDEV"),u=a("2TvXO"),d=a("b7ONl"),p=a("jzQFI"),g=(r=a("bpxeT"),l=a("dDDEV"),u=a("2TvXO"),d=a("b7ONl"),p=a("jzQFI"),a("8nrFW")),b=(p=a("jzQFI"),a("9TWV9")),v=function(t){var e=document.querySelector('.js-product-item[data-id="'.concat(t,'"]'));if(e){var s={id:t,amount:1,price:e.dataset.price},c=(0,p.getItem)("bucket");(0,p.setItem)("bucket",n(g)(c).concat([s])),function(t){document.querySelectorAll('.js-product-item[data-id="'.concat(t,'"]')).forEach((function(t){var n=t.querySelector(".js-buy-button"),e=t.querySelector(".js-bought-btn");n&&e&&(n.classList.toggle("hidden"),e.classList.toggle("hidden"))}))}(t),(0,b.renderQuantityOrders)()}};i=a("aNJCr").getBundleURL("9p9yL")+a("iE7OH").resolve("ee16w");r=a("bpxeT"),u=a("2TvXO");var m,f=function(){return window.innerWidth<768},h=(m=n(r)(n(u).mark((function t(e){var s,c,a,o,i,r,l,d,p,g,b,v,m,h;return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(h=function(){o.childNodes[1].classList.toggle("dis",1==c),o.childNodes[3].classList.toggle("dis",1==c),i.childNodes[1].classList.toggle("dis",c==e),i.childNodes[3].classList.toggle("dis",c==e),a.childNodes[0].classList.toggle("dis",1==c),a.childNodes[a.childNodes.length-1].classList.toggle("dis",c==e)},s=document.querySelector(".pagination-container"),!(e<2)){t.next=7;break}return s.classList.add("hidden"),t.abrupt("return");case 7:s.classList.remove("hidden");case 8:for(c=1,(a=document.querySelector(".pg-list")).innerHTML="",o=document.querySelector(".left-btns"),i=document.querySelector(".right-btns"),e<6&&a.classList.add("less-six"),r=[],l=0;l<e;l++)d=1===c&&0===l||c===e&&l===e-1,p="pg-item ".concat(c===l+1?"pg-active":""," ").concat(d?"dis":""),r.push('<li class="'.concat(p,'" data-pg="').concat(l+1,'">').concat(l+1,"</li>"));f()?r.splice(1,e-2,'<li class="pg-item dotDis">...</li>'):e<6||r.splice(2,e-4,'<li class="pg-item dotDis">...</li>'),a.insertAdjacentHTML("beforeend",r.join("")),h(),g=function(t){t.classList.contains("pg-list")||(document.querySelector(".pg-active").classList.remove("pg-active"),c=t.closest(".pg-item").dataset.pg,t.classList.add("pg-active"),h(),j(c))},b=function(t){1==c||t.classList.contains("left-btns")||(t.closest(".pg-arrow").classList.contains("js-btn-1")?c--:c=1,j(c),h(),m())},v=function(t){c==e||t.classList.contains("right-btns")||(t.closest(".pg-arrow").classList.contains("js-btn-1")?c++:c=e,j(c),h(),m())},m=function(){document.querySelector(".pg-active").classList.remove("pg-active"),f()?c>1&&c<e-1?a.childNodes[1].classList.toggle("pg-active"):a.childNodes[c<2?c-1:c+2-e].classList.add("pg-active"):a.classList.contains("less-six")?a.childNodes[c-1].classList.add("pg-active"):c>2&&c<e-2?a.childNodes[2].classList.toggle("pg-active"):a.childNodes[c<3?c-1:c+4-e].classList.add("pg-active")},a.addEventListener("click",(function(t){return g(t.target)})),o.addEventListener("click",(function(t){return b(t.target)})),i.addEventListener("click",(function(t){return v(t.target)}));case 27:case"end":return t.stop()}}),t)}))),function(t){return m.apply(this,arguments)}),y=new(n(a("WZDmh"))),L=document.querySelector(".js-cart-list"),w=document.querySelector(".empty-storage"),j=function(){var t=n(r)(n(u).mark((function t(){var e,s,c,a,o,r,g,b=arguments;return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=b.length>0&&void 0!==b[0]?b[0]:1,t.prev=1,L.innerHTML='<li class="list-loader"><span class="loader"></span></li>',s=(0,p.getItem)("pageData"),t.next=6,(0,d.getProducts)(n(l)({category:s.category?s.category:""},s.sortBy,{keyword:s.keyword?s.keyword:"",page:e,limit:k()}));case 6:if(c=t.sent,a=c.results,o=c.totalPages,1!==e){t.next=12;break}return t.next=12,h(o);case 12:if(!(a.length<1)){t.next=17;break}return w.style.display="block",L.innerHTML="",L.appendChild(w),t.abrupt("return");case 17:r=(0,p.getItem)("bucket"),g=a.map((function(t){return'\n  <li\n    class="cart product-card js-product-item"\n    data-id="'.concat(t._id,'" \n    data-price="').concat(t.price,'"\n  >\n  <div class="cart-container">\n  <div class="cart-img-container">\n    <img\n      data-src="').concat(t.img,'"\n      alt="').concat(t.name,'" \n      class="lazy cart-img" \n      loading="lazy"\n    >\n    ').concat(t.is10PercentOff?'<svg class="discount-svg" width="60" height="60">\n              <use\n                href="'.concat(n(i),'#icon-discount"\n              ></use>\n            </svg>'):"",'\n  </div>\n    <p class="cart-name">').concat(t.name,'</p>\n    <ul class="info">\n      <li class="info-item">Category: <span class="info-text">').concat(t.category.split("_").join(" "),'</span></li>\n      <li class="info-item">Size: <span class="info-text">').concat(t.size,'</span></li>\n      <li class="info-item">Popularity: <span class="info-text">').concat(t.popularity,'</span></li>\n    </ul>\n    <div class="buy-info">\n      <p class="buy-price">&#36;').concat(t.price,"</p>\n    \n      ").concat(r.some((function(n){return n.id===t._id}))?'<button class="check js-bought-btn" type="button" disabled>\n            <svg class="buy-svg" width="18" height="18">\n              <use\n                class="check-svg"\n                href="'.concat(n(i),'#icon-check"\n              ></use>\n            </svg>\n          </button>'):'<button class="buy buy-btn js-buy-button" type="button">\n            <svg class="buy-svg buy-btn" width="18" height="18">\n              <use\n                class="buy-btn"\n                href="'.concat(n(i),'#icon-shopping-cart"\n              ></use>\n            </svg>\n          </button>'),'\n      <button class="check js-bought-btn hidden" type="button">\n            <svg class="buy-svg " width="18" height="18">\n              <use\n                class="buy-btn"\n                href="').concat(n(i),'#icon-check"\n              ></use>\n            </svg>\n          </button>\n    </div>\n    </div>\n  </li>\n      ')})),L.innerHTML="",L.insertAdjacentHTML("beforeend",g.join("")),y.update(),t.next=27;break;case 24:t.prev=24,t.t0=t.catch(1),console.log(t.t0);case 27:case"end":return t.stop()}}),t,null,[[1,24]])})));return function(){return t.apply(this,arguments)}}();function k(){var t=window.innerWidth;return t>=768&&t<1440?8:t>=1440?9:6}j(),L.addEventListener("click",(function(t){t.target.closest("button")&&t.target.closest("button").classList.contains("js-buy-button")&&v(t.target.closest("li.js-product-item").dataset.id)}));var x=document.querySelector(".menu-categories-js"),S=function(t){return t.map((function(t){return"<li class='menu-filter-item' data-value='".concat(t,"'>").concat(t.split("_").join(" "),"</li>")})).join("")};function E(){return(E=n(r)(n(u).mark((function t(){var e,s;return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="",t.prev=1,x.innerHTML="",t.next=5,(0,d.getProductsCategories)();case 5:s=t.sent,e=S(s),e+='<li class="show-all-categories menu-filter-item" data-value="ShowAll">Show all</li>',x.innerHTML=e,t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),e="<li>Error! Try again</li>";case 14:case"end":return t.stop()}}),t,null,[[1,11]])})))).apply(this,arguments)}!function(){E.apply(this,arguments)}();x.addEventListener("click",(function(t){return function(t){var e=document.querySelector(".js-categories-selected");if(t.classList.contains("menu-filter-item")){var s=t.dataset.value,c=(0,p.getItem)("pageData");"ShowAll"===s?(e.textContent=s,(0,p.setItem)("pageData",n(l)({},c,{category:""}))):(e.textContent=s,(0,p.setItem)("pageData",n(l)({},c,{category:s}))),j()}}(t.target)}));l=a("dDDEV"),p=a("jzQFI");var T=document.querySelector(".js-menu-sort");T.insertAdjacentHTML("beforeend",'          <li class="menu-sort-item" data-value=\''.concat(JSON.stringify({byABC:!0}),"'>A to Z</li>\n          <li class=\"menu-sort-item\" data-value='").concat(JSON.stringify({byABC:!1}),"'>Z to A</li>\n          <li class=\"menu-sort-item\" data-value='").concat(JSON.stringify({byPrice:!0}),"'>Cheap</li>\n          <li class=\"menu-sort-item\" data-value='").concat(JSON.stringify({byPrice:!1}),"'>Expensive</li>\n          <li class=\"menu-sort-item\" data-value='").concat(JSON.stringify({byPopularity:!1}),"'>Popular</li>\n          <li class=\"menu-sort-item\" data-value='").concat(JSON.stringify({byPopularity:!0}),"'>Not popular</li>\n          <li class=\"menu-sort-item\" data-value='").concat(JSON.stringify({all:!0}),"'>Show all</li>"));T.addEventListener("click",(function(t){return function(t){if(t.classList.contains("menu-sort-item")){var e=JSON.parse(t.dataset.value),s=t.textContent,c=(0,p.getItem)("pageData"),a=document.querySelector(".js-sort-selected");e.all?(0,p.setItem)("pageData",{}):((0,p.setItem)("pageData",n(l)({},c,{sortBy:n(l)({},e)})),a.textContent=s),j()}}(t.target)}));l=a("dDDEV"),p=a("jzQFI");var N=document.querySelector(".form-search");N.addEventListener("submit",(function(t){t.preventDefault();var e=N[0].value,s=(0,p.getItem)("pageData");(0,p.setItem)("pageData",n(l)({},s,{keyword:e})),j()}));r=a("bpxeT"),u=a("2TvXO"),d=a("b7ONl"),p=a("jzQFI");var q=new(n(a("WZDmh"))),O=document.querySelector(".popular-product-list"),D=function(){var t=n(r)(n(u).mark((function t(){var e,s,c;return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,5,O.innerHTML="",t.next=5,(0,d.getPopularProducts)(5);case 5:e=t.sent,s=(0,p.getItem)("bucket"),e.sort(I),c=e.map((function(t){return'\n  <li class="popular-product-item product-card js-product-item" data-id="'.concat(t._id,'" data-price="').concat(t.price,'">\n      <div class="product-image-container">\n        <img\n          class="lazy"\n          src="').concat(t.img,'"\n          alt="').concat(t.name,'"\n          width="56"\n          height="56"\n          loading="lazy"\n        />\n      </div>\n      <div class="product-description">\n        <p class="product-name">').concat(t.name,'</p>\n          <p class="info-item">\n            Category:<span class="info-text">').concat(t.category.split("_").join(" "),'</span>\n          </p>\n          <div class="product-info">\n          <p class="info-item">Size:<span class="info-text">').concat(t.size,'</span></p>\n          <p class="info-item">Popularity:<span class="info-text">').concat(t.popularity,'</span></p>\n        </div>\n      </div>\n      <div class="btn-wrapper">\n      ').concat(s.some((function(n){return n.id===t._id}))?'<button class="check-popular js-bought-btn" type="button" disabled>\n            <svg class="buy-svg-popular" width="12" height="12">\n              <use\n                class="check-svg-popular"\n                href="'.concat(n(i),'#icon-check"\n              ></use>\n            </svg>\n          </button>'):'<button class="popular-product-button btn-js js-buy-button" type="button">\n            <svg class="icon-popular-btn btn-js" width="12" height="12">\n              <use\n                class="btn-js"\n                href="'.concat(n(i),'#icon-shopping-cart"\n              ></use>\n            </svg>\n          </button>'),'\n      <button class="check-popular js-bought-btn hidden" type="button">\n            <svg class="buy-svg-popular" width="12" height="12">\n              <use\n                class="btn-js"\n                href="').concat(n(i),'#icon-check"\n              ></use>\n            </svg>\n          </button>\n      </div>\n    </li>\n      ')})),O.insertAdjacentHTML("beforeend",c.join("")),q.update(),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(){return t.apply(this,arguments)}}();function I(t,n){return t.popularity<n.popularity?1:t.popularity>n.popularity?-1:0}D(),O.addEventListener("click",(function(t){t.target.closest("button")&&t.target.closest("button").classList.contains("js-buy-button")&&v(t.target.closest("li.js-product-item").dataset.id)}));r=a("bpxeT"),u=a("2TvXO"),d=a("b7ONl"),p=a("jzQFI");var z=new(n(a("WZDmh"))),H=(0,p.getItem)("bucket"),_=document.querySelector(".js-discount-list");function A(){return(A=n(r)(n(u).mark((function t(){var e,s;return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,d.getDiscountedProducts)();case 3:e=t.sent,s=e.slice(0,2).map((function(t){return'\n          <li class="discount-item product-card js-product-item" data-id="'.concat(t._id,'" data-price="').concat(t.price,'">\n            <svg class="discount-icon" width="60" height="60">\n              <use href="').concat(n(i),'#icon-discount"></use>\n            </svg>\n            <div class="discount-container-img">\n              <img\n                src="').concat(t.img,'"\n                alt="').concat(t.name,'"\n                class="lazy discount-img"\n                loading="lazy"\n              />\n            </div>\n            <div class="discount-order">\n              <h3 class="discount-name">').concat(t.name,'</h3>\n              <p class="discount-price">&#36;').concat(t.price,'</p>\n              <div class="btn-wrapper-discount">\n              ').concat(H.some((function(n){return n.id===t._id}))?'<button class="check-discount js-bought-btn" type="button" disabled>\n            <svg class="buy-svg-discount" width="18" height="18">\n              <use\n                class="check-svg-discount"\n                href="'.concat(n(i),'#icon-check"\n              ></use>\n            </svg>\n          </button>'):'<button class="discount-product-button btn-js js-buy-button" type="button">\n            <svg class="icon-discount-btn btn-js" width="18" height="18">\n              <use\n                class="btn-js"\n                href="'.concat(n(i),'#icon-shopping-cart"\n              ></use>\n            </svg>\n          </button>'),'\n      <button class="check-discount js-bought-btn hidden" type="button">\n            <svg class="buy-svg-discount" width="18" height="18">\n              <use\n                class="btn-js"\n                href="').concat(n(i),'#icon-check"\n              ></use>\n            </svg>\n          </button>\n            </div>\n            </div>\n          </li>\n        ')})).join(""),_.insertAdjacentHTML("beforeend",s),z.update(),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error("Error rendering discount items:",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}!function(){A.apply(this,arguments)}(),_.addEventListener("click",(function(t){t.target.closest("button")&&t.target.closest("button").classList.contains("js-buy-button")&&v(t.target.closest("li.js-product-item").dataset.id)})),a("cwtus");r=a("bpxeT"),u=a("2TvXO"),d=a("b7ONl"),p=a("jzQFI");function P(t){var e=(0,p.getItem)("bucket");return' \n    <div class="modal-window js-product-item" data-id="'.concat(t._id,'" data-price="').concat(t.price,'">\n      <button type="button" class="modal-close-btn popup-modal-close">\n      <svg class="modal-close-icon">\n        <use href="').concat(n(i),'#close"></use>\n      </svg>\n    </button>\n\n    <div class="modal-main-content-box">\n      <div class="modal-picture-box-container">\n        <img\n          class="modal-pic"\n          src="').concat(t.img,'" \n          alt="').concat(t.name,'"\n          loading="lazy" \n        />\n      </div>\n      <div class="modal-main-content">\n        <h2 class="modal-title">').concat(t.name,'</h2>\n        <div class="modal-box-info">\n          <p class="classification">\n            Category:<span class="modal-info">').concat(t.category.split("_").join(" "),'</span>\n          </p>\n          <p class="classification">\n            Size:<span class="modal-info">').concat(t.size,'</span>\n          </p>\n          <p class="classification">\n            Popularity:<span class="modal-info">').concat(t.popularity,'</span>\n          </p>\n        </div>\n\n        <p class="modal-description">\n        ').concat(t.desc,'\n        </p>\n      </div>\n    </div>\n\n    <div class="modal-box-bottom">\n      <p class="modal-price">&#36;').concat(t.price,"</p>\n\n\n  \n      ").concat(e.some((function(n){return n.id===t._id}))?'      <button\n        type="button"\n        class="added-to js-bought-btn"\n        data-modal-added-to\n      >\n        Added <svg class="modal-shopping-cart" width="18" height="18">\n          <use href="'.concat(n(i),'#icon-check"></use>\n        </svg>\n      </button>'):'<button type="button" class="add-to js-buy-button" data-modal-add-to>\n        Add to<svg class="modal-shopping-cart js-buy-button" width="18" height="18">\n          <use href="'.concat(n(i),'#icon-shopping-cart"></use>\n        </svg>\n      </button>'),'\n            <button\n        type="button"\n        class="added-to js-bought-btn hidden"\n        data-modal-added-to\n      >\n        Added <svg class="modal-shopping-cart" width="18" height="18">\n          <use href="').concat(n(i),'#icon-check"></use>\n        </svg>\n      </button>\n    </div>\n    </div>\n    ')}var C={popular:document.querySelector(".popular-product-list"),products:document.querySelector(".js-cart-list"),discount:document.querySelector(".js-discount-list"),modal:document.querySelector(".modal-backdrops")};function M(t){return F.apply(this,arguments)}function F(){return(F=n(r)(n(u).mark((function t(e){var s,c,a,o;return n(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!(null==e?void 0:e.target.closest(".js-buy-button"))&&"UL"!==(null==e?void 0:e.target.nodeName)&&!(null==e?void 0:e.target.classList.contains("list-loader"))){t.next=3;break}return t.abrupt("return");case 3:if(C.modal.classList.toggle("is-hidden"),C.modal.classList.contains("is-hidden")){t.next=20;break}return s=e.target.closest("li").dataset.id,t.next=8,(0,d.getProductById)(s);case 8:c=t.sent,a=P(c),document.querySelector(".modal-backdrops").insertAdjacentHTML("beforeend",a),document.querySelector(".modal-window").addEventListener("click",(function(t){t.target.closest("button")&&t.target.closest("button").classList.contains("js-buy-button")&&v(t.target.closest(".js-product-item").dataset.id)})),o=document.querySelector(".popup-modal-close"),C.modal.addEventListener("click",Q),o.addEventListener("click",M),window.addEventListener("keydown",J),t.next=21;break;case 20:C.modal.innerHTML="",window.removeEventListener("keydown",J);case 21:t.next=26;break;case 23:t.prev=23,t.t0=t.catch(0),console.log(t.t0);case 26:case"end":return t.stop()}}),t,null,[[0,23]])})))).apply(this,arguments)}function J(t){"Escape"===t.code&&M()}function Q(t){t.target.classList.contains("modal-backdrops")&&M()}C.popular.addEventListener("click",M),C.products.addEventListener("click",M),C.discount.addEventListener("click",M),a("91Pqp"),a("aQJER");var R=document.querySelector(".js-scroll-up-btn"),W=function(){window.scrollTo({top:0,left:0,behavior:"smooth"})};window.addEventListener("scroll",(function(){(window.scrollY||document.documentElement.scrollTop)>400?R.classList.remove("hide-scroll-up-btn"):R.classList.add("hide-scroll-up-btn"),R.addEventListener("click",W)}))}();
//# sourceMappingURL=index.b8b878f8.js.map
