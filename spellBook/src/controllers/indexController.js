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
    books: (req, res) => { res.render('products/books',{
        products
    })},
    novelties: (req, res) => { 
        let booksNovelties = products.slice(products.length-4);
        let booksRecommended = products.filter(product => product.seleccionadoMes == 1);

     
        res.render('products/novelties', {
            booksNovelties,
            booksRecommended
        })},
    aboutUs: (req, res) => { res.render('aboutUs')},
    search: (req, res) => {
        /* Se guarda lo que manda el input en la variable sarch */
        let search = req.query.search.toLowerCase();
        /* En la variable result vamos a pushear todo lo que coincida con search */
		let result = [];
		products.forEach( product => {
			if(product.titulo.toLowerCase().includes(search)){
				result.push(product)
			}
		});
        /* En la vista le mandamos las dos variables asi las listamos */
		res.render('products/resultSearch', {
			search,
			result
		})
	},
}

