(() => {
  const refs = {
    openMenuBtn: document.querySelector('.products-description-btn-third'),
    menu: document.querySelector('.products__overlay-third '),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.menu.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
