
//VALIDACIONES DEL FORMULARIO
// FUNCION PARA EVITAR REPETIR document.querySelector
function qs(element) {
    return document.querySelector(element)
}
//VARIABLES PARA OBTENER TODOS LOS ELEMENTOS A VALIDAR
let $titulo = qs('#titulo'),
$tituloError = qs('#titulo-error'),
$cantidad = qs('#amount'),
$cantidadError = qs('#cantidad-error'),
$precio = qs('#precio'),
$precioError = qs('#precio-error'),
$publisher = qs('#publisher'),
$publisherError = qs('#publisher-error')
$language = qs('#language'),
$languageError =qs('#language-error'),
$publicationYear = qs('#publication_year'),
$publicationYearError = qs('#publication_year-error'),
$pages = qs('#pages'),
$pagesError = qs('#pages-error'),
$image =qs('#image'),
$imageError = qs('#image-error'),
$imgPreview = qs('#img-preview'),
$imgBefore = qs('#img-before'),
$descripcion = qs('#description'),
$descripcionError = qs('#description-error'),
$formProduct = qs('#product'),
$submitError = qs('#submit-error'),
regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
regExDNI = /^[0-9]{7,8}$/,
regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
let icono = "<i class='fas fa-exclamation-circle'></i>"//icono de alerta (!)
var validationsErrors = true

    $titulo.addEventListener('blur', function(){
        switch (true) {
            case !$titulo.value.trim():
                $tituloError.innerHTML = `${icono}El campo titulo es obligatorio`
               $titulo.classList.add('invalid')
               validationsErrors = false
                break;
            case !regExAlpha.test($titulo.value):
                $tituloError.innerHTML = `${icono}Ingresa un título válido`
               $titulo.classList.add('invalid')
               validationsErrors = false
                break;    
            default:
               $titulo.classList.remove("invalid");
               $titulo.classList.add('valid')
                $tituloError.innerHTML = ""
                validationsErrors = true
                break;
        }
    })

    $cantidad.addEventListener('blur', function(){
        switch (true) {
            case !$cantidad.value.trim():
                $cantidadError.innerHTML = `${icono}El Stock es obligatorio`
                $cantidad.classList.add('invalid')
                validationsErrors = false
                break;  
            default:
                $cantidad.classList.remove("invalid");
                $cantidad.classList.add('valid')
                $cantidadError.innerHTML = ""
                validationsErrors = true
                break;
        }
    })
    $precio.addEventListener('blur', function(){
        switch (true) {
            case !$precio.value.trim():
                $precioError.innerHTML = `${icono}El precio es obligatorio`
                $precio.classList.add('invalid')
                validationsErrors = false
                break;  
            default:
                $precio.classList.remove("invalid");
                $precio.classList.add('valid')
                $precioError.innerHTML = ""
                validationsErrors = true
                break;
        }
    })
    $publisher.addEventListener('blur', function(){
        switch (true) {
            case !$publisher.value.trim():
                $publisherError.innerHTML = `${icono}La editorial es obligatorio`
                $publisher.classList.add('invalid')
                validationsErrors = false
                break;  
            default:
                $publisher.classList.remove("invalid");
                $publisher.classList.add('valid')
                $publisherError.innerHTML = ""
                validationsErrors = true
                break;
        }
    })
    $language.addEventListener('blur', function(){
        switch (true) {
            case !$language.value.trim():
                $languageError.innerHTML = `${icono}El idioma es obligatorio`
                $language.classList.add('invalid')
                validationsErrors = false
                break;  
            default:
                $language.classList.remove("invalid");
                $language.classList.add('valid')
                $languageError.innerHTML = ""
                validationsErrors = true
                break;
        }
    })
    $publicationYear.addEventListener('blur', function(){
        switch (true) {
            case !$publicationYear.value.trim():
                $publicationYearError.innerHTML = `${icono}El año de publicación es obligatorio`
                $publicationYear.classList.add('invalid')
                validationsErrors = false
                break;  
            default:
                $publicationYear.classList.remove("invalid");
                $publicationYear.classList.add('valid')
                $publicationYearError.innerHTML = ""
                validationsErrors = true
                break;
        }
    })
    $pages.addEventListener('blur', function(){
        switch (true) {
            case !$pages.value.trim():
                $pagesError.innerHTML = `${icono}La cantidad de páginas es obligatorio`
                $pages.classList.add('invalid')
                validationsErrors = false
                break;  
            default:
                $pages.classList.remove("invalid");
                $pages.classList.add('valid')
                $pagesError.innerHTML = ""
                validationsErrors = true
                break;
        }
    })
    $descripcion.addEventListener('blur', function(){
        switch (true) {
            case !$descripcion.value.trim():
                $descripcionError.innerHTML = `${icono}La descripción es obligatorio`
                $descripcion.classList.add('invalid')
                validationsErrors = false
                break;  
            default:
                $descripcion.classList.remove("invalid");
                $descripcion.classList.add('valid')
                $descripcionError.innerHTML = ""
                validationsErrors = true
                break;
        }
    })



    $image.addEventListener('change', 
    function fileValidation(){
    let filePath = $image.value, //Capturo el valor del input
            allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i //Extensiones permitidas
        if(!allowefExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
            $imageError.innerHTML = `${icono}Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)`;
            $image.value = '';
            $imgPreview.innerHTML = '';
            return false;
        }else{
            // Image preview
            if($image.files && $image.files[0]){
                let reader = new FileReader();
                reader.onload = function(e){
                   $imgPreview.innerHTML = '<img src="' + e.target.result +'" class="edit-form-image"/>';
                };
                reader.readAsDataURL($image.files[0]);
                $imgBefore.style.display = 'none'
                $imageError.innerHTML = '';
                $image.classList.remove('invalid')
                return true
            }
        }
    }) 
  
    
    $formProduct.addEventListener('submit',function(event){
        let error = false;
        event.preventDefault()      
        let elementosFormProduct = this.elements 
        for (let index = 0; index < elementosFormProduct.length - 3; index++) {
            if(elementosFormProduct[index].value == "" ){
                if (elementosFormProduct[index].name !== "imagen"){
                elementosFormProduct[index].classList.add('invalid');
                $submitError.innerHTML = `${icono}Los campos señalados son obligatorios`
                error = true;
                }else {
                    $imageError.innerHTML = `${icono} Debes cargar una imagen`
                    $submitError.innerHTML = `${icono}Los campos señalados son obligatorios`
                    error = true;
                }
            }
        }       

        if(!error && validationsErrors){
            //MODAL DE ACEPTAR MODIFICACIÓN
            let $modalSubmitEdit = qs('#modal-submit-edit'),
            $modalButtonSubmitEdit = qs('#modal-button-submit-edit'),
            $modalButtonCancelEdit = qs('#modal-button-cancel-edit')

            $modalSubmitEdit.style.display = "flex"
            $modalButtonSubmitEdit.addEventListener('click', function(){
                $formProduct.submit()
            })
            $modalButtonCancelEdit.addEventListener('click', function(){
                $modalSubmitEdit.style.display = "none"
            })
        }
    })
   
//CANCELAR LA MODIFICACION
let $buttonCancel = qs('#cancel-edit'),
$modalCancelEdit = qs('#modal-cancel-edit'),
$modalButtonGoEdit = qs('#modal-button-go-edit'),
$modalButtonReturnEdit = qs('#modal-button-return-edit')

$buttonCancel.addEventListener('click', function(event) {
    event.preventDefault()
    $modalCancelEdit.style.display = "flex"
    $modalButtonGoEdit.addEventListener('click', function() {
        window.location.href = 'http://localhost:3030/admin/addProduct'
    })
    $modalButtonReturnEdit.addEventListener('click', function(){
        $modalCancelEdit.style.display = "none"
    })
   })

        