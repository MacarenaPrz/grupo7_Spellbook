var express = require('express');
var router = express.Router();
const controller = require('../controllers/usersController');

// GET users listing
router.get('/', controller.login);

module.exports = router;
