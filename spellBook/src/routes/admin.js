var express = require('express');
var router = express.Router();

let {
    admin,
    newProduct,
        } = require('../controllers/adminController')

// Admin 
router.get('/', admin);
// Admin, new product
router.post('/', newProduct);

module.exports = router;