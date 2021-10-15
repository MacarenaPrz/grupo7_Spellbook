const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const searchIcon = document.querySelector('.search-icon');
const wizard = document.querySelector('.wizard');
window.addEventListener('load', () => {

    burger.addEventListener('click', () => {
        document.querySelector('.line1').classList.toggle('l-top');
        document.querySelector('.line2').classList.toggle('l-center');
        document.querySelector('.line3').classList.toggle('l-botton');
        menu.classList.toggle('menu--open');
        document.querySelector('.card-user').classList.remove('card-open');
        document.querySelector('.search').classList.remove('search-open');
    });

    searchIcon.addEventListener('click', () => {
        document.querySelector('.search').classList.toggle('search-open');
        document.querySelector('.line1').classList.remove('l-top');
        document.querySelector('.line2').classList.remove('l-center');
        document.querySelector('.line3').classList.remove('l-botton');
        menu.classList.remove('menu--open');
        document.querySelector('.card-user').classList.remove('card-open');
    });

    wizard.addEventListener('click', () => {
        document.querySelector('.card-user').classList.toggle('card-open');
        document.querySelector('.line1').classList.remove('l-top');
        document.querySelector('.line2').classList.remove('l-center');
        document.querySelector('.line3').classList.remove('l-botton');
        menu.classList.remove('menu--open');
        document.querySelector('.search').classList.remove('search-open');
    });

    window.onscroll = () => {
        document.querySelector('.line1').classList.remove('l-top');
        document.querySelector('.line2').classList.remove('l-center');
        document.querySelector('.line3').classList.remove('l-botton');
        menu.classList.remove('menu--open');
        document.querySelector('.search').classList.remove('search-open');
        document.querySelector('.card-user').classList.remove('card-open');
    };

});