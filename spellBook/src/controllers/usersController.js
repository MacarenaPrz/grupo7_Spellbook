const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../dataBase/models');
const session = require('express-session');

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
                    last_name: userLog.last_name,
                    avatar: userLog.avatar,
                    rol: userLog.rol
                }
     
                if(req.body.recuerdame){
                    res.cookie('logSpellbook', req.session.userLog, {maxAge: (1000*60) * 60} )
                }
                res.redirect('/'); 
                
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
                last_name: '',
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
        db.Users.findOne({ where: { id: res.locals.userLog.id }})
        .then(user => {
            res.render('users/profile',{
                session: req.session.userLog,
                user
            }) 
        })      
    },
    editProfile: ( req, res) => {
        db.Users.findOne({ where :{ id : req.session.userLog.id}})
        .then(user => { 
            let {
            name,
            firstName,
            location,
            date,
        } = req.body
        db.Users.update({
            name: name ,
            last_name : firstName , 
            country: location ,
            birthday: date ? date : user.birthday ,
            avatar: req.file ? req.file.filename : user.avatar
        },{
            where: {
                id: req.session.userLog.id
            }
        })
        .then(() =>{ 
            res.redirect('/user/profile' ) })})
        .catch(err => {console.log(err)})        
    },
    logout: (req, res) => {
        res.clearCookie('logSpellbook')
        req.session.destroy();
        res.redirect('/')
    }
}