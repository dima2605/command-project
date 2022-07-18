window.addEventListener('scroll', function () {
  var scroll = document.querySelector('.up');
  scroll.classList.toggle('active', window.scrollY > 500);
});
function scrollTopTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
