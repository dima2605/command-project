(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-contacs-open]'),
    closeModalBtn: document.querySelector('[data-modal-contacs-close]'),
    modal: document.querySelector('[data-modal-contacs]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
