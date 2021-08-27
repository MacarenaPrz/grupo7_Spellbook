const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');
const sUpValidator = require('../middleware/signupValidator');

// Registro 
router.get('/signup', controller.signup);
router.post('/signup', sUpValidator, controller.createUser);// logiarse y validaciones  

// GET users listing
router.get('/', controller.login);

// Info de Usuario 
router.get('/register', controller.register);

module.exports = router