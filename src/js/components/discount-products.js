import { getDiscountedProducts } from '../api';
const discountList = document.querySelector('.js-discount-list');
async function renderDiscountProducts() {
  try {
    const discountProducts = await getDiscountedProducts();
    console.log(discountProducts);
    const itemsHTML = discountProducts
      .slice(0, 2)
      .map(
        discount => `
          <li class="discount-item">
            <svg class="discount-icon" width="60" height="60">
              <use href="./images/sprite.svg#icon-discount"></use>
            </svg>
            <div class="discount-container-img">
              <img
                src="${discount.img}"
                alt="${discount.name}-img"
                class="discount-img"
              />
            </div>
            <div class="discount-order">
              <h3 class="discount-name">${discount.name}</h3>
              <p class="discount-price">&#36;${discount.price}</p>
              <button type="button" class="discount-button">
                <svg class="discount-shopping-icon" width="18" height="18">
                  <use href="./images/sprite.svg#icon-shopping-cart"></use>
                </svg>
              </button>
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
