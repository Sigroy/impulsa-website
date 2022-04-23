const btnNavOpenEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');
const btnNavCloseEl = document.querySelector("[name='close-outline']");

btnNavOpenEl.addEventListener('click', () => {
    headerEl.classList.toggle('nav-open');
});