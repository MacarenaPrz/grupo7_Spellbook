const db = require('../database/models');
const { Op } = require('sequelize');
const fetch = require('node-fetch');
const axios = require('axios');


module.exports = {
    index: (req, res) => {
        const monthSelection = db.Book.findAll({ order: [[ "id", "DESC"]], offset : 5 , limit : 3, include: [{ association: "author"}] })
        const booksCarrousel = db.Book.findAll({ order: [[ "id", "ASC"]], limit : 5, include: [{ association: "author"}] })
        const booksNovelties = db.Book.findAll({ order: [[ "id", "DESC"]], limit : 4, include: [{ association: "author"}] })
        Promise.all([monthSelection, booksCarrousel, booksNovelties])
            .then(([monthSelection, booksCarrousel, booksNovelties]) => {
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
        fetch('http://localhost:3030/api/books')
        .then(res => res.json())
        .then(result => {
            return res.render('products/shoppingCart', {
                session: req.session.userLog,
                books : result.data
            })
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
        let booksNovelties = db.Book.findAll({ order: [[ "id", "DESC"]], limit : 4, include: [{ association: "author"}] })
        let booksRecommended = db.Book.findAll({ order: [[ "id", "DESC"]], offset : 5 , limit : 3, include: [{ association: "author"}] })
        Promise.all([booksNovelties, booksRecommended])
        .then(([booksNovelties, booksRecommended]) => {
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

