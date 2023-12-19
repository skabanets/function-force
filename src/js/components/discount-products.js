function renderDiscountItems(discounts) {
  const discountList = document.getElementById('list');

  const itemsHTML = discounts
    .map(
      discount => `
    <li class="discount-item">
      <svg class="discount-icon" width="60" height="60">
        <use href="./images/sprite.svg#icon-discount"></use>
      </svg>
      <div class="discount-container-img">
        <img
          src="${discount.imgSrc}"
          alt="${discount.name}-img"
          class="discount-img"
        />
      </div>
      <div class="discount-order">
        <h3 class="discount-name">${discount.name}</h3>
        <p class="discount-price">&#36;${discount.price}</p>
        <button type="" class="discount-button">
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
}

renderDiscountItems(discountsData);
