const { user, writeUserJSON } = require('../dataBase/dataBase.js');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const session = require('express-session');


module.exports = {
    login: (req, res) => {       
        res.render('users/login', {
        session: req.session.userLog
       
    }) },
    processLogin: (req, res) => {
        
        let errors = validationResult(req);
        if(errors.isEmpty()){
            let userLog = user.find(userL => userL.email === req.body.email)
            req.session.userLog = {
                id: userLog.id,
                email: userLog.email,
                nombre: userLog.nombre,
                rol: userLog.rol
            }
 
            if(req.body.recuerdame){
                res.cookie('logSpellbook', req.session.userLog, {maxAge : (1000*60) * 20} )
            }//{expires: new Date(Date.now() + 900000), httpOnly: true}
            /* res.locals.user = req.session.userLog;
 */
            res.redirect('/user/profile'); 
        } else {
            res.render('users/login', {
                errors: errors.mapped(),
                session: req.session.userLog
            })
        }
    },

    signup: (req, res) => { res.render('users/signUp', {
        session: req.session.userLog
    }) },

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
                password,
                
            } = req.body;

            let newUser = {
                id: ++idUser,
                nombre: name,
                email: email,
                contrasenia: bcrypt.hashSync(password.trim(), 10),
                rol: "user"
            }

            user.push(newUser);

            writeUserJSON(user);

            res.redirect('/');
        } else {
            res.render('users/signUp', {
                errors: errors.mapped(),
                session: req.session.userLog
            })

        }
    },    
    profile: (req, res) => {
        res.render('users/profile',{
            session: req.session.userLog,
           
        }) 
    },
    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/')
    }
}