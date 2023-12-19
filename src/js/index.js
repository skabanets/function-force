import { getProducts } from './api';

const list = document.querySelector('.js-cart-list');

const cards = async () => {
  try {
    let limit = 6;
    const width = window.innerWidth;
    if (width >= 768 && width < 1440) limit = 8;
    else if (width >= 1440) limit = 9;

    list.innerHTML = '';
    const { results } = await getProducts({
      page: 1,
      sort: {
        field: 'byABC',
        value: true,
      },
      limit,
    });
    const res = results.map(
      el =>
        `
  <li class="cart">
  <div class="cart-container">
  <div class="cart-img-container">
    <img src="${el.img}" alt="" class="cart-img">
  </div>
    <p class="cart-name">${el.name}</p>
    <ul class="info">
      <li class="info-item">Category: <span class="info-text">${el.category}</span></li>
      <li class="info-item">Size: <span class="info-text">${el.size}</span></li>
      <li class="info-item">Popularity: <span class="info-text">${el.popularity}</span></li>
    </ul>
    <div class="buy-info">
      <p class="buy-price">$${el.price}</p>
      <button class="buy" type="button">
        <svg class="buy-svg" width="18" height="18">
          <use href="/sprite.f14d31f7.svg#icon-shopping-cart"></use>
        </svg>
      </button>
    </div>
    </div>
  </li>
      `
    );

    list.insertAdjacentHTML('beforeend', res.join(''));
  } catch (e) {
    console.log(e);
  }
};

cards();
