const {products, writeProductsJSON} = require('../dataBase/dataBase');
const { product } = require('./indexController');
/* const {validationResult, body} = require('express-validator'); */

module.exports={
    admin: (req, res) => {
         res.render('admin/admin', {             
             products,
             session: req.session.userLog
    })}, 
     newProduct: (req, res) => {
        let lastId = 1;
        
		products.forEach(product => {
			if(product.id > lastId){
				lastId = product.id
			}
		}); // el codigo anterior con la variable lastID es para agregar el nuevo id al producto sin pisar ninguno
       
        let {titulo,
            autor, 
			cantidad, 
			precio,
			descripcion } = req.body;

            let newProduct = {
                id: lastId + 1,
                titulo, 
                autor,
                cantidad,
                precio,
                descripcion,
                imagen: req.file?req.file.filename:"default-image.jpg"};

            products.push(newProduct);
            writeProductsJSON(products);
    
            res.redirect('/admin/addProduct');

                
    },
    editView:(req, res)=>{
        let idBook = products.find(book => book.id === +req.params.id);
        res.render("admin/editForm",{
            idBook,
            session: req.session.userLog    
        })
    },
    editProduct:(req, res)=>{
        let {titulo,
            autor, 
			cantidad, 
			precio,
			descripcion } = req.body;

        products.forEach(product => {
            if(product.id === +req.params.id){
                product.id = product.id,
                product.titulo = titulo,
                product.autor = autor,
                product.cantidad = cantidad,
                product.precio = precio,
                product.descripcion = descripcion,
                product.imagen = req.file?req.file.filename: product.imagen 
                }
            })
        writeProductsJSON(products);
        res.redirect("/admin/addProduct")
    },
    deleteProduct: (req, res) =>{
        products.forEach(product =>{
            if(product.id == +req.params.id){
                let eraseProduct = products.indexOf(product)
                products.splice(eraseProduct, 1)
               
            }
        })

       
        writeProductsJSON(products);
    
        res.redirect('/admin/addProduct');


    } 

}
       /* 
            else{
             res.render('/admin', {errors: errors.mapped(), old: req.body})
         } */


 /*  let errors = validationResult(req);
        console.log(errors);
        if(errors.isEmpty()){
            let lastId = 1;
            products.forEach(product => {
			    if(product.id > lastId){
				lastId = product.id
			}
		}); */