import { getItem, setItem } from '../storage';
import { cards } from './product-list';

const form = document.querySelector('.form-search');

form.addEventListener('submit', e => {
  e.preventDefault();

  console.log(334);
  const inp = form[0].value;
  const data = getItem('pageData');
  setItem('pageData', { ...data, keyword: inp });
 
  cards()
});
