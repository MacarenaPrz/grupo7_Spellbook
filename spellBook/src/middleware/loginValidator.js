const { check, body } = require('express-validator');
const { user } = require('../dataBase/dataBase.js');
const bcrypt = require('bcryptjs');
const db = require('../dataBase/models');

module.exports = [
    check('email')
        .notEmpty().withMessage('Este campo no puede quedar vacio').bail()
        .isEmail().withMessage('Debes ingresar un email válido').bail(),

        body("email").custom((value,  {req}) => {
            return db.Users.findOne({ where: { email: value } })
              .then((user) => {
                if (!user || !bcrypt.compareSync(req.body.password, user.password)){
                  return Promise.reject()
                }
    
              })
              .catch(() => {
                return Promise.reject("Credenciales inválidas!");
              });
          })
]