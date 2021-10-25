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
function checkFileType(file, cb){
    // Los permitidos
    const filetypes = /jpeg|jpg|png/;
    // Chequear que se cumpla
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Chequear mime
    const mimetype = filetypes.test(file.mimetype);
  
    if(mimetype && extname){
      return cb(null,true);
    } else {
      cb('Error: Images Only!');
    }
}
const uploadFile = multer({
    storage: storage,
    fileFilter: (req, file, cb)=>{
        checkFileType(file, cb);
    }
});

module.exports = uploadFile;