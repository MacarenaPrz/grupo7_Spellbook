// FUNCION PARA EVITAR REPETIR document.querySelector
function qs(element) {
    return document.querySelector(element)
}

window.addEventListener("load",()=>{
    let $name = document.querySelector("#name"),
    $nameError = document.querySelector("#nameError"),
    $form = document.querySelector("#editForm"),
    $formError = qs('#formError'),
    $lastName = qs("#firstName"),
    $lastNameError = qs("#firstNameError"),
    $location = qs('#location'),
    $locationError = qs('#locationError'),
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,

    icono = "<i class='fas fa-exclamation-circle'></i>";
    let validationsErrorsName = true,
    validationsErrorsLastName = true,
    validationsErrorsLocation = true


    $name.addEventListener("blur" , () => {
        switch (true) {
            case !$name.value.trim():
                $nameError.innerHTML = `${icono} Debes ingresar un nombre`
                $name.classList.add('invalid')
                break;
            case !regExAlpha.test($name.value):
                $nameError.innerHTML = `${icono}Ingresa un nombre válido`
                $name.classList.add('invalid')
                validationsErrorsName = false
                break
            default:
                $nameError.innerHTML = ``
                $name.style.borderColor = "#C1A1D3"
                validationsErrorsName = true
                break;
        }
    })

    $lastName.addEventListener("blur", () => {
        switch (true) {
            case !regExAlpha.test($lastName.value):
                $lastNameError.innerHTML = `${icono} Ingresa un apellido válido`
                $lastName.classList.add('invalid')
                validationsErrorsLastName = false
                break;

        
            default:
                $lastNameError.innerHTML = ''
                $lastName.style.borderColor = "#C1A1D3"
                validationsErrorsLastName = true
                break;
        }
    })
    $location.addEventListener('blur', () => {
        switch (true) {
            case !regExAlpha.test($location.value):
                $locationError.innerHTML = `${icono} Ingresa un lugar válido`
                $location.classList.add('invalid')
                validationsErrorsLocation = false
                break;

        
            default:
                $locationError.innerHTML = ''
                $location.style.borderColor = "#C1A1D3"
                validationsErrorsLocation = true
                break;
        }
    })
   
    $form.addEventListener("submit", function(event) {
        let error = false;
        event.preventDefault();
        let elementosForm = this.elements;
        for (let index = 0; index < elementosForm.length - 1; index++) {
            if (elementosForm[index].value == "" && elementosForm[index].name == "name" ) {
                elementosForm[index].style.borderColor = "red"
                $formError.innerHTML = `${icono}Algunos campos deben modificarse`
                error = true
            }            
        }
        if(!error && validationsErrorsName && validationsErrorsLastName && validationsErrorsLocation){
            console.log('Todo bien');
            $form.submit()
        }
    } )

    //OBTENGO LOS ELEMENTOS DEL MODAL
    let $modalClearUser = qs('#modal-clear-user'),
    $modalButtonClearUser = qs('#modal-button-clear-user'),
    $modalButtonCancelClearUser = qs('#modal-button-cancel-clear-user')


    let $deleteUser = document.querySelector('#delete-user')//Boton de eliminar 
//Alert para reafirmar si estas seguro de eliminarte
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
