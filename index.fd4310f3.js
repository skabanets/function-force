function t(t,e,n,s){Object.defineProperty(t,e,{get:n,set:s,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},i={},o=n.parcelRequire6ab9;null==o&&((o=function(t){if(t in s)return s[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return s[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},n.parcelRequire6ab9=o),o.register("kyEFX",(function(e,n){var s,i;t(e.exports,"register",(function(){return s}),(function(t){return s=t})),t(e.exports,"resolve",(function(){return i}),(function(t){return i=t}));var o={};s=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)o[e[n]]=t[e[n]]},i=function(t){var e=o[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),o("kyEFX").register(JSON.parse('{"7bk21":"index.fd4310f3.js","lp5u4":"sprite.f1a06e51.svg","9lroz":"index.4a473b8f.js"}')),o("bA0jZ");function c(t){const e=document.querySelector(".menu-open");t.target.closest(".dropdown-filter")||(e?.classList.toggle("menu-open"),document.removeEventListener("click",c))}document.querySelectorAll(".dropdown-filter").forEach((t=>{t.addEventListener("click",(t=>(t.target.closest(".dropdown-filter").childNodes[5].classList.toggle("menu-open"),void document.addEventListener("click",c))))}));var a=o("7rYDH"),l=o("5uEKZ"),d=(a=o("7rYDH"),l=o("5uEKZ"),l=o("5uEKZ"),o("bA0jZ"));const r=t=>{const e=document.querySelector(`.js-product-item[data-id="${t}"]`);if(!e)return;const n={id:t,amount:1,price:e.dataset.price},s=(0,l.getItem)("bucket");(0,l.setItem)("bucket",[...s,n]),(t=>{document.querySelectorAll(`.js-product-item[data-id="${t}"]`).forEach((t=>{const e=t.querySelector(".js-buy-button"),n=t.querySelector(".js-bought-btn");e&&n&&(e.classList.toggle("hidden"),n.classList.toggle("hidden"))}))})(t),(0,d.renderQuantityOrders)()};var u;u=new URL(o("kyEFX").resolve("lp5u4"),import.meta.url).toString();const p=()=>window.innerWidth<768,g=async t=>{const e=document.querySelector(".pagination-container");if(t<2)return void e.classList.add("hidden");e.classList.remove("hidden");let n=1;const s=document.querySelector(".pg-list");s.innerHTML="";const i=document.querySelector(".left-btns"),o=document.querySelector(".right-btns");t<6&&s.classList.add("less-six");const c=[];for(let e=0;e<t;e++){const s=`pg-item ${n===e+1?"pg-active":""} ${1===n&&0===e||n===t&&e===t-1?"dis":""}`;c.push(`<li class="${s}" data-pg="${e+1}">${e+1}</li>`)}if(p()){const e='<li class="pg-item dotDis">...</li>';c.splice(1,t-2,e)}else if(t<6);else{const e='<li class="pg-item dotDis">...</li>';c.splice(2,t-4,e)}s.insertAdjacentHTML("beforeend",c.join("")),l();const a=()=>{document.querySelector(".pg-active").classList.remove("pg-active"),p()?n>1&&n<t-1?s.childNodes[1].classList.toggle("pg-active"):s.childNodes[n<2?n-1:n+2-t].classList.add("pg-active"):s.classList.contains("less-six")?s.childNodes[n-1].classList.add("pg-active"):n>2&&n<t-2?s.childNodes[2].classList.toggle("pg-active"):s.childNodes[n<3?n-1:n+4-t].classList.add("pg-active")};function l(){i.childNodes[1].classList.toggle("dis",1==n),i.childNodes[3].classList.toggle("dis",1==n),o.childNodes[1].classList.toggle("dis",n==t),o.childNodes[3].classList.toggle("dis",n==t),s.childNodes[0].classList.toggle("dis",1==n),s.childNodes[s.childNodes.length-1].classList.toggle("dis",n==t)}s.addEventListener("click",(t=>(t=>{if(t.classList.contains("pg-list"))return;document.querySelector(".pg-active").classList.remove("pg-active"),n=t.closest(".pg-item").dataset.pg,t.classList.add("pg-active"),l(),v(n)})(t.target))),i.addEventListener("click",(t=>(t=>{if(1==n||t.classList.contains("left-btns"))return;t.closest(".pg-arrow").classList.contains("js-btn-1")?n--:n=1,v(n),l(),a()})(t.target))),o.addEventListener("click",(e=>(e=>{if(n==t||e.classList.contains("right-btns"))return;e.closest(".pg-arrow").classList.contains("js-btn-1")?n++:n=t,v(n),l(),a()})(e.target)))};const m=new(e(o("lNk7C"))),b=document.querySelector(".js-cart-list"),h=document.querySelector(".empty-storage"),v=async(t=1)=>{try{b.innerHTML='<li class="list-loader"><span class="loader"></span></li>';const n=(0,l.getItem)("pageData"),{results:s,totalPages:i}=await(0,a.getProducts)({category:n.category?n.category:"",...n.sortBy,keyword:n.keyword?n.keyword:"",page:t,limit:y()});if(1===t&&await g(i),s.length<1)return h.style.display="block",b.innerHTML="",void b.appendChild(h);const o=(0,l.getItem)("bucket"),c=s.map((t=>`\n  <li\n    class="cart product-card js-product-item"\n    data-id="${t._id}" \n    data-price="${t.price}"\n  >\n  <div class="cart-container">\n  <div class="cart-img-container">\n    <img\n      data-src="${t.img}"\n      alt="${t.name}" \n      class="lazy cart-img" \n      loading="lazy"\n    >\n    ${t.is10PercentOff?`<svg class="discount-svg" width="60" height="60">\n              <use\n                href="${e(u)}#icon-discount"\n              ></use>\n            </svg>`:""}\n  </div>\n    <p class="cart-name">${t.name}</p>\n    <ul class="info">\n      <li class="info-item">Category: <span class="info-text">${t.category.split("_").join(" ")}</span></li>\n      <li class="info-item">Size: <span class="info-text">${t.size}</span></li>\n      <li class="info-item">Popularity: <span class="info-text">${t.popularity}</span></li>\n    </ul>\n    <div class="buy-info">\n      <p class="buy-price">&#36;${t.price}</p>\n    \n      ${o.some((e=>e.id===t._id))?`<button class="check js-bought-btn" type="button" disabled>\n            <svg class="buy-svg" width="18" height="18">\n              <use\n                class="check-svg"\n                href="${e(u)}#icon-check"\n              ></use>\n            </svg>\n          </button>`:`<button class="buy buy-btn js-buy-button" type="button">\n            <svg class="buy-svg buy-btn" width="18" height="18">\n              <use\n                class="buy-btn"\n                href="${e(u)}#icon-shopping-cart"\n              ></use>\n            </svg>\n          </button>`}\n      <button class="check js-bought-btn hidden" type="button">\n            <svg class="buy-svg " width="18" height="18">\n              <use\n                class="buy-btn"\n                href="${e(u)}#icon-check"\n              ></use>\n            </svg>\n          </button>\n    </div>\n    </div>\n  </li>\n      `));b.innerHTML="",b.insertAdjacentHTML("beforeend",c.join("")),m.update()}catch(t){console.log(t)}};function y(){const t=window.innerWidth;return t>=768&&t<1440?8:t>=1440?9:6}v(),b.addEventListener("click",(t=>{t.target.closest("button")&&t.target.closest("button").classList.contains("js-buy-button")&&r(t.target.closest("li.js-product-item").dataset.id)}));const f=document.querySelector(".menu-categories-js");!async function(){let t="";try{f.innerHTML="";const e=await(0,a.getProductsCategories)();t=e.map((t=>`<li class='menu-filter-item' data-value='${t}'>${t.split("_").join(" ")}</li>`)).join(""),t+='<li class="show-all-categories menu-filter-item" data-value="ShowAll">Show all</li>',f.innerHTML=t}catch(e){t="<li>Error! Try again</li>"}}();f.addEventListener("click",(t=>(t=>{const e=document.querySelector(".js-categories-selected");if(!t.classList.contains("menu-filter-item"))return;const n=t.dataset.value,s=(0,l.getItem)("pageData");"ShowAll"===n?(e.textContent=n,(0,l.setItem)("pageData",{...s,category:""})):(e.textContent=n,(0,l.setItem)("pageData",{...s,category:n})),v()})(t.target)));l=o("5uEKZ");const L=document.querySelector(".js-menu-sort");L.insertAdjacentHTML("beforeend",`          <li class="menu-sort-item" data-value='${JSON.stringify({byABC:!0})}'>A to Z</li>\n          <li class="menu-sort-item" data-value='${JSON.stringify({byABC:!1})}'>Z to A</li>\n          <li class="menu-sort-item" data-value='${JSON.stringify({byPrice:!0})}'>Cheap</li>\n          <li class="menu-sort-item" data-value='${JSON.stringify({byPrice:!1})}'>Expensive</li>\n          <li class="menu-sort-item" data-value='${JSON.stringify({byPopularity:!1})}'>Popular</li>\n          <li class="menu-sort-item" data-value='${JSON.stringify({byPopularity:!0})}'>Not popular</li>\n          <li class="menu-sort-item" data-value='${JSON.stringify({all:!0})}'>Show all</li>`);L.addEventListener("click",(t=>(t=>{if(!t.classList.contains("menu-sort-item"))return;const e=JSON.parse(t.dataset.value),n=t.textContent,s=(0,l.getItem)("pageData"),i=document.querySelector(".js-sort-selected");e.all?(0,l.setItem)("pageData",{}):((0,l.setItem)("pageData",{...s,sortBy:{...e}}),i.textContent=n),v()})(t.target)));l=o("5uEKZ");const j=document.querySelector(".form-search");j.addEventListener("submit",(t=>{t.preventDefault();const e=j[0].value,n=(0,l.getItem)("pageData");(0,l.setItem)("pageData",{...n,keyword:e}),v()}));a=o("7rYDH"),l=o("5uEKZ");const w=new(e(o("lNk7C"))),$=document.querySelector(".popular-product-list");function k(t,e){return t.popularity<e.popularity?1:t.popularity>e.popularity?-1:0}(async()=>{try{let t=5;$.innerHTML="";const n=await(0,a.getPopularProducts)(t),s=(0,l.getItem)("bucket");n.sort(k);const i=n.map((t=>`\n  <li class="popular-product-item product-card js-product-item" data-id="${t._id}" data-price="${t.price}">\n      <div class="product-image-container">\n        <img\n          class="lazy"\n          src="${t.img}"\n          alt="${t.name}"\n          width="56"\n          height="56"\n          loading="lazy"\n        />\n      </div>\n      <div class="product-description">\n        <p class="product-name">${t.name}</p>\n          <p class="info-item">\n            Category:<span class="info-text">${t.category.split("_").join(" ")}</span>\n          </p>\n          <div class="product-info">\n          <p class="info-item">Size:<span class="info-text">${t.size}</span></p>\n          <p class="info-item">Popularity:<span class="info-text">${t.popularity}</span></p>\n        </div>\n      </div>\n      <div class="btn-wrapper">\n      ${s.some((e=>e.id===t._id))?`<button class="check-popular js-bought-btn" type="button" disabled>\n            <svg class="buy-svg-popular" width="12" height="12">\n              <use\n                class="check-svg-popular"\n                href="${e(u)}#icon-check"\n              ></use>\n            </svg>\n          </button>`:`<button class="popular-product-button btn-js js-buy-button" type="button">\n            <svg class="icon-popular-btn btn-js" width="12" height="12">\n              <use\n                class="btn-js"\n                href="${e(u)}#icon-shopping-cart"\n              ></use>\n            </svg>\n          </button>`}\n      <button class="check-popular js-bought-btn hidden" type="button">\n            <svg class="buy-svg-popular" width="12" height="12">\n              <use\n                class="btn-js"\n                href="${e(u)}#icon-check"\n              ></use>\n            </svg>\n          </button>\n      </div>\n    </li>\n      `));$.insertAdjacentHTML("beforeend",i.join("")),w.update()}catch(t){console.log(t)}})(),$.addEventListener("click",(t=>{t.target.closest("button")&&t.target.closest("button").classList.contains("js-buy-button")&&r(t.target.closest("li.js-product-item").dataset.id)}));a=o("7rYDH"),l=o("5uEKZ");const S=new(e(o("lNk7C"))),E=(0,l.getItem)("bucket"),q=document.querySelector(".js-discount-list");!async function(){try{const t=(await(0,a.getDiscountedProducts)()).slice(0,2).map((t=>`\n          <li class="discount-item product-card js-product-item" data-id="${t._id}" data-price="${t.price}">\n            <svg class="discount-icon" width="60" height="60">\n              <use href="${e(u)}#icon-discount"></use>\n            </svg>\n            <div class="discount-container-img">\n              <img\n                src="${t.img}"\n                alt="${t.name}"\n                class="lazy discount-img"\n                loading="lazy"\n              />\n            </div>\n            <div class="discount-order">\n              <h3 class="discount-name">${t.name}</h3>\n              <p class="discount-price">&#36;${t.price}</p>\n              <div class="btn-wrapper-discount">\n              ${E.some((e=>e.id===t._id))?`<button class="check-discount js-bought-btn" type="button" disabled>\n            <svg class="buy-svg-discount" width="18" height="18">\n              <use\n                class="check-svg-discount"\n                href="${e(u)}#icon-check"\n              ></use>\n            </svg>\n          </button>`:`<button class="discount-product-button btn-js js-buy-button" type="button">\n            <svg class="icon-discount-btn btn-js" width="18" height="18">\n              <use\n                class="btn-js"\n                href="${e(u)}#icon-shopping-cart"\n              ></use>\n            </svg>\n          </button>`}\n      <button class="check-discount js-bought-btn hidden" type="button">\n            <svg class="buy-svg-discount" width="18" height="18">\n              <use\n                class="btn-js"\n                href="${e(u)}#icon-check"\n              ></use>\n            </svg>\n          </button>\n            </div>\n            </div>\n          </li>\n        `)).join("");q.insertAdjacentHTML("beforeend",t),S.update()}catch(t){console.error("Error rendering discount items:",t)}}(),q.addEventListener("click",(t=>{t.target.closest("button")&&t.target.closest("button").classList.contains("js-buy-button")&&r(t.target.closest("li.js-product-item").dataset.id)})),o("gTaRf");a=o("7rYDH"),l=o("5uEKZ");function N(t){const n=(0,l.getItem)("bucket");return` \n    <div class="modal-window js-product-item" data-id="${t._id}" data-price="${t.price}">\n      <button type="button" class="modal-close-btn popup-modal-close">\n      <svg class="modal-close-icon">\n        <use href="${e(u)}#close"></use>\n      </svg>\n    </button>\n\n    <div class="modal-main-content-box">\n      <div class="modal-picture-box-container">\n        <img\n          class="modal-pic"\n          src="${t.img}" \n          alt="${t.name}"\n          loading="lazy" \n        />\n      </div>\n      <div class="modal-main-content">\n        <h2 class="modal-title">${t.name}</h2>\n        <div class="modal-box-info">\n          <p class="classification">\n            Category:<span class="modal-info">${t.category.split("_").join(" ")}</span>\n          </p>\n          <p class="classification">\n            Size:<span class="modal-info">${t.size}</span>\n          </p>\n          <p class="classification">\n            Popularity:<span class="modal-info">${t.popularity}</span>\n          </p>\n        </div>\n\n        <p class="modal-description">\n        ${t.desc}\n        </p>\n      </div>\n    </div>\n\n    <div class="modal-box-bottom">\n      <p class="modal-price">&#36;${t.price}</p>\n\n\n  \n      ${n.some((e=>e.id===t._id))?`      <button\n        type="button"\n        class="added-to js-bought-btn"\n        data-modal-added-to\n      >\n        Added <svg class="modal-shopping-cart" width="18" height="18">\n          <use href="${e(u)}#icon-check"></use>\n        </svg>\n      </button>`:`<button type="button" class="add-to js-buy-button" data-modal-add-to>\n        Add to<svg class="modal-shopping-cart js-buy-button" width="18" height="18">\n          <use href="${e(u)}#icon-shopping-cart"></use>\n        </svg>\n      </button>`}\n            <button\n        type="button"\n        class="added-to js-bought-btn hidden"\n        data-modal-added-to\n      >\n        Added <svg class="modal-shopping-cart" width="18" height="18">\n          <use href="${e(u)}#icon-check"></use>\n        </svg>\n      </button>\n    </div>\n    </div>\n    `}const x={popular:document.querySelector(".popular-product-list"),products:document.querySelector(".js-cart-list"),discount:document.querySelector(".js-discount-list"),modal:document.querySelector(".modal-backdrops")};async function H(t){try{if(t?.target.closest(".js-buy-button")||"UL"===t?.target.nodeName||t?.target.classList.contains("list-loader"))return;if(x.modal.classList.toggle("is-hidden"),x.modal.classList.contains("is-hidden"))x.modal.innerHTML="",window.removeEventListener("keydown",A);else{const e=t.target.closest("li").dataset.id,n=N(await(0,a.getProductById)(e));document.querySelector(".modal-backdrops").insertAdjacentHTML("beforeend",n);document.querySelector(".modal-window").addEventListener("click",(t=>{t.target.closest("button")&&t.target.closest("button").classList.contains("js-buy-button")&&r(t.target.closest(".js-product-item").dataset.id)}));const s=document.querySelector(".popup-modal-close");x.modal.addEventListener("click",T),s.addEventListener("click",H),window.addEventListener("keydown",A)}}catch(t){console.log(t)}}function A(t){"Escape"===t.code&&H()}function T(t){t.target.classList.contains("modal-backdrops")&&H()}x.popular.addEventListener("click",H),x.products.addEventListener("click",H),x.discount.addEventListener("click",H),o("9kUZ3"),o("9CQTL");const _=document.querySelector(".js-scroll-up-btn"),D=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})};window.addEventListener("scroll",(()=>{(window.scrollY||document.documentElement.scrollTop)>400?_.classList.remove("hide-scroll-up-btn"):_.classList.add("hide-scroll-up-btn"),_.addEventListener("click",D)}));
//# sourceMappingURL=index.fd4310f3.js.map
