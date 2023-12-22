import { cards, calculateLimit } from './product-list';
import { getProducts } from '../api';

const mobileDisp = () => {
  const width = window.innerWidth;
  return width < 376 ? true : false;
};

const displayPagination = async () => {
  let page = 1;
  const list = document.querySelector('.pg-list');
  const leftBtns = document.querySelector('.left-btns');
  const rightBtns = document.querySelector('.right-btns');

  const { totalPages } = await getProducts({
    sort: { field: 'byABC', value: true },
    limit: calculateLimit(),
  });
  const arr = [];

  for (let i = 0; i < totalPages; i++) {
    const isActive = page === i + 1;
    const isDisabled =
      (page === 1 && i === 0) || (page === totalPages && i === totalPages - 1);
    const classes = `pg-item ${isActive ? 'pg-active' : ''} ${
      isDisabled ? 'dis' : ''
    }`;
    arr.push(`<li class="${classes}" data-pg="${i + 1}">${i + 1}</li>`);
  }

  if (mobileDisp()) {
    const dots = '<li class="pg-item dotDis">...</li>';
    arr.splice(1, totalPages - 2, dots);
    console.log(arr);
  } else {
    const dots = '<li class="pg-item dotDis">...</li>';
    arr.splice(2, totalPages - 4, dots);
  }

  list.insertAdjacentHTML('beforeend', arr.join(''));
  updateButtonState();

  const changePage = target => {
    if (target.classList.contains('pg-list')) return;

    const currentActive = document.querySelector('.pg-active');
    currentActive.classList.remove('pg-active');

    page = target.closest('.pg-item').dataset.pg;
    target.classList.add('pg-active');

    updateButtonState();
    cards(page);
  };

  const changeLeft = target => {
    if (page == 1 || target.classList.contains('left-btns')) return;
    const parent = target.closest('.pg-arrow');
    parent.classList.contains('js-btn-1') ? page-- : (page = 1);
    cards(page);
    updateButtonState();
    step();
  };
  const changeRight = target => {
    if (page == totalPages || target.classList.contains('right-btns')) return;
    const parent = target.closest('.pg-arrow');
    parent.classList.contains('js-btn-1') ? page++ : (page = totalPages);
    cards(page);
    updateButtonState();
    step();
  };

  const step = () => {
    const active = document.querySelector('.pg-active');
    active.classList.remove('pg-active');
    if (mobileDisp()) {
      page > 1 && page < totalPages - 1
        ? list.childNodes[1].classList.toggle('pg-active')
        : list.childNodes[
            page < 2 ? page - 1 : page + 2 - totalPages
          ].classList.add('pg-active');
    } else {
      page > 2 && page < totalPages - 2
        ? list.childNodes[2].classList.toggle('pg-active')
        : list.childNodes[
            page < 3 ? page - 1 : page + 4 - totalPages
          ].classList.add('pg-active');
    }
  };

  function updateButtonState() {
    leftBtns.childNodes[1].classList.toggle('dis', page == 1);
    leftBtns.childNodes[3].classList.toggle('dis', page == 1);
    rightBtns.childNodes[1].classList.toggle('dis', page == totalPages);
    rightBtns.childNodes[3].classList.toggle('dis', page == totalPages);
    list.childNodes[0].classList.toggle('dis', page == 1);
    mobileDisp()
      ? list.childNodes[2].classList.toggle('dis', page == totalPages)
      : list.childNodes[4].classList.toggle('dis', page == totalPages);
  }

  list.addEventListener('click', e => changePage(e.target));
  leftBtns.addEventListener('click', e => changeLeft(e.target));
  rightBtns.addEventListener('click', e => changeRight(e.target));
};

displayPagination();
