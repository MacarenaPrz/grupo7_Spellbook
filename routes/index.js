var express = require('express');
var router = express.Router();
const controller = require('../controllers/indexController')

//  Home 
router.get('/', controller.index);

module.exports = router;
