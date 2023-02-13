document.addEventListener('DOMContentLoaded', function () {
    const HEADER = document.querySelector('.header');
    const MENU_BUTTON = HEADER.querySelector('.menu-button');
    MENU_BUTTON.addEventListener('click', function () {
        HEADER.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    const MENU_LINK = document.querySelectorAll('.menu__link');
    MENU_LINK.forEach(item => item.addEventListener('click', function(e) {
        e.preventDefault();
        const ID = item.getAttribute('href').slice(1);
        document.getElementById(ID).scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
        HEADER.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }));

    const DOWN = document.querySelector('.about__arrow');
    DOWN.addEventListener('click', () => {
        const WORKS = document.querySelector('.works');
        WORKS.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

