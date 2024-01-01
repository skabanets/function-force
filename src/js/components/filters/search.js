import { getItem, setItem } from '../storage';
import { renderCards } from '../products/product-list';

const form = document.querySelector('.form-search');

form.addEventListener('submit', e => {
  e.preventDefault();
  const inp = form[0].value;
  const data = getItem('pageData');
  setItem('pageData', { ...data, keyword: inp });

  renderCards();
});
