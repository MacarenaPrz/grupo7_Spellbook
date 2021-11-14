// FUNCION PARA EVITAR REPETIR document.querySelector
function qs(element) {
    return document.querySelector(element)
}

window.addEventListener("load",()=>{
    let $email = document.querySelector("#name"),
    $form = document.querySelector("form"),
    $emailError = document.querySelector("#nameError"),
    icono = "<i class='fas fa-exclamation-circle'></i>"
    
    $email.addEventListener("blur" , () => {
        switch (true) {
            case !$email.value.trim():
                $emailError.innerHTML = `${icono} Debes ingresar un nombre`
                $email.style.borderColor = "red"
                break;
        
            default:
                $emailError.innerHTML = ``
                $email.style.borderColor = "#C1A1D3"
                break;
        }
    })

    $form.addEventListener("submit", (e) => {
        let error = false;
        e.preventDefault();
        let elementosForm = $form.elements;
        for (let index = 0; index < elementosForm.length - 1; index++) {
            if (elementosForm[index].value.trim() == "" ) {
                elementosForm[index].style.borderColor = "red"
                error = true
            }
            
        }
        if(!error){
            console.log('Todo bien');
            $formProduct.submit()
        }
    } )

    //OBTENGO LOS ELEMENTOS DEL MODAL
    let $modalClearUser = qs('#modal-clear-user'),
    $modalButtonClearUser = qs('#modal-button-clear-user'),
    $modalButtonCancelClearUser = qs('#modal-button-cancel-clear-user')


    let $deleteUser = document.querySelector('#delete-user')//Boton de eliminar 
//Alert para reafirmar si estas seguro de eliminarte
    console.log($deleteUser)
    $deleteUser.addEventListener('submit', function(event){
        event.preventDefault()
            $modalClearUser.style.display = "flex"
            $modalButtonClearUser.addEventListener('click', () =>{
                 $deleteUser.submit()
            })
            $modalButtonCancelClearUser.addEventListener('click', () => {
                $modalClearUser.style.display = "none"
            })
    })
})
