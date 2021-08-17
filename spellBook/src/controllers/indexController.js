let {products} = require('../dataBase/dataBase.js');

module.exports={
    index: (req, res) => { 
        let monthSelection = products.filter(product => product.seleccionadoMes === 1);
        let booksNovelties = products.slice(products.length-3);
        let mitadDeArray = products.length / 3;
        let booksCarrousel = products.slice(mitadDeArray, mitadDeArray + 5);

        res.render('index', {
            monthSelection,
            booksNovelties,
            booksCarrousel
        })},
    product: (req, res) => {
        let id =+req.params.id
        let idBook = products.filter(book => book.id === id)
        let relatedBook = products.filter(book => book.autor === idBook[0].autor);

        res.render('products/productDetail',{
            idBook: idBook[0],
            relatedBook
            
        })},

    cart: (req, res) => { res.render('products/shoppingCart')},
    books: (req, res) => { res.render('products/books')},
    novelties: (req, res) => { 
        let booksNovelties = products.slice(products.length-4);
        let booksRecommended = products.filter(product => product.seleccionadoMes == 1);

     
        res.render('products/novelties', {
            booksNovelties,
            booksRecommended
        })},
    aboutUs: (req, res) => { res.render('aboutUs')},

}