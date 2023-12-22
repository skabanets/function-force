import { getProductById } from '../api';
import { getMarkup } from './modal-markup';

const refs = {
  openModal: document.querySelector('.js-cart-list'),
  closeModalBtn: document.querySelector('.popup-modal-close'),
  modal: document.querySelector('.modal-backdrops'),
  modalPattern: document.querySelector('.modal-window'),
  modalContainer: document.querySelector('.modal-main-content-box'),
  modalPrice: document.querySelector('.modal-price'),
  modalPicture: document.querySelector('.modal-pic'),
  modalContent: document.querySelector('.modal-main-content'),
};
console.log(refs.closeModalBtn);

refs.openModal.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.modal.addEventListener('click', handleModalClick);

async function toggleModal(event) {
  if (event && event.target.classList.contains('buy-svg')) {
    return;
  }

  refs.modal.classList.toggle('is-hidden');

  if (!refs.modal.classList.contains('is-hidden')) {
    console.log(event.target.closest('li').dataset.id);

    try {
      const productID = event.target.closest('li').dataset.id;
      const product = await getProductById(productID);
      console.log(product);
      const markup = getMarkup(product);

      refs.modalPicture.setAttribute('src', product.img);
      refs.modalContent.innerHTML = markup;
      refs.modalPrice.innerHTML = `$${product.price}`;

      window.addEventListener('keydown', handleEscKeyPress);
    } catch (error) {}
  } else {
    refs.modalPicture.setAttribute('src', '');
    refs.modalContent.innerHTML = '';
    refs.modalPrice.innerHTML = '';
    // Знімаємо прослуховувач клавіші 'Esc' після закриття вікна
    window.removeEventListener('keydown', handleEscKeyPress);
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
  if (event.target === refs.modal) {
    toggleModal();
  }
}
