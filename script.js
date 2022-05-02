const btnNavOpenEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.layout');
const navListLinkEl = document.querySelectorAll('.header__navListLink');
const btnNavEl = document.querySelector('.btn--nav');

btnNavOpenEl.addEventListener('click', () => {
    headerEl.classList.toggle('nav-open');
});

document.querySelector('body').addEventListener('keydown', () => {
    headerEl.classList.remove('nav-open');
});


navListLinkEl.forEach((link) => {
    link.addEventListener('click', function() {
        headerEl.classList.toggle('nav-open')
    });
});

btnNavEl.addEventListener('click', () => {
    headerEl.classList.toggle('nav-open');
});

const sectionHeroEl = document.querySelector(".hero-section");

const obs = new IntersectionObserver(function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
        document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
        document.body.classList.remove("sticky");
    }

}, {root: null, threshold: 0, rootMargin: "-58px"});
obs.observe(sectionHeroEl);
