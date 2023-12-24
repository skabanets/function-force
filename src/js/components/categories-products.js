import { getProductsCategories } from '../api'

const menuCategories = document.querySelector('.menu-categories-js');
const categories = document.querySelector('.categories-js');

const getMarkup = arr => {
    return arr.map(arr => {
        return `<li class='menu-filter-item' data-value='${arr}'>${arr}</li>`;
    }).join('');
}

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
    markup = '<li>Error! Try again</li>';
  }
}
renderCategoriesList();

const onClick = target => {
  const sel = document.querySelector('.js-categories-selected');
  if (!target.classList.contains('menu-filter-item')) return;
  const val = target.dataset.value;
  const data = getItem('pageData');
  if (val === 'ShowAll') {
    sel.textContent = val;
    setItem('pageData', { ...data, category: '' });
  } else {
    sel.textContent = val
    setItem('pageData', { ...data, category: val });
  }

  cards();
};

menuCategories.addEventListener('click', e => onClick(e.target));

