const { body }= require('express-validator');
const { user } = require('../dataBase/dataBase.js');
const bcrypt = require('bcryptjs');

module.exports = [
    body('name')
        .notEmpty().withMessage('Eres un mago?? Por que desaparecio tu E-mail').bail()
        .isEmail().withMessage('Ups!!! creo que te confundiste Muggle').bail()
        .custom(value => {
            let emailValid = user.find(email => email.email === value);

            if (emailValid !== undefined) {
                return true
            } else {
                return false
            }
        }).withMessage(' '),


    body('password')
        .notEmpty().withMessage('Ups!!! olvidaste tus palabras magicas').bail()
        .custom(value => {
            let emailValid = user.find(email=> email.email === require.body.name )
            return bcrypt.compareSync(value, emailValid.password)
        }).withMessage(' ')
]