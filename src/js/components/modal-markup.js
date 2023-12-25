import sprite from '../../images/sprite.svg';
import { getItem } from '../storage';

export function getMarkup(product) {
  const bucket = getItem('bucket');

  return ` 
    <div class="modal-window js-product-item" data-id="${
      product._id
    }" data-price="${product.price}">
      <button type="button" class="modal-close-btn popup-modal-close">
      <svg class="modal-close-icon">
        <use href="${sprite}#close"></use>
      </svg>
    </button>

    <div class="modal-main-content-box">
      <div class="modal-picture-box-container">
        <img
          class="modal-pic"
          src="${product.img}" 
          alt="${product.name}"
          loading="lazy" 
        />
      </div>
      <div class="modal-main-content">
        <h2 class="modal-title">${product.name}</h2>
        <div class="modal-box-info">
          <p class="classification">
            Category:<span class="modal-info">${product.category
              .split('_')
              .join(' ')}</span>
          </p>
          <p class="classification">
            Size:<span class="modal-info">${product.size}</span>
          </p>
          <p class="classification">
            Popularity:<span class="modal-info">${product.popularity}</span>
          </p>
        </div>

        <p class="modal-description">
        ${product.desc}
        </p>
      </div>
    </div>

    <div class="modal-box-bottom">
      <p class="modal-price">&#36;${product.price}</p>


  
      ${
        bucket.some(item => item.id === product._id)
          ? `      <button
        type="button"
        class="added-to js-bought-btn"
        data-modal-added-to
      >
        Added <svg class="modal-shopping-cart" width="18" height="18">
          <use href="${sprite}#icon-check"></use>
        </svg>
      </button>`
          : `<button type="button" class="add-to js-buy-button" data-modal-add-to>
        Add to<svg class="modal-shopping-cart js-buy-button" width="18" height="18">
          <use href="${sprite}#icon-shopping-cart"></use>
        </svg>
      </button>`
      }
            <button
        type="button"
        class="added-to js-bought-btn hidden"
        data-modal-added-to
      >
        Added <svg class="modal-shopping-cart" width="18" height="18">
          <use href="${sprite}#icon-check"></use>
        </svg>
      </button>
    </div>
    </div>
    `;
}
