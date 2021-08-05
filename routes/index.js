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



// GET users listing
router.get('/login', controller.login);
// Registro 
router.get('/signup', controller.signup);
// Info de Usuario 
router.get('/register', controller.register);
// Admin 
router.get('/admin', controller.admin);
module.exports = router;
