
let $deleteBtnUser = document.querySelectorAll('#button-delete-user')//Boton de eliminar 
//Alert para reafirmar si esta seguro de eliminar un Usuario
$deleteBtnUser.forEach(user => {
    user.addEventListener('submit', function(event){
        event.preventDefault()
        let okDelete = confirm('Estas seguro de eliminar este usuario')
        if (okDelete) {
            user.submit()
        }else {
            console.log('No se elimino')
        }
    })
})