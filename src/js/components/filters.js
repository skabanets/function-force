document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown-filter");
  const caretIcons = document.querySelectorAll(".form-click-filter");
  const menuFilters = document.querySelectorAll(".menu-filter");

  caretIcons.forEach(function (icon, index) {
    icon.addEventListener("click", function () {
      menuFilters.forEach(function (menu, i) {
        if (i !== index) {
          menu.classList.remove("menu-open");
        }
      });

      menuFilters[index].classList.toggle("menu-open");
    });
  });

  menuFilters.forEach(function (menu) {
    const menuItems = menu.querySelectorAll("li");
    menuItems.forEach(function (item) {
      item.addEventListener("click", function () {
        menu.classList.remove("menu-open");
      });
    });
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".dropdown-filter")) {
      menuFilters.forEach(function (menu) {
        menu.classList.remove("menu-open");
      });
    }
  });
});