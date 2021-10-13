//CREAR PRODUCTO
document.getElementById('button-create').addEventListener('click', function() {
    document.querySelector('.product-form').style.display = 'flex';
});
document.querySelector('.close-create').addEventListener('click', function() {
    document.querySelector('.product-form').style.display = 'none';
    })
document.querySelector('#cancel').addEventListener('click', function() {
    document.querySelector('.product-form').style.display = 'none';
    })
//EDITAR PRODUCTO
document.querySelector('.button-edit').addEventListener('click', function() {
    document.querySelector('.productEdit-form').style.display = 'flex';
});
document.querySelector('.closeEdit-create').addEventListener('click', function() {
    document.querySelector('.productEdit-form').style.display = 'none';
})
