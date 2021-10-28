const { body, validationResult } = require('express-validator');
const db = require('../dataBase/models');
const fs = require('fs')

module.exports={
    admin: (req, res) => {
        const products = db.Book.findAll({ order: [[ "id", "DESC"]], limit : 9})
        const recommended_age = db.RecommendedAges.findAll()
        const authors = db.Authors.findAll()

        Promise.all([ products, recommended_age, authors ])

        .then(([products, recommended_age, authors] )=> {
            res.render('admin/admin', {             
                products,
                recommended_age,
                authors
        })
      
    })}, 
     newProduct: (req, res) => {
        let errors = validationResult(req);
        const products = db.Book.findAll({ order: [[ "id", "DESC"]], limit : 9})
        const recommended_age = db.RecommendedAges.findAll()
        const authors = db.Authors.findAll()

        Promise.all([ products, recommended_age, authors ])

        .then(([products, recommended_age, authors] )=> {
        if(errors.isEmpty()){
        let {titulo,
            autor, 
			cantidad, 
			precio,
			descripcion,
            recommended_age,
            publisher,
            language,
            publication_year,
            pages
         } = req.body;

        db.Book.create({
            title: titulo,
            author_id: autor, 
			stock: cantidad, 
			price: precio,
			description: descripcion,
            recommended_age_id : recommended_age,
            publisher,
            language,
            publication_year,
            pages,
            image: req.file?req.file.filename:"default-image.jpg"
        })
        .then(()=>{
             res.redirect('/admin/addProduct')
        })
        .catch(err => console.log(err));               
    }else{ /* res.send(errors.array()) */
            res.render('admin/admin', {             
                products,
                recommended_age,
                authors,
                errors : errors.array()/* Object.values(errors.mapped()) */
            })
    }
    })
    },
    editView:(req, res)=>{
        const recommended_age = db.RecommendedAges.findAll()
        const authors = db.Authors.findAll()
        const idBook = db.Book.findOne({ where : { id : req.params.id }}) 
        Promise.all([ recommended_age, authors, idBook])
        .then(([ recommended_age, authors, idBook ])=>{
          return res.render("admin/editForm",{
                recommended_age,
                idBook, 
                authors    
            })
        })
        
    },
    editProduct:(req, res)=>{
        let {titulo,
            autor, 
			cantidad, 
			precio,
			descripcion,
            recommended_age,
            publisher,
            language,
            publication_year,
            pages
         } = req.body;

        db.Book.update({
            title: titulo,
            author_id: autor, 
			stock: cantidad, 
			price: precio,
			description: descripcion,
            recommended_age_id : recommended_age,
            publisher,
            language,
            publication_year,
            pages,
            image: req.file?req.file.filename:"default-image.jpg"
        },
        {
            where: {
                id: req.params.id
            }
        })
        .then(()=>{ res.redirect( '/admin/addProduct' )})
    },
    deleteProduct: (req, res) =>{
        db.Book.findByPk(req.params.id)
        .then(product => {
            if(product.image !== "default-image.jpg" ){
                fs.existsSync("./public/images/Libros/", product.image)
                ? fs.unlinkSync("./public/images/Libros/" + product.image)
                : console.log("-- No se encontró")
                db.Book.destroy({
                    where: {
                        id: req.params.id
                    }
                })
                .then(()=>{ 
                    res.redirect('/admin/addProduct')
                })
            }else {
                db.Book.destroy({
                    where: {
                        id: req.params.id
                    }
                })
                .then(()=>{ 
                    res.redirect('/admin/addProduct')
                })
            }
                
            }          
        )      
    },
    adminUser: ( req, res ) => {
        db.Users.findAll()
        .then(users => {
            res.render('admin/userAdmin', {
                users
            })
        })
    },
    deleteUser: ( req, res ) => {
        db.Users.findByPk(req.params.id)
        .then(user => {
            if(res.locals.userLog.rol == "admin"){ //Si en session un usuario con rol admin
                if (user.avatar !== "user-image.png") { // Y su imagen no es la de default
                    fs.existsSync("./public/images/Imagenes de perfil/", user.avatar)//Si existe la ruta y el avatar
                ? fs.unlinkSync("./public/images/Imagenes de perfil/" + user.avatar)//Elimina la imagen con .unlinkSync
                : console.log("-- No se encontró")
                db.Users.destroy({ where : { id : req.params.id }})// luego busca a usuario en la DB y lo elimina
                .then(() => {             
                    res.redirect('/admin/users')//luego redirecciona a la lista de usuarios
                }) 
                } else {
                    db.Users.destroy({ where : { id : req.params.id }}) //Si el avatar es la de default solo elimina el usuario y no la imagen
                    .then(() => {             
                        res.redirect('/admin/users')// Luego redirige al listado de usuarios
                })}
            }else if (res.locals.userLog.rol == "user"){//Aca si el usuario tiene rol user
                if (user.avatar !== "user-image.png") {//Y su imagen no es la de default
                    fs.existsSync("./public/images/Imagenes de perfil/", user.avatar)//Si existe la ruta y el avatar
                ? fs.unlinkSync("./public/images/Imagenes de perfil/" + user.avatar)//Elimina la imagen con .unlinkSync
                : console.log("-- No se encontró")
                db.Users.destroy({ where : { id : req.params.id }})//uego busca a usuario en la DB y lo elimina
                .then(() => {             
                    res.redirect('http://localhost:3030/user/logout')//luego redirecciona al /logout para sacarlo de session y redireccionar al home
                }) 
                } else {
                    db.Users.destroy({ where : { id : req.params.id }})//uego busca a usuario en la DB y lo elimina
                    .then(() => {             
                        res.redirect('http://localhost:3030/user/logout')//luego redirecciona al /logout para sacarlo de session y redireccionar al home
                })}
            }
        })
    },
    infoUser: ( req, res ) => {
        db.Users.findOne({ where : { id : req.params.id }})
        .then( user => {
            res.render('admin/editUser', {
                user
            })
        })
    },
    editUser: ( req, res ) => {
        db.Users.findOne({ where :{ id : req.params.id}})
        .then(user => { 
            let {
            name,
            firstName,
            location,
            date,
            rol
        } = req.body
        db.Users.update({
            name: name ,
            last_name : firstName ,          
            country: location ,
            birthday: date ,
            avatar: req.file ? req.file.filename : user.avatar,
            rol
        },{
            where: {
                id: req.params.id
            }
        })
        .then(() =>{ 
            res.redirect('/admin/users' ) })})
        .catch(err => {console.log(err)})  
    }
}