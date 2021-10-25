var express = require('express');
var router = express.Router();
let upload = require('../middleware/uploadProducts');
let userSession = require('../middleware/userSession');
let userAdminCheck = require('../middleware/userAdminCheck')
let uploadUser = require('../middleware/uploadAvatars')
let bookValidator = require('../middleware/createBookValidator')
let {
    admin,
    newProduct,
    editView,
    editProduct,
    deleteProduct,
    adminUser,
    deleteUser,
    infoUser,
    editUser,
        } = require('../controllers/adminController');


// Admin 
router.get('/addProduct', userSession, userAdminCheck, admin);
// Admin, new product
router.post('/addProduct', bookValidator, upload.single('imagen'), newProduct);
// Admin, edit view
router.get('/editProduct/:id', userSession, userAdminCheck, editView);
// Admin, edit product
router.put('/editProduct/:id', upload.single('imagen'), editProduct);
//Admin delete product
router.delete('/deleteProduct/:id', deleteProduct);

//ADMIN USUARIOS
router.get('/users',   userSession, userAdminCheck, adminUser)
//ADMIN ELIMINAR USUSARIO
router.delete('/deleteUser/:id', deleteUser);
//ADMIN DATOS DEL USUSARIO
router.get('/users/:id',  userSession, userAdminCheck, infoUser)
//ADMIN EDITAR USUSARIO
router.put('/users/:id', uploadUser.single('avatar'), userAdminCheck, editUser)

module.exports = router;