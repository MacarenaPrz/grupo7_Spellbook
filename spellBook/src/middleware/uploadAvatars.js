const path = require('path');

//MULTER imagenes
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, path.join(__dirname, '../../public/images/Imagenes de perfil'));
    },
    filename: (req, file, cb)=>{
        const newFileName = 'img-'+Date.now()+path.extname(file.originalname);
        cb(null, newFileName)
    }
})

const uploadFile = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
          cb(null, true);
        } else {
          cb(null, false);
          /*cb(new Error('Solo se permite extensión .png, .jpg y .jpeg'));*/
          
        }
      }
});

module.exports = uploadFile;