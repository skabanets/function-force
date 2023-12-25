import { createSubscription } from '../api';

const form = document.querySelector('.js-footer-form');
const modal = document.querySelector('[data-modal]');
const failure = document.querySelector('[data-popup-email]');

const closModal = (target, class1, class2) => {
  if (target.classList.contains(class1)) {
    target.classList.toggle(class2);
    document.body.classList.toggle('scroll-hiden');
  }
};

const onSubmit = async e => {
  try {
    e.preventDefault();
    const email = document.querySelector('.js-email').value;
    await createSubscription(email);
    form.reset();

    modal.classList.toggle('is-hidden-success');
    document.body.classList.toggle('scroll-hiden');
  } catch (e) {
    const failure = document.querySelector('[data-popup-email]');
    failure.classList.toggle('is-hidden');
    document.body.classList.toggle('scroll-hiden');
  }
};

failure.addEventListener('click', e =>
  closModal(e.target, 'popup-email-backdrops', 'is-hidden')
);
modal.addEventListener('click', e =>
  closModal(e.target, 'backdrop-success', 'is-hidden-success')
);
form.addEventListener('submit', e => onSubmit(e));
