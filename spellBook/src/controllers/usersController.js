const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../dataBase/models')

module.exports = {
    login: (req, res) => {       
        res.render('users/login') },
    processLogin: (req, res) => {
        
        let errors = validationResult(req);
        if(errors.isEmpty()){
            db.Users.findOne({
                where: { email: req.body.email }
            })
            .then(userLog => {
                req.session.userLog = {
                    id: userLog.id,
                    email: userLog.email,
                    name: userLog.name,
                    rol: userLog.rol
                }
     
                if(req.body.recuerdame){
                    res.cookie('logSpellbook', req.session.userLog, {maxAge: (1000*60) * 60} )
                }
                res.redirect('/user/profile'); 
                
            })
            .catch(err => console.log(err))            
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
            let {
                name,
                email,
                password,                
            } = req.body;

            db.Users.create({
                name,
                email,
                password : bcrypt.hashSync(password.trim(), 10),
                country : '',
                birthday : '',
                avatar : 'user-image.png',
                rol: 'user'
            })
            .then(()=>{
                res.redirect('/user/login')
            })
            .catch(err => console.log(err))
        } else {
            res.render('users/signUp', {
                errors: errors.mapped()
            })
        }
    },    
    profile: (req, res) => {
        res.render('users/profile',{
            session: req.session.userLog,           
        }) 
    },
    logout: (req, res) => {
        res.clearCookie('logSpellbook')
        req.session.destroy();
        res.redirect('/')
    }
}