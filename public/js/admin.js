//CREAR PRODUCTO
document.getElementById('button-create').addEventListener('click', function() {
    document.querySelector('.product-form').style.display = 'flex';
});
//EDITAR PRODUCTO
document.querySelector('.button-edit').addEventListener('click', function() {
    document.querySelector('.product-form').style.display = 'flex';
});

document.querySelector('.close-create').addEventListener('click', function() {
    document.querySelector('.product-form').style.display = 'none';
})