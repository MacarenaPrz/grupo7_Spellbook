window.addEventListener("load",()=>{
    let $email = document.querySelector("#email"),
    $pass = document.querySelector("#password"),
    $form = document.querySelector("#form"),
    $formError = document.querySelector('#formError')
    $emailError = document.querySelector("#emailError"),
    $passwordError = document.querySelector("#passwordError"),

    icono = "<i class='fas fa-exclamation-circle'></i>"
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i//expresión regular para validar email
    
    $email.addEventListener("blur" , () => {
        switch (true) {
            case !$email.value.trim():
                $emailError.innerHTML = `${icono} Debes ingresar un email`
                $email.style.borderColor = "red"
                break;
            case !regExEmail.test($email.value):
                $emailError.innerHTML = `${icono}Debe ingresar un email válido`
                $email.classList.add('invalid')
                break;   
            default:
                $emailError.innerHTML = ``
                $email.style.borderColor = "#C1A1D3"
                break;
        }
    })
    $pass.addEventListener("blur" , () => {
        switch (true) {
            case !$pass.value.trim():
                $passwordError.innerHTML = `${icono} Debes ingresar una contraseña`
                $pass.style.borderColor = "red"
                break;
        
            default:
                $passwordError.innerHTML = ``
                $pass.style.borderColor = "#C1A1D3"
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
                $formError.innerHTML = "Los campos señalados deben llenarse"
                error = true
            }
            
        }
        if(!error){
            console.log('Todo bien');
            $form.submit()
        }
    } )
})