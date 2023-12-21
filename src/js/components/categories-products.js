import { getProductsCategories } from '../api'

const menuCategories = document.querySelector('.menu-categories-js');
const categories = document.querySelector('.categories-js');

const selectProducts = arr => {
    return arr.map(arr => {
        return `<li class='menu-filter-item' data-value='${arr}'>${arr}</li>`;
    }).join('');
}

async function productsName() {
    menuCategories.innerHTML = '';
    const data =  await getProductsCategories();
    const menu = selectProducts(data)
    menuCategories.insertAdjacentHTML('beforeend', menu)

} 
 categories.addEventListener('click', productsName)
