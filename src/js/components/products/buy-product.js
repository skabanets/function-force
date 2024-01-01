import { getItem, setItem } from '../storage';
import { renderQuantityOrders } from './basket-quantity-of-products';

const updateUI = productId => {
  // Get list of all the same items on our page
  const productItems = document.querySelectorAll(
    `.js-product-item[data-id="${productId}"]`
  );

  productItems.forEach(product => {
    const buyBtn = product.querySelector('.js-buy-button');
    const checkBtn = product.querySelector('.js-bought-btn');

    // Hide Buy button and Show Bought button (with checkmark icon)
    if (buyBtn && checkBtn) {
      buyBtn.classList.toggle('hidden');
      checkBtn.classList.toggle('hidden');
    }
  });
};

export const buyItem = productId => {
  const productItemContainer = document.querySelector(
    `.js-product-item[data-id="${productId}"]`
  );

  // If we didn't find the element, then stop processing
  if (!productItemContainer) return;

  const data = {
    id: productId,
    amount: 1,
    price: productItemContainer.dataset.price,
  };

  // Save to local storage
  const bucket = getItem('bucket');
  setItem('bucket', [...bucket, data]);

  // Change shopping cart icon to a checkmark
  updateUI(productId);

  renderQuantityOrders();
};
