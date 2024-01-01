import { getPopularProducts } from '../api';
import sprite from '../../../images/sprite.svg';
import { buyItem } from './buy-product';
import { getItem } from '../storage';
import LazyLoad from 'vanilla-lazyload';
import { Notify } from 'notiflix';

const lazyLoadInstance = new LazyLoad();

const list = document.querySelector('.popular-product-list');

const initPopularproducts = async () => {
  try {
    let limit = 5;
    list.innerHTML = '';
    const results = await getPopularProducts(limit);
    const bucket = getItem('bucket');
    results.sort(sortByPopularity);

    const res = results.map(
      element =>
        `
  <li class="popular-product-item product-card js-product-item" data-id="${
    element._id
  }" data-price="${element.price}">
      <div class="product-image-container">
        <img
          class="lazy"
          src="${element.img}"
          alt="${element.name}"
          width="56"
          height="56"
          loading="lazy"
        />
      </div>
      <div class="product-description">
        <p class="product-name">${element.name}</p>
          <p class="info-item">
            Category:<span class="info-text">${element.category
              .split('_')
              .join(' ')}</span>
          </p>
          <div class="product-info">
          <p class="info-item">Size:<span class="info-text">${
            element.size
          }</span></p>
          <p class="info-item">Popularity:<span class="info-text">${
            element.popularity
          }</span></p>
        </div>
      </div>
      <div class="btn-wrapper">
      ${
        bucket.some(item => item.id === element._id)
          ? `<button class="check-popular js-bought-btn" type="button" disabled>
            <svg class="buy-svg-popular" width="12" height="12">
              <use
                class="check-svg-popular"
                href="${sprite}#icon-check"
              ></use>
            </svg>
          </button>`
          : `<button class="popular-product-button btn-js js-buy-button" type="button" aria-label="Add to the shopping cart">
            <svg class="icon-popular-btn btn-js" width="12" height="12">
              <use
                class="btn-js"
                href="${sprite}#icon-shopping-cart"
              ></use>
            </svg>
          </button>`
      }
      <button class="check-popular js-bought-btn hidden" type="button">
            <svg class="buy-svg-popular" width="12" height="12">
              <use
                class="btn-js"
                href="${sprite}#icon-check"
              ></use>
            </svg>
          </button>
      </div>
    </li>
      `
    );

    list.insertAdjacentHTML('beforeend', res.join(''));

    lazyLoadInstance.update();
  } catch (e) {
    return Notify.failure(error.message);
  }
};

initPopularproducts();

function sortByPopularity(a, b) {
  if (a.popularity < b.popularity) {
    return 1;
  }
  if (a.popularity > b.popularity) {
    return -1;
  }
  return 0;
}

list.addEventListener('click', e => {
  if (
    !e.target.closest('button') ||
    !e.target.closest('button').classList.contains('js-buy-button')
  ) {
    return;
  }

  buyItem(e.target.closest('li.js-product-item').dataset.id);
});
