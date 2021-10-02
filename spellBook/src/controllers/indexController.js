let {products} = require('../dataBase/dataBase.js');
const db = require('../dataBase/models')
const { Op } = require('sequelize')

module.exports={
    index: (req, res) => { 
        let monthSelection = db.Books.findAll({ where: { month_selection: 1 }})
        /* let booksNovelties = db.Books.findAll({ where: { [Op.between]: [1 , 4]}})
        let booksCarrousel = db.Books.findAll({ where: { [Op.between]: [1 , 5]}}) */
       /*  let monthSelection = products.filter(product => product.seleccionadoMes === 1);
        let booksNovelties = products.slice(products.length-3);
        let mitadDeArray = products.length / 3;
        let booksCarrousel = products.slice(mitadDeArray, mitadDeArray + 5); */

        Promise.all([monthSelection])
        .then(([monthSelection, booksNovelties, booksCarrousel]) => {
            console.log(monthSelection, booksNovelties, booksCarrousel)
          /*   res.render('index', {
                monthSelection,
                booksNovelties,
                booksCarrousel
        }) */
            
        })
        .catch(err => console.log(err))    
    },
    product: (req, res) => {
        let id =+req.params.id
        let idBook = products.filter(book => book.id === id)
        let relatedBook = products.filter(book => book.autor === idBook[0].autor);

        res.render('products/productDetail',{
            idBook: idBook[0],
            relatedBook
            
        })},

    cart: (req, res) => { res.render('products/shoppingCart', {
        session: req.session.userLog
    })},
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

