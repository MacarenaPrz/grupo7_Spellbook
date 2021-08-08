var express = require('express');
var router = express.Router();
const controller = require('../controllers/indexController')

//  Home 
router.get('/', controller.index);
// Detalle de producto 
router.get('/product', controller.product);
// Shopping Cart 
router.get('/cart', controller.cart);
// Books 
router.get('/books', controller.books);
// Novelties 
router.get('/novelties', controller.novelties);
// About us
router.get('/aboutUs', controller.aboutUs);


module.exports = router;
