import { getItem, setItem } from '../storage';
import { cards } from './product-list';

const list = document.querySelector('.js-menu-sort');
list.insertAdjacentHTML(
  'beforeend',
  `          <li class="menu-sort-item" data-value='${JSON.stringify({
    byABC: true,
  })}'>A to Z</li>
          <li class="menu-sort-item" data-value='${JSON.stringify({
            byABC: false,
          })}'>Z to A</li>
          <li class="menu-sort-item" data-value='${JSON.stringify({
            byPrice: true,
          })}'>Cheap</li>
          <li class="menu-sort-item" data-value='${JSON.stringify({
            byPrice: false,
          })}'>Expensive</li>
          <li class="menu-sort-item" data-value='${JSON.stringify({
            byPopularity: false,
          })}'>Popular</li>
          <li class="menu-sort-item" data-value='${JSON.stringify({
            byPopularity: true,
          })}'>Not popular</li>
          <li class="menu-sort-item" data-value='${JSON.stringify({
            all: true,
          })}'>Show all</li>`
);

const onClick = target => {
  if (!target.classList.contains('menu-sort-item')) return;
  const val = JSON.parse(target.dataset.value);
  const data = getItem('pageData');
  if (val.all) setItem('pageData', {});
  else setItem('pageData', { ...data, ...val });
  cards();
};

list.addEventListener('click', e => onClick(e.target));
