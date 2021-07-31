//CREAR PRODUCTO
document.getElementById('button-create').addEventListener('click', function() {
    document.querySelector('.product-form').style.display = 'flex';
});

document.querySelector('.close-create').addEventListener('click', function() {
    document.querySelector('.product-form').style.display = 'none';
})