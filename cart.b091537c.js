!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},c={},i=n.parcelRequire6ab9;null==i&&((i=function(t){if(t in r)return r[t].exports;if(t in c){var e=c[t];delete c[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){c[t]=e},n.parcelRequire6ab9=i),i.register("iE7OH",(function(e,n){var r,c;t(e.exports,"register",(function(){return r}),(function(t){return r=t})),t(e.exports,"resolve",(function(){return c}),(function(t){return c=t}));var i={};r=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)i[e[n]]=t[e[n]]},c=function(t){var e=i[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),i.register("aNJCr",(function(e,n){var r;t(e.exports,"getBundleURL",(function(){return r}),(function(t){return r=t}));var c={};function i(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(t){var e=c[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return i(t[2])}return"/"}(),c[t]=e),e}})),i("iE7OH").register(JSON.parse('{"86U9d":"cart.b091537c.js","ee16w":"sprite.c60bbd42.svg","de1dt":"index.7d52652b.js"}'));var o,a=i("bpxeT"),s=i("2TvXO");o=i("aNJCr").getBundleURL("86U9d")+i("iE7OH").resolve("ee16w");var u=(l=i("jzQFI")).getItem("bucket"),d=function(t){return'<li class="checkout-products-list-item" data-id="'.concat(t._id,'">\n          <div class="checkout-product-item-card">\n            <div class="checkout-product-item-card-img">\n              <img\n                class="checkout-product-img"\n                src="').concat(t.img,'"\n                alt="').concat(t.name,'"\n                width="64"\n                height="64"\n                loading="lazy"\n              />\n            </div>\n            <div class="product-item-card-details">\n              <div class="product-item-attributes">\n                <h3 class="product-item-name">').concat(t.name,'</h3>\n                <p class="product-item-category">\n                  <span class="product-item-catogry-label">Category: </span>\n                  <span class="product-item-category-name">').concat(t.category,'</span>\n                </p>\n                <p class="product-item-size">\n                  <span class="product-item-size-label">Size: </span\n                  ><span class="product-item-size-name">').concat(t.size,'</span>\n                </p>\n              </div>\n              <div class="product-item-price-qty">\n                <div class="product-item-price">$').concat(parseFloat(t.price).toFixed(2),'</div>\n                <div class="product-item-qty">\n                  <button class="qty-decrement-btn">\n                    <svg class="icon-qty-decrement" width="14" height="14">\n                      <use href="').concat(e(o),'#icon-minus"></use>\n                    </svg>\n                  </button>\n                  <span class="product-qty-value">').concat(u.filter((function(e){return e.id===t._id})).pop().amount,'</span>\n                  <button class="qty-increment-btn">\n                    <svg class="icon-qty-increment" width="14" height="14">\n                      <use href="').concat(e(o),'#icon-plus"></use>\n                    </svg>\n                  </button>\n                </div>\n              </div>\n            </div>\n            <button class="remove-item-btn" type="button">\n              <svg class="remove-item-btn-icon" width="18" height="18">\n                <use href="').concat(e(o),'#icon-ion_close-sharp"></use>\n              </svg>\n            </button>\n          </div>\n        </li>')},l=i("jzQFI"),p=i("b7ONl"),m=i("9TWV9"),f=(l=i("jzQFI"),document.querySelector(".js-total-price")),v=function(){var t=(0,l.getItem)("bucket").reduce((function(t,e){var n=e.amount,r=e.price;return t+n*Number(r)}),0).toFixed(2),e=String(t).replace(/\./g,",");f.innerHTML="&#36;".concat(e)},g={container:document.querySelector(".checkout-products-list"),deleteAllProductsBtn:document.querySelector(".delete-all-products-btn"),emptyCartSection:document.querySelector(".empty-cart-section"),shoppingCartSection:document.querySelector(".shopping-cart-section")},h=function(){g.shoppingCartSection.classList.add("hidden"),g.emptyCartSection.classList.remove("hidden")};g.container.addEventListener("click",(function(t){if(t.target.closest("button")&&t.target.closest("button").classList.contains("remove-item-btn")){var e=l.getItem("bucket"),n=t.target.closest("li").dataset.id,r=e.filter((function(t){return t.id!==n}));l.setItem("bucket",r),t.target.closest("li").classList.add("hide-list-item"),setTimeout((function(){t.target.closest("li").remove(),(0,m.renderQuantityOrders)(),v(),0===r.length&&h()}),1e3)}})),g.container.addEventListener("click",(function(t){var e=t.target.closest("button");if(e&&(e.classList.contains("qty-increment-btn")||e.classList.contains("qty-decrement-btn"))){var n=l.getItem("bucket"),r=t.target.closest("li").dataset.id,c=t.target.closest(".product-item-price-qty").querySelector(".product-qty-value"),i=n.map((function(t){if(t.id===r){var n=e.classList.contains("qty-increment-btn")?t.amount+1:t.amount>1?t.amount-1:1;return c.innerHTML=n,{id:t.id,amount:n,price:t.price}}return t}));l.setItem("bucket",i),v()}})),g.deleteAllProductsBtn.addEventListener("click",(function(t){l.setItem("bucket",[]);var e=!0,n=!1,r=void 0;try{for(var c,i=g.container.children[Symbol.iterator]();!(e=(c=i.next()).done);e=!0){c.value.classList.add("hide-list-item")}}catch(t){n=!0,r=t}finally{try{e||null==i.return||i.return()}finally{if(n)throw r}}(0,m.renderQuantityOrders)(),setTimeout((function(){h()}),800)}));var b,y,w=(b=e(a)(e(s).mark((function t(n){var r;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(n.map(function(){var t=e(a)(e(s).mark((function t(n){return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.getProductById(n.id);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)}))),function(t){return b.apply(this,arguments)}),k=(y=e(a)(e(s).mark((function t(){var n,r,c;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=l.getItem("bucket"),t.next=4,w(n);case 4:0===(r=t.sent).length?h():(g.shoppingCartSection.classList.remove("hidden"),g.emptyCartSection.classList.add("hidden")),c=r.map(d).join(""),g.container.innerHTML=c,(0,m.renderQuantityOrders)(),v(),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])}))),function(){return y.apply(this,arguments)});k()}();
//# sourceMappingURL=cart.b091537c.js.map