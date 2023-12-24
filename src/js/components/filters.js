const dropdown = document.querySelectorAll('.dropdown-filter');

function toggleClass(target) {
  const drFilter = target.closest('.dropdown-filter');
  drFilter.childNodes[5].classList.toggle('menu-open');
  document.addEventListener('click', closeDropdowns);
}

dropdown.forEach(item => {
  item.addEventListener('click', e => toggleClass(e.target));
});

function closeDropdowns(event) {
  const menu = document.querySelector('.menu-open');
  console.log(menu);
  // if (event.target !== event.target.closest(`.dropdown-filter`)) {
  //   menu?.classList.toggle('menu-open');
  //   document.removeEventListener('click', closeDropdowns)
  // }

  if (!event.target.closest('.dropdown-filter')) {
    menu?.classList.toggle('menu-open');
    document.removeEventListener('click', closeDropdowns);
  }
}
