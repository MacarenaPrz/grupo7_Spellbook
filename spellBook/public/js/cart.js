
function qs(element) {
    return document.querySelector(element)
}
 let $buyButtons =document.querySelectorAll('#buy-button')

    if(localStorage.getItem("cart") === null){
         
        let contador = 0
        $buyButtons.forEach(button => {
            button.addEventListener('click', () => {
            let confirmation = confirm('¿Estas seguro que quieres sumar al carrito?')
            if (confirmation) {
                let buyBooks =[]
                buyBooks.push(button.value)
                localStorage.setItem(`${contador+1}`, buyBooks)
                console.log(localStorage)
                contador = contador+1
                }
            })
        }) 
    }
    