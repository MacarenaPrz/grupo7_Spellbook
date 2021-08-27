const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');
const sUpValidator = require('../validator/signupValidator');
const loginValidator = require('../validator/loginValidator')

// Registro 
router.get('/signup', controller.signup);
router.post('/signup', sUpValidator, controller.createUser);// logiarse y validaciones  

// GET users listing
router.get('/', controller.login);
// POST login de usuarios
router.post('/', loginValidator, controller.checkLogin);

// Info de Usuario 
router.get('/register', controller.register);

module.exports = router