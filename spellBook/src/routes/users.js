var express = require('express');
var router = express.Router();
const controller = require('../controllers/usersController');
const adminController = require('../controllers/adminController');
const path = require('path');
//Manejo de errores
const {check} = require('express-validator');
let validateProduct = [
    check('title').notEmpty().withMessage('Debes ingresar un titulo') ,
    check('autor').notEmpty().withMessage('Debes ingresar un autor')
];
//MULTER imagenes
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, path.join(__dirname, '../public/images/Libros'));
    },
    filename: (req, file, cb)=>{
        const newFileName = 'img-'+Date.now()+path.extname(file.originalname);
        cb(null, newFileName)
    }
})
const uploadFile = multer({storage});
// GET users listing
router.get('/', controller.login);
// Registro 
router.get('/signup', controller.signup);
// Info de Usuario 
router.get('/register', controller.register);
// Admin 
router.get('/admin', adminController.admin);
// Admin, new product
router.post('/admin', validateProduct, uploadFile.single('image') , adminController.newProduct);
module.exports = router;
