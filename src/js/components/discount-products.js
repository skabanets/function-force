import sprite from '../../images/sprite.svg';
import { getDiscountedProducts } from '../api';
import { buyItem } from './buy-product';
import { getItem } from '../storage';
import LazyLoad from 'vanilla-lazyload';
import { Notify } from 'notiflix';

const lazyLoadInstance = new LazyLoad();
const bucket = getItem('bucket');
const discountList = document.querySelector('.js-discount-list');
async function renderDiscountProducts() {
  try {
    const discountProducts = await getDiscountedProducts();

    const itemsHTML = discountProducts
      .slice(0, 2)
      .map(
        element => `
          <li class="discount-item product-card js-product-item" data-id="${
            element._id
          }" data-price="${element.price}">
            <svg class="discount-icon" width="60" height="60">
              <use href="${sprite}#icon-discount"></use>
            </svg>
            <div class="discount-container-img">
              <img
                src="${element.img}"
                alt="${element.name}"
                class="lazy discount-img"
                loading="lazy"
                width="114"
              />
            </div>
            <div class="discount-order">
              <h3 class="discount-name">${element.name}</h3>
              <p class="discount-price">&#36;${element.price}</p>
              <div class="btn-wrapper-discount">
              ${
                bucket.some(item => item.id === element._id)
                  ? `<button class="check-discount js-bought-btn" type="button" disabled>
            <svg class="buy-svg-discount" width="18" height="18">
              <use
                class="check-svg-discount"
                href="${sprite}#icon-check"
              ></use>
            </svg>
          </button>`
                  : `<button class="discount-product-button btn-js js-buy-button" type="button" aria-label="Add to the shopping cart">
            <svg class="icon-discount-btn btn-js" width="18" height="18">
              <use
                class="btn-js"
                href="${sprite}#icon-shopping-cart"
              ></use>
            </svg>
          </button>`
              }
      <button class="check-discount js-bought-btn hidden" type="button">
            <svg class="buy-svg-discount" width="18" height="18">
              <use
                class="btn-js"
                href="${sprite}#icon-check"
              ></use>
            </svg>
          </button>
            </div>
            </div>
          </li>
        `
      )
      .join('');
    discountList.insertAdjacentHTML('beforeend', itemsHTML);

    lazyLoadInstance.update();
  } catch (error) {
    return Notify.failure(error.message);
  }
}
renderDiscountProducts();

discountList.addEventListener('click', e => {
  if (
    !e.target.closest('button') ||
    !e.target.closest('button').classList.contains('js-buy-button')
  ) {
    return;
  }

  buyItem(e.target.closest('li.js-product-item').dataset.id);
});
