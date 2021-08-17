var express = require('express');
var router = express.Router();
const controller = require('../controllers/indexController')

//  Home 
router.get('/', controller.index);
// Productos 
router.get('/product', controller.books);
// Detalle de producto 
router.get('/product/:id', controller.product);
// Shopping Cart 
router.get('/cart', controller.cart);
// Novelties 
router.get('/novelties', controller.novelties);
// About us
router.get('/aboutUs', controller.aboutUs);


module.exports = router;
