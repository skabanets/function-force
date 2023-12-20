const dropdown = document.querySelectorAll('.dropdown-filter');
function toggleClass(target) {
  const drFilter = target.closest('.dropdown-filter');
  drFilter.childNodes[5].classList.toggle("menu-open");
}
dropdown.forEach(item => {
item.addEventListener('click', (e) => toggleClass(e.target))
})

function closeDropdowns(event) {
  dropdown.forEach(item => {
    const drFilter = item.closest('.dropdown-filter');
    const menu = drFilter.childNodes[5];

    if (!drFilter.contains(event.target) && !menu.contains(event.target)) {
      menu.classList.remove("menu-open");
    }
  });
}

document.addEventListener('click', closeDropdowns);
