(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open1-products]'),
    closeModalBtn: document.querySelector('[data-modal-close1-products]'),
    modal: document.querySelector('[data-modal1-products]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
