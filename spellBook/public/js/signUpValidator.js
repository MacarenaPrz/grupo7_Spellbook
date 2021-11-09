window.addEventListener("load", () => {
    let $inputName = document.querySelector("#register-name"),
    $inputEmail = document.querySelector("#register-email"),
    $inputPassword = document.querySelector("#register-password"),
    $inputConfirm = document.querySelector("#register-confirm"),
    $errorsName = document.querySelector("#errorsName"),
    $errorsEmail = document.querySelector("#errorsEmail"),
    $errorsPass = document.querySelector("#errorsPass"),
    $errorsPass2 = document.querySelector("#errorsPass2"),
    $check = document.querySelector('#check')
    $checkError = document.querySelector('#checkError')
    $submitButton = document.querySelector(".btn__send"),
    $form = document.querySelector("#form");
    $formError = document.querySelector('#formError')

    let icono = "<i class='fas fa-exclamation-circle'></i>"
    let validationsErrors = true

    let regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z]).{8,12}$/;

    $inputName.addEventListener("blur",() => {
        switch (true) { // compara los casos que den true
            case !$inputName.value.trim():
                $errorsName.innerHTML = `${icono}El campo nombre es obligatiorio`
                $inputName.style.borderColor = "red"
                validationsErrors = false
                break;
            case !regExAlpha.test($inputName.value):
                $errorsName.innerHTML = `${icono}Ingresa un nombre valido`
                $inputName.style.borderColor = "red"
                validationsErrors = false
                break;
            default:
                $inputName.style.borderColor = "#C1A1D3"
                $errorsName.innerHTML = ""
                validationsErrors = true
                break;
        }
    })
   
    $inputEmail.addEventListener("blur",() => {
        switch (true) {
            case !$inputEmail.value.trim():
                $errorsEmail.innerHTML = `${icono} El campo E-mail es obligatorio`
                $inputEmail.style.borderColor = "red"
                validationsErrors = false
                break;
            case !regExEmail.test($inputEmail.value):
                $errorsEmail.innerHTML = `${icono} Ingresa un E-mail valido`
                $inputEmail.style.borderColor = "red"
                validationsErrors = false
                break;
            default:
                $inputEmail.style.borderColor = "#C1A1D3"
                $errorsEmail.innerHTML = ""
                validationsErrors = true
                break;
        }
    })
    $inputPassword.addEventListener("blur",() => {
        switch (true) {
            case !$inputPassword.value.trim():
                $errorsPass.innerHTML = `${icono} El campo contraseña es obligatorio`
                $inputPassword.style.borderColor = "red"
                validationsErrors = false
                break;
            case !regExPass.test($inputPassword.value):
                $errorsPass.innerHTML = `${icono} La contraseña debe ser alfanumerica y debe tener 8 caracteres`
                $inputPassword.style.borderColor = "red"
                validationsErrors = false
                break;
            default:
                $inputPassword.style.borderColor = "#C1A1D3"
                $errorsPass.innerHTML = ""
                validationsErrors = true
                break;
        }
    })
    $inputConfirm.addEventListener("blur",() => {
        switch (true) {
            case !$inputConfirm.value.trim():
                $errorsPass2.innerHTML = `${icono} Debes reingresar tu contraseña`
                $inputConfirm.style.borderColor = "red"
                validationsErrors = false
                break;
            case $inputPassword.value != $inputConfirm.value:
                $errorsPass2.innerHTML = `${icono} Las contraseñas no coinciden`
                $inputPass2.style.borderColor = "red"
                validationsErrors = false
                break;
            default:
                $inputConfirm.style.borderColor = "#C1A1D3"
                $errorsPass2.innerHTML = ""
                validationsErrors = true
                break;
        }
    })
    $check.addEventListener('click', function (){
        $check.value = "on"
        $check.classList.toggle('valid')
        $check.classList.remove('invalid')
        $checkError.innerHTML = ""
    })

    $form.addEventListener("submit", (e) => {
        let error = false;
        e.preventDefault();
        let elementosForm = $form.elements;
        for (let index = 0; index < elementosForm.length - 1; index++) {
            console.log(elementosForm[index].value)
            if (elementosForm[index].value == "" ) {
                elementosForm[index].classList.add('invalid')
                //llenar un span con errores
                $formError.innerHTML = "Los campos señalados deben llenarse"
                error = true
            }
            
        }
        if(!$check.checked){
            $check.classList.add('valid');
            $checkError.innerHTML = "Debes aceptar los términos y condiciones"
            error = true
        }
        if (!error && validationsErrors) {            
            $form.submit() 
            alert("Felicidades ya te registrarte, es hora de iniciar sesión")
        }  
    } )
})