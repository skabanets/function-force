import { getProductById } from '../api';
import { getMarkup } from './modal-markup';

const refs = {
  openModal: document.querySelector('.products-container'),
  closeModalBtn: document.querySelector('.popup-modal-close'),
  modal: document.querySelector('.modal-backdrops'),
  modalPattern: document.querySelector('.modal-window'),
  modalContainer: document.querySelector('.modal-main-content-box'),
  modalPrice: document.querySelector('.modal-price'),
  modalPicture: document.querySelector('.modal-pic'),
  modalContent: document.querySelector('.modal-main-content'),
};

refs.openModal.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.modal.addEventListener('click', handleModalClick);

async function toggleModal(event) {
  if (
    event?.target.closest('.js-buy-button') ||
    event?.target.closest('.pagination-container')
  )
    return;

  refs.modal.classList.toggle('is-hidden');

  if (!refs.modal.classList.contains('is-hidden')) {
    try {
      const productID = event.target.closest('li').dataset.id;
      const product = await getProductById(productID);
      const markup = getMarkup(product);

      refs.modalPicture.setAttribute('src', product.img);
      refs.modalContent.innerHTML = markup;
      refs.modalPrice.innerHTML = `&#36;${product.price}`;

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
