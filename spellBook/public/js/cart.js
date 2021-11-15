
function qs(element) {
    return document.querySelector(element)
}
//FUNCION PARA SUMAR EL TOTAL DE LOS PRECIOS
function sum(input){             
    if (toString.call(input) !== "[object Array]"){
        return false;
    } 
    var total =  0;
    for(var i=0;i<input.length;i++){                  
        if(isNaN(input[i])){
               continue;
            }
         total += Number(input[i]);
        }
        return total;      
      }

 let $buyButtons =document.querySelectorAll('#buy-button')
console.log(localStorage.getItem("bookCart"))

    if(localStorage.getItem("bookCart") === null){
        
        let buyBooks = [];
        $buyButtons.forEach(button => {
            button.addEventListener('click', () => {
            let confirmation = confirm('¿Estas seguro que quieres sumar al carrito?')
            if (confirmation) {               
                buyBooks.push(button.value)
                localStorage.setItem('bookCart', buyBooks)
              
                console.log(localStorage)
                }
            })
        })
    } else {
        let buyBooks = [localStorage.getItem("bookCart")]
        $buyButtons.forEach(button => {
            button.addEventListener('click', () => {
            let confirmation = confirm('¿Estas seguro que quieres sumar al carrito?')
            if (confirmation) {               
                buyBooks.push(button.value)
                localStorage.setItem('bookCart', buyBooks)
                
                console.log(localStorage)
                }
            })
        })
    }
    console.log(location.href)
    if (location.href == "http://localhost:3030/cart"){
        if (localStorage.getItem("bookCart")!== null){
    let $buttonClear = qs('#clear-cart') 
    $buttonClear.addEventListener('click', () => {
        localStorage.clear()
        window.location.reload()
    })
    

    let $title = document.querySelector('#title-cart')
    let newBook = []
    async function fetchBooks () {
        await fetch('http://localhost:3030/api/books')
        .then(response => response.json())
        .then(result => {
            //ordena lo que trae de fetch por id decendientemente
            let books = result.data.sort((prev, next) =>
            prev.id > next.id
                ? 1
                : prev.id < next.id
                ? -1
                : 0
            );
        let booksCart =localStorage.getItem("bookCart").split(",") 
        console.log(result)

            booksCart.forEach((b, index) => {
                 newBook.push(books.find(e => e.id === +b))
            })
            
            //ordena los libros por id decendientemente
            newBook.sort((prev, next) =>
            prev.id > next.id 
            ? 1 : prev.id < next.id 
            ? -1 : 0) //Ordenamos los resultados por id


             let $conteinerCarts = qs('#conteiner-cart-items-1');
             let $conteinerPrice = qs('#conteiner-price');
             let $subtotal =qs('#subtotal');
             let $total = qs('#total');
             let total = []
             let repetidos = []

            console.log(newBook)
            //obtener un array con los valores repetidos
            const busqueda = newBook.reduce((acc, book) => {

                const clave = JSON.stringify(book);
                acc[clave] = ++acc[clave] || 0;
                return acc;
              }, {});             
              
              const repeated = newBook.filter( (book) => {
                  return busqueda[JSON.stringify(book)];
              });
              
            console.log(repeated);
            //obtener valores unicos de un array
            function onlyUnique(value, index, self) { 
                return self.indexOf(value) === index;
            }
            var unique = repeated.filter( onlyUnique )
            console.log(unique)

            //lista los productos del carrito
            newBook.forEach(book => {
                total.push(book.price)
                 $conteinerCarts.innerHTML +=`<article  class="conteiner-item">   
                    <div class="item-left">
                     <img class="buy-image" src="images/libros/${book.image}" alt="">
                     <p>${book.title}</p>
                    </div>
                    <div class="item-right">   
                         <i class="far fa-trash-alt right"></i>
                        <p>$ ${book.price}</p>
     
                         <!-- BOTON DE CANTIDAD DE UNIDADES -->
                        <form action="/carrito" method="GET">
                             <label>Cantidad: </label>
                             <select  class="quantity-button" name="cantidad">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </form>
                     </div>
                 </article>`;

                $conteinerPrice.innerHTML += 
                `<div class="conteiner-price">
                    <p>${book.title}</p>
                    <p>$ ${book.price}</p>
                </div>`;
                
             })

             $subtotal.innerHTML += `$ ${sum(total)}`
             $total.innerHTML += `$ ${sum(total)}`
        })} 
        fetchBooks() 
    }
    else {
        //MENSAJES SI NO SE PUSIERON BOOKS EN EL CARRITO
        let $conteinerCarts = qs('#conteiner-cart-items-1');
        let $buttonClear = qs('#clear-cart').style.display = "none"
        let $detailBuy =qs('#detail-buy').style.display = "none"
        let $recommendedTitle = qs('#recommended-title').innerText = "Puedes enpezar con algunos de estos"
        $conteinerCarts.innerHTML = "<h1> No has comprado nada aún </h1>";

}}


