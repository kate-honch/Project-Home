const header = document.querySelector('.header');
const menu = document.querySelector('.header__menu');
const menuClose = document.querySelector('.header__menu--close');
const menuList = document.querySelector('.header__menu--block');
const btnNext = document.querySelector('.home__btn--next');
const btnPrev = document.querySelector('.home__btn--prev');
const slides = document.querySelector('.home__slides');
const allSlides = document.querySelectorAll('.home__slide');
const placeForNumberCurrentSlide = document.querySelector('.home__number--current');
const placeForNumberSlides = document.querySelector('.home__number--all');

let numberSlide = 1;
let counter = 0;
let slidesLength = allSlides.length;
placeForNumberCurrentSlide.innerText = `0${numberSlide}`;
placeForNumberSlides.innerText = `0${slidesLength}`;

menu.addEventListener('click', () => {
    header.classList.add('active');
    menuList.classList.add('active');
    menuClose.classList.add('active');
    menu.classList.add('hover');
});

menuClose.addEventListener('click', () => {
    header.classList.remove('active');
    menuList.classList.remove('active');
    menuClose.classList.remove('active');
    menu.classList.remove('hover');
});

btnNext.addEventListener('click',() => {
    if(numberSlide === slidesLength) {
        return
    } else {
        placeForNumberCurrentSlide.innerText = `0${++numberSlide}`;
        slides.style.transform = `translateX(-${++counter * 100}%)`;
    }
});

btnPrev.addEventListener('click', () => {
    if(numberSlide === 1) {
        placeForNumberCurrentSlide.innerText = `0${numberSlide}`;
        return
    } else {
        placeForNumberCurrentSlide.innerText = `0${--numberSlide}`;
        slides.style.transform = `translateX(-${--counter * 100}%)`;
        btnPrev.classList.remove('disabled');
    }
});
