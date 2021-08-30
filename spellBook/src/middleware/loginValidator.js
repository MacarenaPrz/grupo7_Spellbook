const { check, body } = require('express-validator');
const { user } = require('../dataBase/dataBase.js');
const bcrypt = require('bcryptjs');

module.exports = [
    check('email')
        .notEmpty().withMessage('Este campo no puede quedar vacio').bail()
        .isEmail().withMessage('Debes ingresar un email válido').bail(),

    body('email')
        .custom(value => {
            let validUser = user.find(element => element.email === value)
            if (validUser !== undefined) {
                return true
            } else {
                return false
            }
        }).withMessage('El email no está registrado'),

    check('password')
        .notEmpty().withMessage('Debes escribir tu contraseña').bail(),
    body('password')
        .custom((value,{req}) => {
            let validUser = user.find(user => user.email === req.body.email)
            return bcrypt.compareSync(value, validUser.contrasenia)
        }).withMessage('Contraseña inválida')
]