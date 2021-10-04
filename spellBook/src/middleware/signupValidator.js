const { body } = require('express-validator');
const { user } = require('../dataBase/dataBase.js');
const db = require('../dataBase/models')


module.exports = [
    body('name')
        .notEmpty().withMessage('Este campo no puede quedar vacio').bail()
        .isLength({ min: 3 }).withMessage('minimo de 3 caracteres'),

        body('email').custom(value => {
            return db.Users.findOne({
                where : {
                    email: value
                }
            })
            .then(user => {
                if(user){
                    return Promise.reject("El email ya esta registrado")
                }
            })
            }),

    body('password')
        .notEmpty().withMessage('Debes escribir tu contraseña').bail()
        .isLength({ min: 6, max: 12 }).withMessage('La contraseña debe tener entre 6 y 12 caracteres'),

    body('repeat_password')
        .custom((value, { req }) => value !== req.body.password ? false : true)
        .withMessage('Las contraseñas no coinciden'),

    body('terminos')
        .isString('on').withMessage('Debes aceptar las bases y condiciones')
]