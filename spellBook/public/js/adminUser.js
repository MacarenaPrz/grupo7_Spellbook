// FUNCION PARA EVITAR REPETIR document.querySelector
function qs(element) {
    return document.querySelector(element)
}
//OBTENGO LOS ELEMENTOS DEL MODAL
let $modalClearUser = qs('#modal-clear-user'),
$modalButtonClearUser = qs('#modal-button-clear-user'),
$modalButtonCancelClearUser = qs('#modal-button-cancel-clear-user')

let $deleteBtnUser = document.querySelectorAll('#button-delete-user')//Boton de eliminar 

//Alert para reafirmar si esta seguro de eliminar un Usuario
$deleteBtnUser.forEach(user => {
    user.addEventListener('submit', function(event){
        event.preventDefault()
        $modalClearUser.style.display = "flex"
        $modalButtonClearUser.addEventListener('click', () =>{
             user.submit()
        })
        $modalButtonCancelClearUser.addEventListener('click', () => {
            $modalClearUser.style.display = "none"
        })
    })
})