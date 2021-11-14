
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

// FUNCION PARA EVITAR REPETIR document.querySelector
function qs(element) {
    return document.querySelector(element)
}
//OBTENGO LOS ELEMENTOS DEL MODAL
let $modalClearProduct = qs('#modal-clear-product'),
$modalButtonClearProduct = qs('#modal-button-clear-product'),
$modalButtonCancelClearProduct = qs('#modal-button-cancel-clear-product')


    //Alert para reafirmar si esta seguro de eliminar un producto
$deleteBtn.forEach(book => {
    book.addEventListener('submit', function(event){
        event.preventDefault()
        $modalClearProduct.style.display = "flex"
        $modalButtonClearProduct.addEventListener('click', () =>{
            book.submit()
        })
        $modalButtonCancelClearProduct.addEventListener('click', () => {
            $modalClearProduct.style.display = "none"
        })
    })
});

//VALIDACIONES DEL FORMULARIO

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
regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/,
regExNum = /^\d+$/,
icono = "<i class='fas fa-exclamation-circle'></i>"

//
$buttonCreate.addEventListener('click', () => {
    console.log($titulo)
    $titulo.addEventListener('blur', function(){
        console.log($titulo.value.trim())
        switch (true) {
            case !$titulo.value.trim():
                $tituloError.innerHTML =  `${icono}El campo título es obligatorio`
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
        console.log($cantidad.value.trim())
        switch (true) {
            case !$cantidad.value.trim():
                $cantidadError.innerHTML =  `${icono}El Stock es obligatorio`
                $cantidad.classList.add('invalid')
                break;  
            case !regExNum.test($cantidad.value):
                $cantidadError.innerHTML =  `${icono}El Stock no pueder ser negativo `
                $cantidad.classList.add('invalid')
            default:
                $cantidad.classList.remove("invalid");
                $cantidad.classList.add('valid')
                $cantidadError.innerHTML = ""
                break;
        }
    })
    $precio.addEventListener('blur', function(){
        console.log($precio.value.trim())
        switch (true) {
            case !$precio.value.trim():
                $precioError.innerHTML = `${icono}El precio es obligatorio`
                $precio.classList.add('invalid')
                break;  
            case $precio.value >= 0 :
                $precioError.innerHTML = `${icono}El precio debe de ser mayor a 0`
                $precio.classList.add('invalid')                
            default:
                $precio.classList.remove("invalid");
                $precio.classList.add('valid')
                $precioError.innerHTML = ""
                break;
        }
    })
    $publisher.addEventListener('blur', function(){
        console.log($publisher.value.trim())
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
        console.log($language.value.trim())
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
        console.log($publicationYear.value.trim())
        switch (true) {
            case !$publicationYear.value.trim():
                $publicationYearError.innerHTML =`${icono}El año de publicación es obligatorio`
                $publicationYear.classList.add('invalid')
                break; 
            case $publicationYear.value >= 1900 :
                    $publicationYearError.innerHTML = `${icono}El año de publicacion debe de ser mayor a 1900`
                    $publicationYear.classList.add('invalid')  
            default:
                $publicationYear.classList.remove("invalid");
                $publicationYear.classList.add('valid')
                $publicationYearError.innerHTML = ""
                break;
        }
    })
    $pages.addEventListener('blur', function(){
        console.log($pages.value.trim())
        switch (true) {
            case !$pages.value.trim():
                $pagesError.innerHTML =`${icono}La cantidad de páginas es obligatorio`
                $pages.classList.add('invalid')
                break;  
            case $pages.value >= 0 :
                $pagesError.innerHTML = `${icono}El numero de paginas debe de ser mayor a 0`
                $pages.classList.add('invalid') 
            default:
                $pages.classList.remove("invalid");
                $pages.classList.add('valid')
                $pagesError.innerHTML = ""
                break;
        }
    })
    $descripcion.addEventListener('blur', function(){
        console.log($descripcion.value.trim())
        switch (true) {
            case !$descripcion.value.trim():
                $descripcionError.innerHTML =  `${icono}La descripción es obligatorio`
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
            if(elementosFormProduct[index].value == ""){
               elementosFormProduct[index].classList.add('invalid');
                $submitError.innerHTML = `${icono}Los campos señalados son obligatorios`;
                error = true;
            }
        }


        if(!error){           
            let $modalSubmitProduct = qs('#modal-submit-product'),
            $modalButtonSubmitProduct = qs('#modal-button-submit-product'),
            $modalButtonCancelProduct = qs('#modal-button-cancel-product')

            $modalSubmitProduct.style.display = "flex"
            $modalButtonSubmitProduct.addEventListener('click', function(){
                $formProduct.submit()
            })
            $modalButtonCancelProduct.addEventListener('click', function(){
                $modalSubmitProduct.style.display = "none"
            })
        }

    })
})

