const { body } = require('express-validator');
const { user } = require('../dataBase/dataBase.js')

module.exports = [
    body('name')
        .notEmpty().withMessage('Este campo no puede quedar vacio').bail()
        .isLength({ min: 3 }).withMessage('minimo de 3 caracteres'),

    body('email')
        .notEmpty().withMessage('Este campo no puede quedar vacio').bail()
        .isEmail().withMessage('Debes ingresar un email válido').bail()
        .custom(value => {
            let validEmail = user.filter(element => element.email == value)
            if (validEmail == false) {
                return true
            } else {
                return false
            }
        }).withMessage('El email ya está registrado'),

    body('password')
        .notEmpty().withMessage('Debes escribir tu contraseña').bail()
        .isLength({ min: 6, max: 12 }).withMessage('La contraseña debe tener entre 6 y 12 caracteres'),

    body('repeat_password')
        .custom((value, { req }) => value !== req.body.password ? false : true)
        .withMessage('Las contraseñas no coinciden'),

    body('terminos')
        .isString('on').withMessage('Debes aceptar las bases y condiciones')
]