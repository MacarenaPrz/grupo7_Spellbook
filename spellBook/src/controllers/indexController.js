const db = require('../database/models');
const { Op } = require('sequelize')

module.exports = {
    index: (req, res) => {
        const monthSelection = db.Book.findAll({ where: { id: [1, 6, 3] }, include: [{ association: "author"}] })
        const booksCarrousel = db.Book.findAll({ where: { id: [1, 6, 3, 4, 5] }, include: [{ association: "author"}] })
        const books = db.Book.findAll({ include: [{ association: "author"}] })
        Promise.all([monthSelection, booksCarrousel, books])
            .then(([monthSelection, booksCarrousel, books]) => {
                let booksNovelties = books.slice( books.length - 4 )
                res.render('index', {
                    monthSelection,
                    booksNovelties,
                    booksCarrousel
                })
            })
    },
    product: (req, res) => {
        let id = +req.params.id
        db.Book.findAll({
            where: { id: id },
            include: [{
                association: "author",
                include: [{
                    association: "books"
                }]
            }]
        })       
        .then( idBook => {
            let relatedBook = idBook[0].author.books.slice( 0, 3 )
            res.render('products/productDetail', {
                idBook: idBook[0],
                relatedBook
            })
        })
    },

    cart: (req, res) => {
        res.render('products/shoppingCart', {
            session: req.session.userLog
        })
    },
    books: (req, res) => {
        db.Book.findAll({ limit : 9 })
        .then(products => {
            res.render('products/books', {
                products
            })
        })
    },
    novelties: (req, res) => {
        db.Book.findAll({ include: [{ association : "author" }]})
        .then( books => {
            let booksNovelties = books.slice( books.length - 4 )
            let booksRecommended = books.slice( 0, 3 )
            res.render('products/novelties', {
                booksNovelties,
                booksRecommended
            })
        })      
    },
    aboutUs: (req, res) => { res.render('aboutUs') },
    search: (req, res) => {
        /* Se guarda lo que manda el input en la variable sarch */
        let search = req.query.search.toLowerCase();
       
        db.Book.findAll({
            where: { title : {[Op.substring]: search } },
            limit : 9
        })
        .then(result => {
            res.render('products/resultSearch', {
                search,
                result
            })
        })
        /* En la vista le mandamos las dos variables asi las listamos */
        
    },
}

