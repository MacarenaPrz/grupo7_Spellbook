var express = require('express');
var router = express.Router();
let upload = require('../middleware/uploadProducts')

let {
    admin,
    newProduct,
    deleteProduct
        } = require('../controllers/adminController')

// Admin 
router.get('/addProduct', admin);
// Admin, new product
router.post('/addProduct', upload.single('imagen'), newProduct);

//Admin delete product
router.delete('/deleteProduct/:id', deleteProduct);




module.exports = router;