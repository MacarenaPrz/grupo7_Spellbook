const { user, writeUserJSON } = require('../dataBase/dataBase.js');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')


module.exports = {
    login: (req, res) => { res.render('users/login') },

    signup: (req, res) => { res.render('users/signUp') },

    createUser: (req, res) => {

        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let idUser = 1;
            user.forEach(element => {
                if (element.id > idUser) {
                    idUser = element.id
                }
            });

            let {
                name,
                email,
                password
            } = req.body;

            let newUser = {
                id: ++idUser,
                nombre: name,
                email: email,
                contrasenia: bcrypt.hashSync(password.trim(), 10),
            }

            user.push(newUser);

            writeUserJSON(user);

            res.redirect('/');
        } else {
            res.render('users/signUp', {
                errors: errors.mapped(),
            })

        }
    },


    register: (req, res) => { res.render('users/register') },
}