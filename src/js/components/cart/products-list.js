import productCardTemplate from './template';
import * as localStorage from '../../storage';
import * as foodAPI from '../../api';
import { renderQuantityOrders } from '../basket-quantity-of-products';
import { countTotalPrice } from './total-price';
import LazyLoad from 'vanilla-lazyload';
import Scrollbar from 'smooth-scrollbar';
import { Notify } from 'notiflix';

const refs = {
  container: document.querySelector('.checkout-products-list-container'),
  productsList: document.querySelector('.checkout-products-list'),
  deleteAllProductsBtn: document.querySelector('.delete-all-products-btn'),
  emptyCartSection: document.querySelector('.empty-cart-section'),
  shoppingCartSection: document.querySelector('.shopping-cart-section'),
  shoppingCartOrderForm: document.querySelector('.shopping-cart-order-form'),
  checkoutSuccessModal: document.querySelector('#checkout-success-modal'),
  modalCloseBtn: document.querySelector('.order-success-button'),
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
  refs.shoppingCartSection.classList.add('is-hidden-height-0');
  refs.emptyCartSection.classList.remove('is-hidden-height-0');
};
const showCartContainer = () => {
  refs.shoppingCartSection.classList.remove('is-hidden-height-0');
  refs.emptyCartSection.classList.add('is-hidden-height-0');
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

  updateScrollBarVisibility();
  renderQuantityOrders();
  countTotalPrice();

  event.target.closest('li').classList.remove('show');
  event.target.closest('li').ontransitionend = function () {
    event.target.closest('li').remove();

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

  renderQuantityOrders();

  // Remove items from a list
  for (const item of refs.productsList.children) {
    item.classList.remove('show');
  }

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

const onModalCloseBtnClick = () => {
  refs.checkoutSuccessModal.classList.add('is-hidden-success');
};

const handleEscKeyPress = event => {
  if (event.code === 'Escape') {
    refs.checkoutSuccessModal.classList.add('is-hidden-success');
    window.removeEventListener('keydown', handleEscKeyPress);
  }
};

const onShoppingCartOrderSubmit = async event => {
  event.preventDefault();

  const email = event.target.elements.email.value;
  const productsInCart = localStorage
    .getItem('bucket')
    .map(product => ({ productId: product.id, amount: product.amount }));

  try {
    const order = await foodAPI.createOrder(email, productsInCart);

    // Cleanup form: email field
    event.target.reset();
    // Update Local Storage
    localStorage.setItem('bucket', []);
    // Recalculate Cart qty
    renderQuantityOrders();
    // Show empty Cart container
    showEmptyCartContainer();

    refs.checkoutSuccessModal.classList.remove('is-hidden-success');

    window.addEventListener('keydown', handleEscKeyPress);
    document.body.classList.toggle('scroll-hiden');
  } catch (error) {
    // TODO: process Errors
    return Notify.failure(error.message);
  }
};

// Add event listener on click remove item button
refs.productsList.addEventListener('click', onItemRemoveBtnClick);
refs.productsList.addEventListener('click', onChangeQtyBtnClick); // TODO: use ONLY one event listener
refs.deleteAllProductsBtn.addEventListener('click', onRemoveAllBtnClick);
refs.modalCloseBtn.addEventListener('click', onModalCloseBtnClick);
refs.shoppingCartOrderForm.addEventListener(
  'submit',
  onShoppingCartOrderSubmit
);

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
    return Notify.failure(error.message);
  }
};

renderProductsList();
