window.addEventListener("load", () => {
    let $inputName = document.querySelector("#register-name"),
    $inputEmail = document.querySelector("#register-email"),
    $inputPassword = document.querySelector("#register-password"),
    $inputConfirm = document.querySelector("#register-confirm"),
    $errorsName = document.querySelector("#errorsName"),
    $errorsEmail = document.querySelector("#errorsEmail"),
    $errorsPass = document.querySelector("#errorsPass"),
    $errorsPass2 = document.querySelector("#errorsPass2"),
    $submitButton = document.querySelector(".btn__send"),
    $form = document.querySelector("form");
    
    let icono = "<i class='fas fa-exclamation-circle'></i>"

    let regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z]).{8,12}$/;

    $inputName.addEventListener("blur",() => {
        switch (true) { // compara los casos que den true
            case !$inputName.value.trim():
                $errorsName.innerHTML = `${icono}El campo nombre es obligatiorio`
                $inputName.style.borderColor = "red"
                break;
            case !regExAlpha.test($inputName.value):
                $errorsName.innerHTML = `${icono}Ingresa un nombre valido`
                $inputName.style.borderColor = "red"
                break;
            default:
                $inputName.style.borderColor = "#C1A1D3"
                $errorsName.innerHTML = ""
                break;
        }
    })
   
    $inputEmail.addEventListener("blur",() => {
        switch (true) {
            case !$inputEmail.value.trim():
                $errorsEmail.innerHTML = `${icono} El campo E-mail es obligatorio`
                $inputEmail.style.borderColor = "red"
                break;
            case !regExEmail.test($inputEmail.value):
                $errorsEmail.innerHTML = `${icono} Ingresa un E-mail valido`
                $inputEmail.style.borderColor = "red"
                break;
            default:
                $inputEmail.style.borderColor = "#C1A1D3"
                $errorsEmail.innerHTML = ""
                break;
        }
    })
    $inputPassword.addEventListener("blur",() => {
        switch (true) {
            case !$inputPassword.value.trim():
                $errorsPass.innerHTML = `${icono} El campo contraseña es obligatorio`
                $inputPassword.style.borderColor = "red"
                break;
            case !regExPass.test($inputPassword.value):
                $errorsPass.innerHTML = `${icono} La contraseña debe ser alfanumerica y debe tener 8 caracteres`
                $inputPassword.style.borderColor = "red"
                break;
            default:
                $inputPassword.style.borderColor = "#C1A1D3"
                $errorsPass.innerHTML = ""
                break;
        }
    })
    $inputConfirm.addEventListener("blur",() => {
        switch (true) {
            case !$inputConfirm.value.trim():
                $errorsPass2.innerHTML = `${icono} Debes reingresar tu contraseña`
                $inputConfirm.style.borderColor = "red"
                break;
            case $inputPassword.value != $inputConfirm.value:
                $errorsPass2.innerHTML = `${icono} Las contraseñas no coinciden`
                $inputPass2.style.borderColor = "red"
                break;
            default:
                $inputConfirm.style.borderColor = "#C1A1D3"
                $errorsPass2.innerHTML = ""
                break;
        }
    })
    $form.addEventListener("submit", (e) => {
        let error = false;
        e.preventDefault();
        let elementosForm = $form.elements;
        for (let index = 0; index < elementosForm.length - 1; index++) {
            if (elementosForm[index] == "" ) {
                elementosForm[index].style.borderColor = "#C1A1D3"
                //llenar un span con errores
                error = true
            }
            
        }
        if (!error) {
            $form.submit() 
        }
    } )

})