
module.exports={
    index: (req, res) => { res.render('index')},
    product: (req, res) => { res.render('products/productDetail')},
    cart: (req, res) => { res.render('products/shoppingCart')},
    books: (req, res) => { res.render('products/books')},
    novelties: (req, res) => { res.render('products/novelties')},
    aboutUs: (req, res) => { res.render('aboutUs')},

}