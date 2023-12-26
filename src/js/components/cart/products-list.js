import productCardTemplate from './template';
import * as localStorage from '../../storage';
import * as foodAPI from '../../api';
import { renderQuantityOrders } from '../basket-quantity-of-products';
import { countTotalPrice } from './total-price';
import LazyLoad from 'vanilla-lazyload';
import Scrollbar from 'smooth-scrollbar';

const refs = {
  container: document.querySelector('.checkout-products-list-container'),
  productsList: document.querySelector('.checkout-products-list'),
  deleteAllProductsBtn: document.querySelector('.delete-all-products-btn'),
  emptyCartSection: document.querySelector('.empty-cart-section'),
  shoppingCartSection: document.querySelector('.shopping-cart-section'),
};
const lazyLoadInstance = new LazyLoad();
const scrollbar = Scrollbar.init(refs.container, {
  alwaysShowTracks: true,
  thumbMaxSize: 190,
  thumbMinSize: 190,
});

/**
  |============================
  | Utils
  |============================
*/
const showEmptyCartContainer = () => {
  refs.shoppingCartSection.classList.add('hidden');
  refs.emptyCartSection.classList.remove('hidden');
};
const showCartContainer = () => {
  refs.shoppingCartSection.classList.remove('hidden');
  refs.emptyCartSection.classList.add('hidden');
};
const updateScrollBarVisibility = () => {
  if (
    refs.productsList.querySelectorAll('li.checkout-products-list-item.show')
      .length <= 3
  ) {
    scrollbar.options.alwaysShowTracks = false;
  } else {
    scrollbar.options.alwaysShowTracks = true;
  }
  scrollbar.update();
};

/**
  |============================
  | Event Listeners
  |============================
*/
// REMOVE ONE PRODUC
const onItemRemoveBtnClick = event => {
  if (
    !event.target.closest('button') ||
    !event.target.closest('button').classList.contains('remove-item-btn')
  ) {
    return;
  }

  // TODO: use one object for all local storage items keys
  const productsInCart = localStorage.getItem('bucket');

  // Get product Id
  const productId = event.target.closest('li').dataset.id;

  // Remove product Id from local Storage
  const bucket = productsInCart.filter(item => item.id !== productId);
  localStorage.setItem('bucket', bucket);

  event.target.closest('li').classList.remove('show');
  event.target.closest('li').ontransitionend = function () {
    event.target.closest('li').remove();

    updateScrollBarVisibility();
    renderQuantityOrders();
    countTotalPrice();

    // If Shopping cart is empty, then show empty cart conteiner
    if (bucket.length === 0) {
      showEmptyCartContainer();
    }
  };
};

// REMOVE ALL PRODUCTS
const onRemoveAllBtnClick = event => {
  // Remove all items from bucket
  localStorage.setItem('bucket', []);

  // Remove items from a list
  for (const item of refs.productsList.children) {
    item.classList.remove('show');
  }

  renderQuantityOrders();
  // Show empty Cart container
  setTimeout(() => {
    showEmptyCartContainer();
  }, 800);
};

// CHANGE QTY
const onChangeQtyBtnClick = event => {
  const button = event.target.closest('button');
  if (
    !button ||
    (!button.classList.contains('qty-increment-btn') &&
      !button.classList.contains('qty-decrement-btn'))
  ) {
    return;
  }

  // TODO: use one object for all local storage items keys
  const productsInCart = localStorage.getItem('bucket');

  const productId = event.target.closest('li').dataset.id;
  const qtyValue = event.target
    .closest('.product-item-price-qty')
    .querySelector('.product-qty-value');

  const bucket = productsInCart.map(product => {
    if (product.id === productId) {
      const qty = button.classList.contains('qty-increment-btn')
        ? product.amount + 1
        : product.amount > 1
        ? product.amount - 1
        : 1;

      // Update UI
      qtyValue.innerHTML = qty;

      return { id: product.id, amount: qty, price: product.price };
    }
    return product;
  });

  // Update Local Storage
  localStorage.setItem('bucket', bucket);
  // Update Total Price
  countTotalPrice();
};

// Add event listener on click remove item button
refs.productsList.addEventListener('click', onItemRemoveBtnClick);
refs.productsList.addEventListener('click', onChangeQtyBtnClick); // TODO: use ONLY one event listener
refs.deleteAllProductsBtn.addEventListener('click', onRemoveAllBtnClick);

/**
  |============================
  | Rendering List of Products
  |============================
*/
const getProductsData = async productsInCart => {
  const data = await Promise.all(
    productsInCart.map(
      async product => await foodAPI.getProductById(product.id)
    )
  );

  return data;
};

const renderProductsList = async () => {
  try {
    // TODO: use one object for all local storage items keys
    const productsInCart = localStorage.getItem('bucket');

    // Get Product Data from a server
    const productsData = await getProductsData(productsInCart);

    // Show empty cart container if nothing added to the cart
    if (productsData.length === 0) {
      showEmptyCartContainer();
    } else {
      showCartContainer();
    }

    // Generate Markup and update our container
    const markup = productsData.map(productCardTemplate).join('');
    refs.productsList.innerHTML = markup;

    updateScrollBarVisibility();
    lazyLoadInstance.update();
    renderQuantityOrders();
    countTotalPrice();
  } catch (error) {
    // TODO: process Errors
    console.log(error);
  }
};

renderProductsList();
