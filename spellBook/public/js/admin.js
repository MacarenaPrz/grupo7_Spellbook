
let $buttonCreate = document.getElementById('button-create')//Boton que abre la ventana modal para agregar un producto
let $deleteBtn = document.querySelectorAll('#button-delete')//Boton de eliminar producto
//CREAR PRODUCTO
$buttonCreate.addEventListener('click', function() {
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
//Alert para reafirmar si esta seguro de eliminar un producto
$deleteBtn.forEach(book => {
    book.addEventListener('submit', function(event){
        event.preventDefault()
        let okDelete = confirm('Estas eguro de eliminar este producto')
        if (okDelete) {
            book.submit()
        }else {
            console.log('No se elimino')
        }
    })
})
