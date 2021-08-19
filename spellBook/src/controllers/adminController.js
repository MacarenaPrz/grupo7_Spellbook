const {products, writeProductsJSON} = require('../dataBase/dataBase');
const {validationResult, body} = require('express-validator');

module.exports={
    admin: (req, res) => { res.render('admin/admin')},
    newProduct: (req, res) => {
        let errors = validationResult(req);
        console.log(errors);
        if(errors.isEmpty()){
            let lastId = 1;
            products.forEach(product => {
			    if(product.id > lastId){
				lastId = product.id
			}
		});
        let { image,
            title,
            autor, 
			amount, 
			price,
			description } = req.body;

        let newProduct = {
            id: lastId + 1,
            title,
            autor,
            amount,
            price,
            description,
            image };
            
            products.push(newProduct);
            writeProductsJSON(products);

            res.redirect('/login/admin');
        } else{
             res.render('admin/admin', {errors: errors.mapped(), old: req.body})
         } 
    }
}