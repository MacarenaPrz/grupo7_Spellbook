let {products} = require('../dataBase/dataBase.js');

module.exports={
    login: (req,res)=>{res.render('users/login')},
    signup: (req, res) => { res.render('users/signUp')},
    register: (req, res) => { res.render('users/register')}
}