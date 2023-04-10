const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', () => {
    dropdown.querySelector('.dropdown-menu').classList.toggle('show');
  });
});