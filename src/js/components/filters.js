const dropdown = document.querySelectorAll('.dropdown-filter');
function toggleClass(target) {
  const drFilter = target.closest('.dropdown-filter');
  console.log(drFilter);
  drFilter.childNodes[5].classList.toggle("menu-open");
}
dropdown.forEach(item => {
item.addEventListener('click', (e) => toggleClass(e.target))
}
  )