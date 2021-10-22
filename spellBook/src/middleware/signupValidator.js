const { body } = require('express-validator');
const db = require('../dataBase/models');


module.exports = [
    body('name')
        .notEmpty().withMessage('Debes ingresar un nombre').bail()
        .isLength({ min: 3 }).withMessage('Tu nombre debe tener un minimo de 3 caracteres'),
    body('email')
        .notEmpty().withMessage('Elige una dirección de Email').bail(),
    //HAY QUE CHEQUEAR ESTO PARA QUE DEVULEVA UN MSJ DISTINTO, ES PARA HACER UNA MEJOR VALIDACION DE EMAIL
    /* body('email').custom(value => {
        regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
        if(regExEmail.test(value)){
            return errors = [{ 
                value: value,
                msg : "Dirección de Email invalido",
                param: email    
            }]
        }
    }), */
    body('email').custom(value => {
            return db.Users.findOne({
                where : { email: value }
            })
            .then(user => {
                if(user){
                    return Promise.reject("El email ya esta registrado")
                }
            })
            }),

    body('password')
        .notEmpty().withMessage('Debes escribir tu contraseña').bail()
        .isLength({ min: 8, max: 14 }).withMessage('La contraseña debe tener entre 8 y 14 caracteres'),

    body('repeat_password')
        .notEmpty().withMessage('Repite tu contraseña').bail()
        .custom((value, { req }) => value !== req.body.password ? false : true)
        .withMessage('Las contraseñas no coinciden'),

    body('terminos')
        .isString('on').withMessage('Debes aceptar los términos y condiciones')
]