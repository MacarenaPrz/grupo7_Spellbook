const { check, body } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../dataBase/models');

module.exports = [
    check('email')
        .notEmpty().withMessage('Eres un mago?? Por que desaparecio tu E-mail').bail()
        .isEmail().withMessage('Ups!!! creo que te confundiste Muggle').bail(),

      body('password')
        .notEmpty().withMessage('Ups!!! olvidaste tus palabras magicas').bail(), 

      body("password").custom((value,  {req}) => {
          return db.Users.findOne({ where: { email: req.body.email } })
            .then((user) => {                       
                if (!user || !bcrypt.compareSync(req.body.password, user.password)){
                  return Promise.reject()
                }
            })
            .catch(() => {
              if(req.body.email) {
                return Promise.reject("Nuestros Goblins no pudieron encontrar tu cuenta");
              }
             
            });
        }),
      
]