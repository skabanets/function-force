import { getProducts } from '../api';
import { getItem, setItem } from '../storage';
import { buyItem } from './buy-product';
import sprite from '../../../images/sprite.svg';
import { displayPagination } from './pagination';
import LazyLoad from 'vanilla-lazyload';
import { Notify } from 'notiflix';

const lazyLoadInstance = new LazyLoad();
const list = document.querySelector('.js-cart-list');
const message = document.querySelector('.empty-storage');

export const renderCards = async (page = 1) => {
  try {
    list.innerHTML =
      '<li class="list-loader"><span class="loader"></span></li>';
    const data = getItem('pageData');

    const { results, totalPages } = await getProducts({
      category: data.category ? data.category : '',
      ...data.sortBy,
      keyword: data.keyword ? data.keyword : '',
      page: page,
      limit: calculateLimit(),
    });

    if (page === 1) await displayPagination(totalPages);

    if (results.length < 1) {
      message.style.display = 'block';
      list.innerHTML = '';
      list.appendChild(message);
      return;
    }

    const bucket = getItem('bucket');

    const res = results.map(
      el =>
        `
  <li
    class="cart product-card js-product-item"
    data-id="${el._id}" 
    data-price="${el.price}"
  >
  <div class="cart-container">
  <div class="cart-img-container">
    <img
      data-src="${el.img}"
      alt="${el.name}" 
      class="lazy cart-img" 
      loading="lazy"
    >
    ${
      el.is10PercentOff
        ? `<svg class="discount-svg" width="60" height="60">
              <use
                href="${sprite}#icon-discount"
              ></use>
            </svg>`
        : ''
    }
  </div>
    <p class="cart-name">${el.name}</p>
    <ul class="info">
      <li class="info-item">Category: <span class="info-text">${el.category
        .split('_')
        .join(' ')}</span></li>
      <li class="info-item">Size: <span class="info-text">${el.size}</span></li>
      <li class="info-item">Popularity: <span class="info-text">${
        el.popularity
      }</span></li>
    </ul>
    <div class="buy-info">
      <p class="buy-price">&#36;${el.price}</p>
    
      ${
        bucket.some(item => item.id === el._id)
          ? `<button class="check js-bought-btn" type="button" disabled>
            <svg class="buy-svg" width="18" height="18">
              <use
                class="check-svg"
                href="${sprite}#icon-check"
              ></use>
            </svg>
          </button>`
          : `<button class="buy buy-btn js-buy-button" type="button" aria-label="Add to the shopping cart">
            <svg class="buy-svg buy-btn" width="18" height="18">
              <use
                class="buy-btn"
                href="${sprite}#icon-shopping-cart"
              ></use>
            </svg>
          </button>`
      }
      <button class="check js-bought-btn hidden" type="button">
            <svg class="buy-svg " width="18" height="18">
              <use
                class="buy-btn"
                href="${sprite}#icon-check"
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

    lazyLoadInstance.update();
  } catch (e) {
    return Notify.failure(error.message);
  }
};

renderCards();

list.addEventListener('click', e => {
  if (
    !e.target.closest('button') ||
    !e.target.closest('button').classList.contains('js-buy-button')
  ) {
    return;
  }

  buyItem(e.target.closest('li.js-product-item').dataset.id);
});

// Reset all Filters in case we reload the page or navigate to another page
window.addEventListener('beforeunload', event => {
  setItem('pageData', {});
});

export function calculateLimit() {
  const width = window.innerWidth;
  const MOBILE_WIDTH = 768;
  const LARGE_WIDTH = 1440;

  if (width >= MOBILE_WIDTH && width < LARGE_WIDTH) return 8;
  if (width >= LARGE_WIDTH) return 9;

  return 6; // Default limit
}
