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
$descripcion = qs('#description'),
$descripcionError = qs('#description-error'),
$formProduct = qs('#product'),
$submitError = qs('#submit-error'),
regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
regExDNI = /^[0-9]{7,8}$/,
regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
let icono = "<i class='fas fa-exclamation-circle'></i>"//icono de alerta (!)


    console.log($titulo)
    $titulo.addEventListener('blur', function(){
        console.log($titulo.value.trim())
        switch (true) {
            case !$titulo.value.trim():
                $tituloError.innerHTML = `${icono}El campo titulo es obligatorio`
               $titulo.classList.add('invalid')
                break;
            case !regExAlpha.test($titulo.value):
                $tituloError.innerHTML = `${icono}Ingresa un título válido`
               $titulo.classList.add('invalid')
                break;    
            default:
               $titulo.classList.remove("invalid");
               $titulo.classList.add('valid')
                $tituloError.innerHTML = ""
                break;
        }
    })

    $cantidad.addEventListener('blur', function(){
        switch (true) {
            case !$cantidad.value.trim():
                $cantidadError.innerHTML = `${icono}El Stock es obligatorio`
                $cantidad.classList.add('invalid')
                break;  
            default:
                $cantidad.classList.remove("invalid");
                $cantidad.classList.add('valid')
                $cantidadError.innerHTML = ""
                break;
        }
    })
    $precio.addEventListener('blur', function(){
        switch (true) {
            case !$precio.value.trim():
                $precioError.innerHTML = `${icono}El precio es obligatorio`
                $precio.classList.add('invalid')
                break;  
            default:
                $precio.classList.remove("invalid");
                $precio.classList.add('valid')
                $precioError.innerHTML = ""
                break;
        }
    })
    $publisher.addEventListener('blur', function(){
        switch (true) {
            case !$publisher.value.trim():
                $publisherError.innerHTML = `${icono}La editorial es obligatorio`
                $publisher.classList.add('invalid')
                break;  
            default:
                $publisher.classList.remove("invalid");
                $publisher.classList.add('valid')
                $publisherError.innerHTML = ""
                break;
        }
    })
    $language.addEventListener('blur', function(){
        switch (true) {
            case !$language.value.trim():
                $languageError.innerHTML = `${icono}El idioma es obligatorio`
                $language.classList.add('invalid')
                break;  
            default:
                $language.classList.remove("invalid");
                $language.classList.add('valid')
                $languageError.innerHTML = ""
                break;
        }
    })
    $publicationYear.addEventListener('blur', function(){
        switch (true) {
            case !$publicationYear.value.trim():
                $publicationYearError.innerHTML = `${icono}El año de publicación es obligatorio`
                $publicationYear.classList.add('invalid')
                break;  
            default:
                $publicationYear.classList.remove("invalid");
                $publicationYear.classList.add('valid')
                $publicationYearError.innerHTML = ""
                break;
        }
    })
    $pages.addEventListener('blur', function(){
        switch (true) {
            case !$pages.value.trim():
                $pagesError.innerHTML = `${icono}La cantidad de páginas es obligatorio`
                $pages.classList.add('invalid')
                break;  
            default:
                $pages.classList.remove("invalid");
                $pages.classList.add('valid')
                $pagesError.innerHTML = ""
                break;
        }
    })
    $descripcion.addEventListener('blur', function(){
        switch (true) {
            case !$descripcion.value.trim():
                $descripcionError.innerHTML = `${icono}La descripción es obligatorio`
                $descripcion.classList.add('invalid')
                break;  
            default:
                $descripcion.classList.remove("invalid");
                $descripcion.classList.add('valid')
                $descripcionError.innerHTML = ""
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
           // $imgPreview.innerHTML = '';
            return false;
        }else{
            // Image preview
            console.log($image.files);
            if($image.files && $image.files[0]){
                let reader = new FileReader();
                reader.onload = function(e){
                    //$imgPreview.innerHTML = '<img src="' + e.target.result +'"/>';
                };
                reader.readAsDataURL($image.files[0]);
                $imageError.innerHTML = '';
                $image.classList.remove('invalid')
            }
        }
    })

    $formProduct.addEventListener('submit',function(event){
        let error = false;
        event.preventDefault()      
        let elementosFormProduct = this.elements      
        
        for (let index = 0; index < elementosFormProduct.length-2; index++) {
            if(elementosFormProduct[index].value == "" ){
                console.log(elementosFormProduct[index])
               elementosFormProduct[index].classList.add('invalid');
                $submitError.innerHTML = `${icono}Los campos señalados son obligatorios`
                error = true;
            }
        }
        if(!error){
            confirm('¿Desea guardar los cambios?')
            if(confirm){
                console.log('Todo bien');
                $formProduct.submit()
            }           
        }

    })
//CANCELAR LA MODIFICACION
/* let $buttonCancel = qs('#cancel-edit')
$buttonCancel.addEventListener('click', function(event) {
    event.preventDefault()
     confirm('Si acepta no se guardaran los cambios')
    if(confirm){
       window.location.href = "http://localhost:3030/admin/addProduct"
    }
    }) */
