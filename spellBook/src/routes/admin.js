var express = require('express');
var router = express.Router();
let upload = require('../middleware/uploadProducts');
let userSession = require('../middleware/userSession');
let userAdminCheck = require('../middleware/userAdminCheck')

let {
    admin,
    newProduct,
    editView,
    editProduct,
    deleteProduct,
    adminUser,
    deleteUser,
        } = require('../controllers/adminController');


// Admin 
router.get('/addProduct', userSession, userAdminCheck, admin);
// Admin, new product
router.post('/addProduct', upload.single('imagen'), newProduct);
// Admin, edit view
router.get('/editProduct/:id', userSession, userAdminCheck, editView);
// Admin, edit product
router.put('/editProduct/:id', upload.single('imagen'), editProduct);
//Admin delete product
router.delete('/deleteProduct/:id', deleteProduct);

//ADMIN USUARIOS
router.get('/users',  userAdminCheck, adminUser)
//ADMIN ELIMINAR USUSARIO
router.delete('/deleteUser/:id', userAdminCheck, deleteUser);

module.exports = router;