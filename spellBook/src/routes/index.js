var express = require('express');
var router = express.Router();
const controller = require('../controllers/indexController')
let userSession = require('../middleware/userSession');

//  Home 
router.get('/', controller.index);
// Productos 
router.get('/product', controller.books);
// Detalle de producto 
router.get('/product/:id', controller.product);
// Shopping Cart 
router.get('/cart',/*  userSession, */ controller.cart);
// Novelties 
router.get('/novelties', controller.novelties);
// About us
router.get('/aboutUs', controller.aboutUs);
//Search
router.get('/search', controller.search); 


module.exports = router;
