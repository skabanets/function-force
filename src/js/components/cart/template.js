import sprite from '../../../images/sprite.svg';
import * as localStorage from '../../storage';

// TODO: use one object for all local storage items keys
const productsInCart = localStorage.getItem('bucket');

const productCardTemplate = product => {
  return `<li class="checkout-products-list-item" data-id="${product._id}">
          <div class="checkout-product-item-card">
            <div class="checkout-product-item-card-img">
              <img
                class="checkout-product-img lazy"
                src="${product.img}"
                alt="${product.name}"
                width="64"
                height="64"
                loading="lazy"
              />
            </div>
            <div class="product-item-card-details">
              <div class="product-item-attributes">
                <h3 class="product-item-name">${product.name}</h3>
                <p class="product-item-category">
                  <span class="product-item-catogry-label">Category: </span>
                  <span class="product-item-category-name">${
                    product.category
                  }</span>
                </p>
                <p class="product-item-size">
                  <span class="product-item-size-label">Size: </span
                  ><span class="product-item-size-name">${product.size}</span>
                </p>
              </div>
              <div class="product-item-price-qty">
                <div class="product-item-price">$${parseFloat(
                  product.price
                ).toFixed(2)}</div>
                <div class="product-item-qty">
                  <button class="qty-decrement-btn">
                    <svg class="icon-qty-decrement" width="14" height="14">
                      <use href="${sprite}#icon-minus"></use>
                    </svg>
                  </button>
                  <span class="product-qty-value">${
                    productsInCart.filter(item => item.id === product._id).pop()
                      .amount
                  }</span>
                  <button class="qty-increment-btn">
                    <svg class="icon-qty-increment" width="14" height="14">
                      <use href="${sprite}#icon-plus"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <button class="remove-item-btn" type="button">
              <svg class="remove-item-btn-icon" width="18" height="18">
                <use href="${sprite}#icon-ion_close-sharp"></use>
              </svg>
            </button>
          </div>
        </li>`;
};

export default productCardTemplate;
