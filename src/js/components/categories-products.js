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
        markup = markup + '<li class="show-all-categories">Show all</li>';       
    } catch(error) {
        markup = '<li>Error! Try again</li>';
        // menuCategories.remove();
    }

   menuCategories.innerHTML = markup;
} 
categories.addEventListener('click', renderCategoriesList);
