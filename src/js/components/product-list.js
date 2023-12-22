import { getProducts } from '../api';
import { getItem } from '../storage';
import { buyItem } from './buy-product';
const list = document.querySelector('.js-cart-list');

export const cards = async (page = 1) => {
  try {
    list.innerHTML =
    
      '<li class="list-loader"><span class="loader"></span></li>'
    ;
    const { results } = await getProducts({
      page: page,
      sort: {
        field: 'byABC',
        value: true,
      },
      limit: calculateLimit(),
    });
    const bucket = getItem('bucket');

    const res = results.map(
      el =>
        `
  <li class="cart" data-id="${el._id}">
  <div class="cart-container">
  <div class="cart-img-container">
    <img src="${el.img}" alt="" class="cart-img">
    ${
      el.is10PercentOff
        ? `<svg class="discount-svg" width="60" height="60">
              <use
                href="/function-force/sprite.213ea699.svg#icon-discount"
              ></use>
            </svg>`
        : ''
    }
  </div>
    <p class="cart-name">${el.name}</p>
    <ul class="info">
      <li class="info-item">Category: <span class="info-text">${
        el.category
      }</span></li>
      <li class="info-item">Size: <span class="info-text">${el.size}</span></li>
      <li class="info-item">Popularity: <span class="info-text">${
        el.popularity
      }</span></li>
    </ul>
    <div class="buy-info">
      <p class="buy-price">$${el.price}</p>
    
      ${
        bucket.some(item => item.id === el._id)
          ? `<button class="check" type="button" disabled>
            <svg class="buy-svg" width="18" height="18">
              <use
                class="check-svg"
                href="/function-force/sprite.213ea699.svg#icon-check"
              ></use>
            </svg>
          </button>`
          : `<button class="buy buy-btn" type="button">
            <svg class="buy-svg buy-btn" width="18" height="18">
              <use
                class="buy-btn"
                href="/function-force/sprite.213ea699.svg#icon-shopping-cart"
              ></use>
            </svg>
          </button>`
      }
      <button class="check hidden" type="button">
            <svg class="buy-svg " width="18" height="18">
              <use
                class="buy-btn"
                href="/function-force/sprite.213ea699.svg#icon-check"
              ></use>
            </svg>
          </button>
    </div>
    </div>
  </li>
      `
    );
    list.innerHTML = '';

    list.insertAdjacentHTML('beforeend', res.join(''));
  } catch (e) {
    console.log(e);
  }
};

cards();

list.addEventListener('click', e =>
  buyItem(e.target, 'buy-btn', '.cart', '.buy', '.buy-info')
);

export function calculateLimit() {
  const width = window.innerWidth;
  const MOBILE_WIDTH = 768;
  const LARGE_WIDTH = 1440;

  if (width >= MOBILE_WIDTH && width < LARGE_WIDTH) return 8;
  if (width >= LARGE_WIDTH) return 9;

  return 6; // Default limit
}
