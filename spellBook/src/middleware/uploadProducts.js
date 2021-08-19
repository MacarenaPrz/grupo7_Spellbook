const path = require('path');

//MULTER imagenes
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, path.join(__dirname, '../public/images/Libros'));
    },
    filename: (req, file, cb)=>{
        const newFileName = 'img-'+Date.now()+path.extname(file.originalname);
        cb(null, newFileName)
    }
})
const uploadFile = multer({storage});