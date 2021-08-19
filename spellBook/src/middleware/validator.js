//Manejo de errores
const {check} = require('express-validator');
let validateProduct = [
    check('title').notEmpty().withMessage('Debes ingresar un titulo') ,
    check('autor').notEmpty().withMessage('Debes ingresar un autor')
];