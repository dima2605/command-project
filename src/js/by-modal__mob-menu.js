(() => {
  const refs = {
    openModalBtn: document.querySelector('[buy-modal__mob-menu-open]'),
    closeModalBtn: document.querySelector('[buy-modal__mob-menu-close]'),
    modal: document.querySelector('[header-modal1]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
