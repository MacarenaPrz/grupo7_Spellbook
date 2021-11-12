var express = require('express');
var router = express.Router();
const productController = require('../controllers/apis/apiProductController');

//ALL BOOKS
router.get('/books', productController.getAllBooks)

module.exports = router