const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');
const sUpValidator = require('../middleware/signupValidator');
const loginValidator = require('../middleware/loginValidator');
let userSession = require('../middleware/userSession');
const notLogin = require('../middleware/notLogin')

// Registro 
router.get('/signup', notLogin, controller.signup);
router.post('/signup', sUpValidator, controller.createUser);// logiarse y validaciones  

// GET users listing
router.get('/login',  notLogin, controller.login);
router.post('/login', loginValidator, controller.processLogin);

// Info de Usuario 
router.get('/profile', userSession, controller.profile);

//GET Logout
router.get ('/logout', controller.logout)

module.exports = router;