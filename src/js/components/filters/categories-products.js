import { getProductsCategories } from '../api';
import { getItem, setItem } from '../storage';
import { renderCards } from '../products/product-list';
import { Notify } from 'notiflix';

const menuCategories = document.querySelector('.menu-categories-js');

const getMarkup = arr => {
  return arr
    .map(arr => {
      return `<li class='menu-filter-item' data-value='${arr}'>${arr
        .split('_')
        .join(' ')}</li>`;
    })
    .join('');
};

async function renderCategoriesList() {
  let markup = '';
  try {
    menuCategories.innerHTML = '';
    const data = await getProductsCategories();
    markup = getMarkup(data);
    markup =
      markup +
      '<li class="show-all-categories menu-filter-item" data-value="ShowAll">Show all</li>';
    menuCategories.innerHTML = markup;
  } catch (error) {
    return Notify.failure(error.message);
  }
}
renderCategoriesList();

const onClick = target => {
  const sel = document.querySelector('.js-categories-selected');
  if (!target.classList.contains('menu-filter-item')) return;
  const val = target.dataset.value;
  const data = getItem('pageData');
  if (val === 'ShowAll') {
    sel.textContent = val.split('_').join(' ');
    setItem('pageData', { ...data, category: '' });
  } else {
    sel.textContent = val.split('_').join(' ');
    setItem('pageData', { ...data, category: val });
  }

  renderCards();
};

menuCategories.addEventListener('click', e => onClick(e.target));
