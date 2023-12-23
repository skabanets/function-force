import sprite from '../../images/sprite.svg';
import { getDiscountedProducts } from '../api';
import { buyItem } from './buy-product';
import { getItem } from '../storage';

const bucket = getItem('bucket');
const discountList = document.querySelector('.js-discount-list');
async function renderDiscountProducts() {
  try {
    const discountProducts = await getDiscountedProducts();

    const itemsHTML = discountProducts
      .slice(0, 2)
      .map(
        element => `
          <li class="discount-item" data-id="${element._id}">
            <svg class="discount-icon" width="60" height="60">
              <use href="${sprite}#icon-discount"></use>
            </svg>
            <div class="discount-container-img">
              <img
                src="${element.img}"
                alt="${element.name}-img"
                class="discount-img"
              />
            </div>
            <div class="discount-order">
              <h3 class="discount-name">${element.name}</h3>
              <p class="discount-price">&#36;${element.price}</p>
              <div class="btn-wrapper-discount">
              ${
                bucket.some(item => item.id === element._id)
                  ? `<button class="check-discount" type="button" disabled>
            <svg class="buy-svg-discount" width="18" height="18">
              <use
                class="check-svg-discount"
                href="${sprite}#icon-check"
              ></use>
            </svg>
          </button>`
                  : `<button class="discount-product-button btn-js js-buy-button" type="button">
            <svg class="icon-discount-btn btn-js" width="18" height="18">
              <use
                class="btn-js"
                href="${sprite}#icon-shopping-cart"
              ></use>
            </svg>
          </button>`
              }
      <button class="check-discount hidden" type="button">
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
  } catch (error) {
    console.error('Error rendering discount items:', error);
  }
}
renderDiscountProducts();

discountList.addEventListener('click', e => {
  console.log(e.target);
  buyItem(
    e.target,
    'btn-js',
    '.discount-item',
    '.discount-product-button',
    '.btn-wrapper-discount'
  );
});
