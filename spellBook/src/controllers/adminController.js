const {products, writeProductsJSON} = require('../dataBase/dataBase');
/* const {validationResult, body} = require('express-validator'); */

module.exports={
    admin: (req, res) => {
         res.render('admin/admin', {
             
             products
    })}, 
     newProduct: (req, res) => {
        res.send(req.body) //aca tendria que mostrar en el navegador el req.body osea lo que esta en el formulario pero no aparece, creo que hay un problema en el form
        let lastId = 1;
        
		products.forEach(product => {
			if(product.id > lastId){
				lastId = product.id
			}
		}); // el codigo anterior con la variable lastID es para agregar el nuevo id al producto sin pisar ninguno
       
        let {imagen,
            titulo,
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
                imagen:"default-image.jpg"};

            products.push(newProduct);
            writeProductsJSON(products);
    
            res.redirect('/admin');
                
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