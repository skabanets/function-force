const refs = {
  closeModalBtn: document.querySelector('[data-popup-close]'),
  modal: document.querySelector('[data-popup-email]'),
};

refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
  document.body.classList.toggle('scroll-hiden');
}
