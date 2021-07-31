const btn = document.querySelector('.btn');
const nav = document.querySelector('.nav');
const links = document.querySelectorAll('.menu__items');

btn.addEventListener('click',()=>{
    let icon = document.getElementById('icon');
    icon.classList.toggle('fa-bars');
    nav.classList.toggle('open');
    links.forEach(link =>{
        link.classList.toggle('fade');
    });
    icon.classList.toggle('fa-times');
});