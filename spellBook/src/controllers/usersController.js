const { user, writeUserJSON } = require('../dataBase/dataBase.js');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')


module.exports = {
    login: (req, res) => { res.render('users/login') },
    checkLogin: (req, res) => {        
        let errors = validationResult(req);
        res.send(errors)
        if(errors.isEmpty()) {
            
            let user = user.find(user => user.email === req.body.name)
            
            req.session.user = {
                id: user.id,
                nombre: user.nombre,
                email: user.email,
               

            }
            if(req.body.recuerdame){
                res.cookie('userLogin', req.session.user, {maxAge: 1000*60*60});
            }

            res.locals.user = req.session.user;

            res.redirect('/')
        }else{
            res.render('users/login', {
                errors : errors.mapped(),
                old: req.body
            })
        }
    },

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