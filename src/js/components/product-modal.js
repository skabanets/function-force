import { getProductById } from '../api';
import { buyItem } from './buy-product';
import { getMarkup } from './product-modal-markup';

const refs = {
  popular: document.querySelector('.popular-product-list'),
  products: document.querySelector('.js-cart-list'),
  discount: document.querySelector('.js-discount-list'),
  modal: document.querySelector('.modal-backdrops'),
};

refs.popular.addEventListener('click', toggleModal);
refs.products.addEventListener('click', toggleModal);
refs.discount.addEventListener('click', toggleModal);

async function toggleModal(event) {
  try {
    if (
      event?.target.closest('ul')?.querySelector('.empty-storage') ||
      event?.target.closest('.js-buy-button') ||
      event?.target.nodeName === 'UL' ||
      event?.target.classList.contains('list-loader')
    )
      return;
    refs.modal.classList.toggle('is-hidden');
    if (!refs.modal.classList.contains('is-hidden')) {
      const productID = event.target.closest('li').dataset.id;
      const product = await getProductById(productID);
      const markup = getMarkup(product);
      const modalBackdrop = document.querySelector('.modal-backdrops');

      modalBackdrop.insertAdjacentHTML(`beforeend`, markup);
      const modalPattern = document.querySelector('.modal-window');

      modalPattern.addEventListener('click', e => {
        if (
          !e.target.closest('button') ||
          !e.target.closest('button').classList.contains('js-buy-button')
        ) {
          return;
        }

        buyItem(e.target.closest('.js-product-item').dataset.id);
      });

      const closeModalBtn = document.querySelector('.popup-modal-close');

      refs.modal.addEventListener('click', handleModalClick);
      closeModalBtn.addEventListener('click', toggleModal);
      window.addEventListener('keydown', handleEscKeyPress);
      document.body.classList.toggle('scroll-hiden');
    } else {
      refs.modal.innerHTML = '';
      document.body.classList.toggle('scroll-hiden');
      // Знімаємо прослуховувач клавіші 'Esc' після закриття вікна
      window.removeEventListener('keydown', handleEscKeyPress);
    }
  } catch (error) {
    console.log(error);
  }
}

function handleEscKeyPress(event) {
  // Закриваємо модальне вікно при натисканні клавіші 'Esc'
  if (event.code === 'Escape') {
    toggleModal();
  }
}

function handleModalClick(event) {
  // Закриваємо модальне вікно, якщо клікнуто поза його межами
  if (event.target.classList.contains('modal-backdrops')) {
    toggleModal();
  }
}
