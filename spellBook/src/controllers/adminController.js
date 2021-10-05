const db = require('../dataBase/models');

module.exports={
    admin: (req, res) => {
        const products = db.Book.findAll({ order: [[ "id", "DESC"]]})
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
    },
    editView:(req, res)=>{
        const recommended_age = db.RecommendedAges.findAll()
        const authors = db.Authors.findAll()
        const idBook = db.Book.findByPk(req.params.id) 
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
        .then(()=>{ res.redirect( '/product' )})
    },
    deleteProduct: (req, res) =>{
        db.Book.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(()=>{
            res.redirect('/product')
        })
    } 
}