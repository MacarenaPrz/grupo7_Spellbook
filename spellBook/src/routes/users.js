const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');
const sUpValidator = require('../middleware/signupValidator');
const loginValidator = require('../middleware/loginValidator');
let userSession = require('../middleware/userSession');
let userSessionCheck = require('../middleware/userSessionCheck')


// Registro 
router.get('/signup', userSessionCheck, controller.signup);
router.post('/signup', sUpValidator, controller.createUser);// logiarse y validaciones  

// GET users listing
router.get('/login', controller.login);
router.post('/login', loginValidator, controller.processLogin);

// Info de Usuario 
router.get('/profile', userSession, controller.profile);

module.exports = router;