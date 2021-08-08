
module.exports={
    index: (req, res) => { res.render('index')},
    product: (req, res) => { res.render('productDetail')},
    cart: (req, res) => { res.render('shoppingCart')},
    books: (req, res) => { res.render('books')},
    novelties: (req, res) => { res.render('novelties')},
    aboutUs: (req, res) => { res.render('aboutUs')},

}